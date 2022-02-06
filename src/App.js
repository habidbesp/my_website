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

function App() {
  return (
    <div className="app"> 
      <Navigation />
        <Routes>
          <Route path="/" element={<BackScreen />} >
            <Route index element={ <Home /> }/>
            <Route path="projects" element={ <Projects /> }>
              <Route path=":projectId" element={ <ProjectSingle /> } />
              <Route index element={ <ProjectsIndex /> }/>
            </Route>
            <Route path="about-me" element={ <AboutMe /> } />
            <Route path="contact" element={ <Contact />} />
          </Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
