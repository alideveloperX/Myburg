import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Todo from './components/Todo';
// import Products from './pages/Products';
import { Route, Routes } from "react-router-dom";
// import Productdesc from './components/Productdesc';
import Navbar from "./components/Navbar";
import Swiper from "./components/Swiper";
import "swiper/css";
import "./pages/App.css";
import Tabs from "./pages/Tabs";
import Section from "./pages/Section";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      {/* <Todo/> */}
      <Navbar />
      <Swiper></Swiper>
      <Tabs />  

      <Routes>
        <Route path="/:category" element={<Section/>}></Route>
        {/* <Route path="/products/:id" element={<Productdesc/>}></Route> */}
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
