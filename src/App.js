import React, { Component } from 'react';
import Hoc from './Components/Hoc';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Form from "./Components/Form"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/form" element={<Form />}/>
      </Routes>
    </BrowserRouter>
    );
  }
}

export default Hoc(App);