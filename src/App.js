//React modules:
import React, { useState } from 'react';
import { Button, Col, Row, Container, Image, Stack } from 'react-bootstrap';


//Components:
import SideNav from './components/aside-nav/sideNav';
import Login from './components/login/loginPopup';
import Signup from './components/login/signupPopup';
import LoginHandler from './components/login/loginForm';
import ContentCard from './components/content-cards/contentCard';

//Images:
import MainLogo from './images/icon-left-font-monochrome-black.svg';

//Stylesheets:
import './scss/App.scss';


function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [session, setSession] = useState({})
  console.log(session)
  /* const authenticated = sessionStorage.getItem('userId') */
  
  //User logged in

  if (authenticated) {
    
    return (
      <div className='app' >
        <Container fluid className="bg-primary"  >
          <Row className='p-3'>

            <Col sm={2}>
              <Image fluid src={MainLogo} />
            </Col>

            <Col sm={{ span: 1, offset: 9 }}>
              <Button className='login-button px-3 text-nowrap' size='sm' variant="light">
                Log Out
              </Button>
            </Col>

          </Row>
        </Container>

        <Container fluid className="main-container">
          <Row>

            <Col className='thread-nav bg-secondary pb-3' sm={2}>
              <SideNav />
            </Col>

            <Col className='content-window d-flex bg-light p-5' sm={10}>
              <ContentCard />
            </Col>

          </Row>
        </Container>
      </div>
    )
  }


  //User not logged in:

  return (
    <div className='app' >
      <Container fluid className="bg-primary"  >
        <Row className='p-3'>

          <Col sm={2}>
            <Image fluid src={MainLogo} />
          </Col>

          <Col sm={{ span: 1, offset: 8 }}>
            <Login setAuthenticated={setAuthenticated} setSession={setSession}/>
          </Col>

          <Col sm={1}>
            <Signup setAuthenticated={setAuthenticated} setSession={setSession}/>
          </Col>

        </Row>
      </Container>

      <Container fluid className="main-container">
        <Row>

          <Col className='thread-nav bg-secondary pb-3' sm={2}>

          </Col>

          <Col className='content-window d-flex bg-light' sm={10}>
             <Stack className='justify-content-center' gap={2}>
                
                <Image fluid className='mx-5' src={MainLogo}/>
                <p className='text-center'>Welcome to Groupomania! Please log in or create an account to get started.</p> 
             
             </Stack> 
          </Col>

        </Row>
      </Container>

    </div>
  );
}

export default App;
