import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';




const Header = ({nick, setNick}) => {
  // const [change,setChange]=useState(null)
  const navigate =useNavigate()
  const logout=()=>{
    sessionStorage.removeItem('nickname')
    setNick(null)
    navigate('/')
  }

  // useEffect(()=>{
  //   setChange(sessionStorage.getItem('nickname'))
  // },[])


  return (
    <div className='header'>
    
    <div className='header_section'>
      <h2>
        <Link to={'/'}>로고</Link>
      </h2>
    </div>
    <div className='header_section'>
      <a href='#'>포트폴리오</a>
      <a href='#'>블로그</a>
      <a href='#'>깃 허브</a>
    </div>
    <div className='header_section'>
      {nick === null?

       <div>
       <Link to={'/login'}>로그인</Link>
       <Link to={'/join'}>회원가입</Link>
       </div>:

       <div>
       <span onClick={logout}>로그아웃</span>
       </div>
     }
     
     </div>
    
    </div>
    
  );
};

export default Header;
