import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import BackScreen from './components/BackScreen'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectSingle from './components/ProjectSingle'
import ProjectsIndex from './components/ProjectsIndex'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="app"> 
      <Navigation />
        <Routes>
          <Route path="/" element={<BackScreen />} >
            <Route index element={ <Home /> }/>
            <Route path="projects" element={ <Projects /> }>
              <Route index element={ <ProjectsIndex /> }/>
              <Route path=":projectId" element={ <ProjectSingle /> } />
            </Route>
            <Route path="about-me" element={ <AboutMe /> } />
            <Route path="contact" element={ <Contact />} />
            <Route path="*" element={
              <main className="not-found__main">
                <NotFound 
                  title={'Upss, you are lost!!!'}
                  link={'/'}
                  backTo={'Home'}
                  emojin={'🏡'}
                />
              </main>
            } />
          </Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
