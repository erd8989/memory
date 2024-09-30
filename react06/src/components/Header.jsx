import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

/*
  실습) 각 메뉴버튼을 클릭했을 때 페이지가 이동되도록 연결하시오.
   - 로고 클릭 -> 메인페이지로 이동
   - 메뉴소개 클릭 -> 상품전체목록으로 이동
   - 로그인 클릭 -> 로그인페이지로 이동

*/

const Header = ({auth, setAuth}) => {

  const navi = useNavigate();

  const goToLogin = () => {
    if(auth){
      setAuth(false)
      navi('/')
    }else{
      navi('/login');
    }
  }

  return (
    <div className='header-box'>
      <div className='header-box-logo'>
        <Link to={'/'}>
          <img src='https://cdn.bonif.co.kr/resources/web/css/images/logo_gnb.png' alt='로고이미지'/>
        </Link>
      </div>
      <div className='header-box-nav'>
        <ol className='header-box-nav-list'>
          <li>
            <Link to={'/menulist'}>메뉴소개</Link>
          </li>
        </ol>
      </div>
      <div className='header-box-util'>
        <button onClick={goToLogin}>{auth?"로그아웃":"로그인"}</button>
      </div>
    </div>
  )
}

export default Header