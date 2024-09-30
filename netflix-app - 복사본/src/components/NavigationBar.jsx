import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" variant="dark">
    <Container fluid>
      <Navbar.Brand>
        <Link to={"/"}>
          <img 
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol.jpg"
            alt="넷플릭스 로고이미지"
            width={100}/>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to={"/"} className='nav-item'>Home</Link>
          <Link to={"/"} className='nav-item'>Movies</Link>
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-danger">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavigationBar