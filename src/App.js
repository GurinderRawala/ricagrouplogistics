import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Head from './Components/Head';
import Contact from './Screens/Contact';
import Careers from './Screens/Careers';
import Services from './Screens/Services';
import Aboutus from './Screens/Aboutus';
import Footer from './Components/Footer';
import { AosInit } from './aos';
function App() {
  AosInit()
  return (
    <BrowserRouter>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"/>
    <Head />
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/Contact" element={<Contact />} />
   <Route path="/Services" element={<Services />} />
   <Route path="/Careers" element={<Careers />} />
   <Route path="/Aboutus" element={<Aboutus />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
