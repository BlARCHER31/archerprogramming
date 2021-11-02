import AboutMe from './components/about'
import Footer from './components/footer'
import Hero from './components/hero'
import NavBar from './components/navBar'
import Project from './components/project'
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className='content'>
        <AboutMe />
        <Project />
      </div>
      <Footer />
    </div>
  )
}

export default App
