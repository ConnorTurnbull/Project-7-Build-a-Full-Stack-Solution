//React modules:
import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Container, Image, Stack, InputGroup, Form } from 'react-bootstrap';

//Components:
import BrowseThreads from './components/BrowseThreads/BrowseThreads';
import ContentCard from './components/ContentCard/ContentCard';
import DefaultView from './components/DefaultView/DefaultView';
import HomeButton from './components/HomeButton/HomeButton';
import Login from './components/Login/LoginPopup';
import Logout from './components/Logout/Logout';
import PostView from './components/PostView/PostView';
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
  const [defaultState, setDefaultState] = useState(true)
  const [searchState, setSearchState] = useState(false)
  const [threadState, setThreadState] = useState(false)
  const [postState, setPostState] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)

  const [session, setSession] = useState({})
  const [searchResults, setSearchResults] = useState([])
  const [posts, setPosts] = useState([])
  const [postId, setPostId] = useState('')



  console.log("Default State" + defaultState)
  console.log("Search State" + searchState)
  console.log("Thread State" + threadState)
  console.log("Post State" + postState)

  

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

                <Col className="px-1 d-flex justify-content-center" sm={{ span: 4, offset: 0 }}>

                  <SearchBar

                    setSearchResults={setSearchResults}
                    setSearchState={setSearchState}
                    setDefaultState={setDefaultState}

                  />

                </Col>

                {/* Browse All Threads */}

                <Col className="px-1 d-flex justify-content-start" sm={{ span: 2, offset: 0 }} >

                  <BrowseThreads

                    setSearchResults={setSearchResults}
                    setSearchState={setSearchState}
                    setDefaultState={setDefaultState}
                    setThreadState={setThreadState}
                    setPostState={setPostState}

                  />

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

                  <Logout

                    setAuthenticated={setAuthenticated}
                    setSearchResults={setSearchResults}
                    setSearchState={setSearchState}
                    setThreadState={setThreadState}
                    setDefaultState={setDefaultState}
                    setPostState={setPostState}
                    session={session}

                  />

                </Col>

              </Row>

            </nav>
          </header>
        </Container>

        <Container fluid className="main-container">
          <Row>

            {/* Side Nav */}

            <Col className='thread-nav bg-secondary pb-3' sm={2}>

              <HomeButton

                setDefaultState={setDefaultState}
                setThreadState={setThreadState}
                setSearchState={setSearchState}
                setPostState={setPostState}

              />

              <div className='nav-divider d-flex'></div>

              <SideNav

                session={session}
                threadState={threadState}
                setThreadState={setThreadState}
                setDefaultState={setDefaultState}
                setSearchState={setSearchState}
                setPostState={setPostState}
                setSearchResults={setSearchResults}
                setPosts={setPosts}


              />

            </Col>

            {/* Main Container */}

            <Col className='content-window-logged d-flex justify-content-center bg-light p-5' sm={10}>

              <main className='w-100'>

                {defaultState ? <DefaultView /> : null}

                {searchState ? <SearchResultCard

                  searchResults={searchResults}

                /> : null}

                {threadState ? <ContentCard

                  posts={posts}
                  setPostState={setPostState}
                  setThreadState={setThreadState}
                  setDefaultState={setDefaultState}
                  setSearchState={setSearchState}
                  setPostId={setPostId}

                /> : null}

                {postState ? <PostView 

                  postId={postId}

                /> : null}

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

            <Login

              setAuthenticated={setAuthenticated}
              setSession={setSession}
              setDefaultState={setDefaultState}
              setThreadState={setThreadState}
              setSearchResults={setSearchResults}

            />

          </Col>

          {/* Sign Up Button */}

          <Col className="px-1 d-flex justify-content-center" sm={1}>

            <SignUp

              setAuthenticated={setAuthenticated}
              setSession={setSession}

            />

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
