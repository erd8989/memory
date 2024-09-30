import React from 'react'
import { Link } from 'react-router-dom';

/*
  실습) 썸네일을 클릭했을 때 도시락상세페이지로 이동하도록 구현하시오.
        URL패턴: '/menulist/:id'

*/

const GoodItem = ({item}) => {
  console.log(item);
  
  return (
    <div className='goods-item'>
      <div className='goods-item-icon'>
        {
          item.new?
          <em className='goods-new'>new</em>
          : item.best?
          <em className='goods-best'>best</em>
          : ""
        }
      </div>

      <div className='goods-thumb'>
        <Link to={`/menulist/${item.id}`}>
          <img src={item.main_thumb} alt='도시락상품이미지'/>
        </Link>
      </div>

      <div className='goods-name'>
        <h4>{item.name}</h4>
        <p>
          <span>{item.price}</span>원
        </p>
      </div>

    </div>
  )
}

export default GoodItem