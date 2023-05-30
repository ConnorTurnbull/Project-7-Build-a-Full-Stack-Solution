//React modules:
import React, { useState } from 'react';
import { Button, Col, Row, Container, Image, Stack } from 'react-bootstrap';

//Components:
import SideNav from './components/SideNav/SideNav';
import Login from './components/Login/LoginPopup';
import SignUp from './components/SignUp/SignUpPopup';
import ContentCard from './components/ContentCard/ContentCard';

//Images:
import MainLogo from './images/icon-left-font-monochrome-black.svg';

//Stylesheets:
import './scss/App.scss';
import NewPostPopup from './components/NewPost/NewPostPopup';
import NewThreadPopup from './components/NewThread/NewThreadPopup';


function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [session, setSession] = useState({})
  console.log(session)
  
  //User logged in

  if (authenticated) {
    
    return (
      <div className='app' >
        <Container fluid className="bg-primary"  >
          <Row className='p-3'>

            <Col sm={2}>
              <Image fluid src={MainLogo} />
            </Col>

            <Col className="px-1 d-flex justify-content-center" sm={{ span: 1, offset: 7 }}>
              <NewThreadPopup />
            </Col>

            <Col className='px-1 d-flex justify-content-center' sm={{ span: 1, offset: 0 }}>
              <NewPostPopup />
            </Col>
            
            <Col className='px-1 d-flex justify-content-center' sm={{ span: 1, offset: 0 }}>
              <Button className=' w-100 text-nowrap ' size='sm' variant="light">
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

            <Col className='content-window-logged d-flex bg-light p-5' sm={10}>
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

          <Col className="px-1 d-flex justify-content-center" sm={{ span: 1, offset: 8 }}>
            <Login setAuthenticated={setAuthenticated} setSession={setSession}/>
          </Col>

          <Col className="px-1 d-flex justify-content-center" sm={1}>
            <SignUp setAuthenticated={setAuthenticated} setSession={setSession}/>
          </Col>

        </Row>
      </Container>

      <Container fluid className="main-container">
        <Row>
          <Col className='content-window d-flex bg-light' sm={12}>
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
