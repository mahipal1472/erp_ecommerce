import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from './Components/Template';
import './Cosmatics/css/style.css'
import "./assets/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/css/owl.carousel.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/animate.css"
import "./assets/css/meanmenu.min.css"
import "./assets/css/main.css"
import "./assets/css/responsive.css"
import "./assets/bootstrap/css/bootstrap.min.css"
import Login from './Components/Login';
import Contact from './Components/Contact';
import ModalFile from './Components/ModalFile';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import CreateStore from './Components/steps/CreateStrore';
import Deshboard from './Components/Layout/Deshboard';
import Website from './Components/Site&apps/Website';
import Fation from './Components/Fation';
import AdminPanel from './admin_panal/admincomponent/Admin_panel';
import Cosmatics from './Cosmatics/Cosmatics';
import EyeShadow from './Cosmatics/Categories/eyw-shadow';
import SingleProduct from './Cosmatics/single_product';
class App extends Component {
  render() {
    return (
      <div className="App">
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cosmatics/>} />
        <Route path="/eyeshadow/:id" element={<EyeShadow/>} />
        <Route path="/singleproduct" element={<SingleProduct/>} />
        {/* <Route path="/home" element={<Home/>} />

        <Route path="/Login" element={<Login/>} />
        <Route path="/ModalFile" element={<ModalFile/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/createstore" element={<CreateStore/>} />
        <Route path="/Deshboard" element={<Deshboard/>}/>
        <Route path="/website" element={<Website/>}/> */}
      

   
       
      </Routes>
    </BrowserRouter>
      </div>
    );
  }
}

export default App;
