//import logo from '';
import React from 'react';
import './App.css';
import SideNav from './components/sideNav';

import 'bootstrap/dist/css/bootstrap.min.css';
import MainLogo from './icon-left-font-monochrome-black.svg';
import { Navbar, Button, Col, Row, Container, } from 'react-bootstrap';

function App() {
  return (
    <div className='app' >
      <Container className="header bg-primary" fluid >
        <Row className='p-3'>
          
          <Col md ={2} lg={2} xl={2}>
            <img className='img-fluid' src={MainLogo} alt="The Groupomania company logo"/>
          </Col>

          <Col md={8} lg={8} xl={8}>

          </Col>

          <Col md={1} lg={1} xl={1}>
            <Button className='p-1 text-nowrap' variant='light' size='sm'>Log In</Button>
          </Col>

          <Col md={1} lg={1} xl={1}>
            <Button className='p-1 text-nowrap' variant='light' size='sm'>Sign Up</Button>
          </Col>
        
        </Row>
      </Container>

      <Container className="bg-secondary m-0" style={{width: '20%'}}>
          <SideNav/>
      </Container>
    </div>
  );
}

export default App;
