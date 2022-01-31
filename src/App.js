import AboutMe from './components/about'
import Footer from './components/footer/footer'
import Hero from './components/hero'
import NavBar from './components/navBar'
import Portfolio from './components/portfolio/portfolio'
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className='content'>
        <AboutMe />
        <Portfolio />
      </div>
      <Footer />
    </div>
  )
}

export default App
