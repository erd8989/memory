import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './page/Main';
import Login from './page/Login';
import GoodList from './page/GoodList';
import GoodDetail from './page/GoodDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import PrivateRouter from './page/PrivateRouter';

/*
  실습1) page폴더 내 4개의 페이지를 생성하시오.
  - 메인페이지(Main), 로그인페이지(Login), 상품전체목록(GoodList), 상품상세페이지(GoodDetail)

  실습2) component폴더 내 4개의 컴포넌트를 생성하시오.
  - 헤더(Header), 컨텐츠(Content), 푸터(Footer), 상품정보(GoodItem)

  실습3) 페이지를 이동할 수 있도록 URL과 페이지를 연결하시오.
  - index.js: BrowserRouter 
  - App.js: Routes, Route
  [페이지별 경로]
  - 메인: '/' 
  - 로그인: '/login'
  - 상품전체목록: '/menulist'
  - 상품상세피이지: '/menulist/:id'
*/

function App() {

  //로그인 상태를 보관하는 state 
  const [auth, setAuth] = useState(false)

  return (
    <div >
      {/* 실습) auth, setAuth 를 헤더영역에 전달하여 로그인상태에 따라 로그인/로그아웃이 출력되도록
                구현하시오.
                - 로그인이 아닌 상태에서 "로그인"버튼 클릭 -> 로그인페이지로 이동
                - "로그아웃"버튼 클릭 -> auth값을 false로 변경한 후 메인페이지로 이동
      */}
      <Header auth={auth} setAuth={setAuth}/>

      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/login' element={<Login setAuth={setAuth}/>} />
        <Route path='/menulist' element={<GoodList/>} />
        <Route path='/menulist/:id' element={<PrivateRouter auth={auth}/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
