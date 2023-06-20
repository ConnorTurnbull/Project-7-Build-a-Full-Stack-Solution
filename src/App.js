//React modules:
import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Container, Image, Stack, InputGroup, Form } from 'react-bootstrap';

//Components:
import ContentCard from './components/ContentCard/ContentCard';
import Login from './components/Login/LoginPopup';
import Logout from './components/Logout/Logout';
import SideNav from './components/SideNav/SideNav';
import SignUp from './components/SignUp/SignUpPopup';
import SearchBar from './components/Search/SearchBar';
import SearchResultCard from './components/Search/SearchResultCard';

//Images:
import MainLogo from './images/icon-left-font-monochrome-black.svg';

//Stylesheets:
import './scss/App.scss';
import NewPostPopup from './components/NewPost/NewPostPopup';
import NewThreadPopup from './components/NewThread/NewThreadPopup';


function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [session, setSession] = useState({})
  const [searchResults, setSearchResults] = useState([])
  const [searchState, setSearchState] = useState(false)
  const [posts, setPosts] = useState([])
  const [threadState, setThreadState] = useState(false)

  console.log(searchResults)
  console.log(searchState)



  //User logged in

  if (authenticated) {

    return (
      <div className='app' >
        <Container fluid className="bg-primary"  >
          <header>
            <nav>
              <Row className='p-3'>

                {/* Main Logo */}

                <Col className='d-flex align-items-center' sm={2}>
                  <Image fluid src={MainLogo} />
                </Col>

                {/* Search Bar */}

                <Col className="px-1 d-flex" sm={{ span: 5, offset: 1 }}>
                  <SearchBar setSearchResults={setSearchResults} setSearchState={setSearchState} />
                </Col>

                {/* New Thread */}

                <Col className="px-1 d-flex justify-content-center" sm={{ span: 1, offset: 1 }}>
                  <NewThreadPopup />
                </Col>

                {/* New Post */}

                <Col className='px-1 d-flex justify-content-center' sm={{ span: 1, offset: 0 }}>
                  <NewPostPopup />
                </Col>

                {/* Log Out */}

                <Col className='px-1 d-flex justify-content-center' sm={{ span: 1, offset: 0 }}>
                  <Logout setAuthenticated={setAuthenticated} setSearchResults={setSearchResults} />
                </Col>

              </Row>
            </nav>
          </header>
        </Container>

        <Container fluid className="main-container">
          <Row>

            <Col className='thread-nav bg-secondary pb-3' sm={2}>
              <SideNav session={session} setThreadState={setThreadState} setPosts={setPosts}/>
            </Col>

            <Col className='content-window-logged d-flex bg-light p-5' sm={10}>
              <main>
                {searchState ? <SearchResultCard searchResults={searchResults} /> : <ContentCard />}
                {threadState ? <ContentCard posts={posts}/> : <ContentCard />}
              </main>
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

          {/* Main Logo */}

          <Col sm={2}>
            <Image fluid src={MainLogo} />
          </Col>

          {/* Login Button */}

          <Col className="px-1 d-flex justify-content-center" sm={{ span: 1, offset: 8 }}>
            <Login setAuthenticated={setAuthenticated} setSession={setSession} />
          </Col>

          {/* Sign Up Button */}

          <Col className="px-1 d-flex justify-content-center" sm={1}>
            <SignUp setAuthenticated={setAuthenticated} setSession={setSession} />
          </Col>

        </Row>
      </Container>

      {/* Content Window */}

      <Container fluid className="main-container">
        <Row>
          <Col className='content-window d-flex bg-light' sm={12}>
            <Stack className='justify-content-center' gap={2}>

              <Image fluid className='mx-5' src={MainLogo} />
              <p className='text-center'>Welcome to Groupomania! Please log in or create an account to get started.</p>

            </Stack>
          </Col>

        </Row>
      </Container>

    </div>
  );
}

export default App;
