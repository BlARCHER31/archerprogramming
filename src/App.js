import AboutMe from './components/about/about'
import Footer from './components/footer/footer'
import Hero from './components/hero/hero'
import NavBar from './components/navBar'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className='content'>
        <AboutMe />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
