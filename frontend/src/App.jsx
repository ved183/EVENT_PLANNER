import React from "react"
import "./App.css";
import {BrowserRouter as Router}   from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contacts  from "./components/Contacts";
import Footer from "./components/Footer";





const App = () => {

  return(
<Router>
  <Navbar/>
  <HeroSection/>
  <Services/>
  <About/>
  <Contacts/>
  <Footer/>
  <Toaster/>
</Router>  
)
}
export default App;