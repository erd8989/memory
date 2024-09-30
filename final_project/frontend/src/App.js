import './App.css';
import Login from './pages/Login';
import Join from './pages/Join'
import Content from './components/Content';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [nick,setNick] =useState(null)

  return (

    <div className='APP'>
      <Header nick={nick} setNick={setNick}/>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/login' element={<Login setNick={setNick}/>}/>
        <Route path='/join' element={<Join/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
