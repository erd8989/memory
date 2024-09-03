import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const GoodDetail = () => {

  const {id} = useParams()
  const [good, setGood] = useState(null)

  const getGood = async () => {
    const DATA_URL = `http://localhost:3004/goods_list/${id}`
    const res = await axios.get(DATA_URL)
    const data = res.data

    setGood(data)

    console.log(data);
  }

  useEffect(()=>{
    getGood()
  },[])

  return (
    <div className='goods-detail-box'>
      <div className='goods-detail-box-thumb'>
        <img src={good?.detail.sub_thumb} alt='도시락썸네일' />
      </div>
      <div className='goods-detail-box-info'>
        <div className='goods-detail-title'>
          <div className='goods-icon'>
            {
              good?.new?
              <em className='goods-new'>new</em>
              : good?.best?
              <em className='goods-best'>best</em>
              : ""
            }
          </div>
          <div className='goods-detail-name'>{good?.name}</div>
          <div className='goods-detail-txt'>{good?.detail.txt}</div>
          <div className='goods-detail-price-box'>
            <strong>{good?.price}</strong>원
          </div>
        </div>
        <div className='goods-detail-summary'>{good?.detail.summary}</div>
      </div>
    </div>
  )
}

export default GoodDetail