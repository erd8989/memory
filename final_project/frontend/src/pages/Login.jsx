import React, { useRef, useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = ({setNick}) => {

  const id_Ref =useRef()
  const pw_Ref =useRef()
  const navigate = useNavigate()
  
  const handleLogin =async(e)=>{
    e.preventDefault()

    let logMember ={
      id:id_Ref.current.value,
      pw:pw_Ref.current.value
    }
    let res = await api.post('/user/login',logMember)

    if(res.data.result == 'success'){
      alert('성공')
  
      sessionStorage.setItem('nickname',res.data.nick)
      setNick(res.data.nick)
      navigate('/')

    }else{
      Swal.fire({
        title: "에러",
        text: "실패",
        icon: "error"
      });
    }
  }
    
  return (
    <div className='content'>
      <form onSubmit={handleLogin}>
        <p>
          <label>id</label>
          <input type='text'ref={id_Ref}/>
        </p>

        <p>
          <label>pw</label>
          <input type='password'ref={pw_Ref}/>
        </p>

        <p>
          <input type='submit' value='login'/>
        </p>
      </form>
    </div>
  )
}

export default Login