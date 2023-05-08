import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import SideNav from './components/sideNav';
import Login from './components/login/loginButton';

import MainLogo from './icon-left-font-monochrome-black.svg';
import { Button, Col, Row, Container, } from 'react-bootstrap';
import { useState } from 'react';
import Signup from './components/login/signupButton';

function App() {
  return (
    <div className='app' >
      <Container fluid className="header bg-primary"  >
        <Row className='p-3'>
          
          <Col sm={2} md={2} lg={2} xl={2}>
            <img className='img-fluid' src={MainLogo} alt="The Groupomania company logo"/>
          </Col>

          <Col sm={8} md={8} lg={8} xl={8}>

          </Col>

          <Col sm={1} md={1} lg={1} xl={1}>
            <Login/>
          </Col>

          <Col sm={1} md={1} lg={1} xl={1}>
            <Signup/>
          </Col>
        
        </Row>
      </Container>
      
      <Container fluid className="main-container">
        <Row>
          
          <Col className='thread-nav bg-secondary pb-3' md={2} lg={2} xl={2}>
            <SideNav/>
          </Col>
          
          <Col className='content-window d-flex justify-content-center align-items-center bg-light' md={10} lg={10} xl={10}>
            'content window'
          </Col>

        </Row>  
      </Container>

    </div>
  );
}

export default App;
