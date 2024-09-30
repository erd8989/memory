import React from 'react'
import GoodDetail from './GoodDetail';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({auth}) => {

  console.log('로그인상태:',auth); 

  return (
    auth?<GoodDetail/>:<Navigate to={'/login'}/>
  )
}

export default PrivateRouter