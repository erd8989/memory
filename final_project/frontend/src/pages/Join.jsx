import React, { useRef } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

const Join = () => {

  const id_ref = useRef()
  const pw_ref = useRef()
  const nk_ref = useRef()
  const navigate= useNavigate()

  const sendJoin = async(e)=>{
    e.preventDefault()

    let joinData ={
      id:id_ref.current.value,
      pw:pw_ref.current.value,
      nk:nk_ref.current.value
    }

  
    let res = await api.post('/user/Join', joinData)
    console.log(res.data);

    if(res.data.result==="성공"){
      alert('회원가입성공')
      navigate('/')
    }else{
      alert('회원가입실패')
    }
    
    
  }
  
  return (
    <div className='content'>
        <form onSubmit={sendJoin}>
        <p>
          <label>id</label>
          <input type='text'ref={id_ref}/>
        </p>

        <p>
          <label>pw</label>
          <input type='password'ref={pw_ref}/>
        </p>

        <p>
          <label>nick</label>
          <input type='text'ref={nk_ref}/>
        </p>

        <p>
          <input type='submit' value='join'/>
        </p>
      </form>
    </div>
  )
}

export default Join