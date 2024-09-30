import './App.css';
import {useEffect} from 'react'
import api from './api'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 페이지 컴포넌트 예시
import Home from './pages/Home';
import Movies from './pages/Movies';

function App() {
  const getMovieData = async () => {
    const API_URL = '/movie/popular?language=ko-KR&page=1';
    const res = await api.get(API_URL);
    console.log(res.data);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="https://www.netflix.com/kr/">NETFLIX</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 라우터 설정 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
