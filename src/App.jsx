import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Contact from './components/pages/contact/Contact'
import Home from './components/pages/home/Home'
import Insurance from './components/pages/security/Security'



function App() {

  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <Insurance/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
