import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/skills' element={<Skills/>}/>
      <Route exact path='/project' element={<Project/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
