import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
  // 로그인 상태를 저장하는 state
  const [userInfos,setUserInfos]=useState(null)

  console.log(JSON.parse(sessionStorage.getItem('userInfos')));
  // 로그아웃 기능구현
  const logout = () =>{
    alert('다시와')
    sessionStorage.removeItem('userInfos')
    setUserInfos(null)
    console.log('로그아웃 완료: userInfos가 null로 설정됨');
  }
  
  useEffect(()=>{
    const storeUserInfos = JSON.parse(sessionStorage.getItem('userInfos'));
    console.log('sessionStorage에서 가져온 userInfos:', storeUserInfos);
    setUserInfos(storeUserInfos)
  },[])

  useEffect(() => {
    console.log('현재 userInfos 상태:', userInfos);
  }, [userInfos]);


  
  return (
    <div>
        <h1>React-Node 연동실습</h1>

        {userInfos === null?
        <div>
            <Link to={'/join'}>회원가입</Link>
           <Link to={'/login'}>로그인</Link>
        </div>
        : 
        <div>
           <Link to={'/mypage'}>마이페이지</Link>
           <button onClick={logout}>로그아웃</button>
        </div>
        }
       
    </div>
  )
}

export default Main