import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home";
import About from './pages/About';
import GetInvolved from './pages/GetInvolved';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {

  return (

    
    <>

     <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
    <Route path="/getInvolved" element={<GetInvolved />} />
    <Route path='/projects' element={<Projects/>} />
    <Route path="/contact" element={<Contact/>}/>
</Routes>

<Footer/>
    </>
    

  )
}

export default App
