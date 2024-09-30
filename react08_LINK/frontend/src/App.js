import { Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import JoinForm from './components/JoinForm';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import { Routes } from 'react-router-dom';
import { useState } from 'react';


// 리액트 프로젝트 수정후 터미널 창에 'npm run build'실행하기
function App() {
  const [users, setUsers] =useState()
  return (
    <div >
      <h1>리액트 노드 연동 실습</h1> 
      <Routes>
        <Route path='/'element={<Main/>}/>
        <Route path='/join' element={<JoinForm/>}/>
        <Route path='/login'element={<LoginForm/>}/>
      </Routes>
    </div>
  );
}
export default App;
