import react from "react"
import { Routes , Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
   <div>
     <Navbar/>

     <Routes>
    <Route path='/' element={<MainSection/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact-us' element={<Contact/>}/>
    </Routes>
   </div>
  );
}

export default App;
