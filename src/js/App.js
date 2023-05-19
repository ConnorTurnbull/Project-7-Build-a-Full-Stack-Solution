//React modules:
import React from 'react';
import { Button, Col, Row, Container, Image } from 'react-bootstrap';
import { useState } from 'react';

//Components:
import SideNav from '../components/aside-nav/sideNav';
import Login from '../components/login/loginPopup';
import Signup from '../components/login/signupPopup';

//Images:
import MainLogo from '../images/icon-left-font-monochrome-black.svg';

//Stylesheets:
import '../scss/App.scss';


function App() {
  return (
    <div className='app' >
      <Container fluid className="bg-primary"  >
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
          
          <Col className='thread-nav bg-secondary pb-3' sm={2}>
            <SideNav/>
          </Col>
          
          <Col className='content-window d-flex justify-content-center align-items-center bg-light' sm={10}>
            Welcome to Groupomania! Please log in or create an account to get started.
            
          </Col>

        </Row>  
      </Container>

    </div>
  );
}

export default App;
