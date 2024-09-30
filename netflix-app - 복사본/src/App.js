import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import MovieDetail from './pages/MovieDetail';
import NavigationBar from './components/NavigationBar';
import "./App.css"
function App() {
  return (
      <div>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </div>
  );
}

export default App;
