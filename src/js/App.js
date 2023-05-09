//React modules:
import React from 'react';
import { Button, Col, Row, Container, Image } from 'react-bootstrap';
import { useState } from 'react';

//Components:
import SideNav from '../components/aside-nav/sideNav';
import Login from '../components/login/loginButton';
import Signup from '../components/login/signupButton';

//Images:
import MainLogo from '../images/icon-left-font-monochrome-black.svg';

//Stylesheets:
import '../scss/App.scss';


function App() {
  return (
    <div className='app' >
      <Container fluid className="header bg-primary"  >
        <Row className='p-3'>
          
          <Col sm={2}>
            <Image fluid src={MainLogo} />
          </Col>
          
          <Col sm={{span: 1, offset: 8}}>
            <Login/>
          </Col>

          <Col sm={1}>
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
