import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GoodItem from '../components/GoodItem'

/*
  실습1) axios를 활용해서 도시락정보를 가진 URL로 데이터를 호출하시오.

  실습2) 받아온 데이터를 보관할 state를 생성하시오.
        ( 콘솔창으로 데이터 출력해보기 )

  실습3) state에 저장된 도시락정보를 출력하시오.
         - 도시락정보는 GoodItem 컴포넌트에 props로 전달
         - map() 활용

*/
const GoodList = () => {

  const [goods, setGoods] = useState(null)

  const getGoodList = async () =>{
    const DATA_URL = 'http://localhost:3004/goods_list'
    const res = await axios.get(DATA_URL)
    const data = res.data

    setGoods(data)

    console.log(data);
  }

  useEffect(()=>{
    getGoodList()
  },[])

  return (
    <div className='goods-list'>

      {goods?.map((item)=>(
        <GoodItem item={item} />
      ))}
      
    </div>
  )
}

export default GoodList