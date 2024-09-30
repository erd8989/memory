import React, { useRef, useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  // const [login,setLogin]=useState('')
  const id_Ref =useRef()
  const pw_Ref =useRef()
  const navigate = useNavigate()
  
  const handleLogin =async(e)=>{
    e.preventDefault()

    let logMember ={
      id:id_Ref.current.value,
      pw:pw_Ref.current.value
    }
    let res = await api.post('/login',{log:logMember})
    console.log(res.data);

    if(res.data.result == 'success'){
      alert('성공')
      // 로그인 성공시, 세션스토리지에 보관
      //  -> 객체를 문자열로 변환 필요 json.stringify()
      console.log(JSON.stringify(res.data));

      sessionStorage.setItem('userInfo',JSON.stringify(res.data))
      
      navigate('/')
    }else{
      alert('실패')
    }
    
  }
  return (
    <div>
       <form onSubmit={handleLogin}>
      <p>
          <label>아이디:</label>
          <input type='text' ref={id_Ref}/>
          </p>
          <p>
          <label>패스워드:</label>
          <input type='password' ref={pw_Ref}/>
          </p>
          <input type='submit' value='로그인'/>
      </form>
    </div>
  )
}

export default LoginForm