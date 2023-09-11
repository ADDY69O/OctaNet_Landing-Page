
import './App.css';
import Navbar from './components/Navbar';

import { Routes, Route } from "react-router-dom";

import {BrowserRouter} from 'react-router-dom'
import About from './components/About';
import Mix from './components/Mix';
import News from './components/News';
import Gallery from './components/Gallery';
function App() {
 
  return (
<>
   

    <BrowserRouter>   
    <Navbar/>
   

 
  <Routes>
      <Route path="/" element={<Mix/>}/>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<News />} />
        <Route exact path="/gallery" element={<Gallery />} />
      
    </Routes>


    </BrowserRouter>
    </>
  );
}

export default App;
