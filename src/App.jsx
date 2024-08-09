import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import Header from "./Component/Header";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Air from "./Component/Air";
import Audio from "./Component/Audio";
import Gadget from "./Component/Gadget";
import Appliances from "./Component/Appliances";
import Kitchen from "./Component/Kitchen";
import Laptop from "./Component/Laptop";
import Refrigerator from "./Component/Refrigerator";
import Smart from "./Component/Smart";
import Arrival from './Component/Arrival';
import Today from "./Component/Today";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/air" element={<Air />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/gadget" element={<Gadget />} />
          <Route path="/smart" element={<Smart />} />
          <Route path="/home" element={<Appliances />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/refrigerator" element={<Refrigerator />} />
          <Route path="/arrival" element={<Arrival />} />
          <Route path="/today" element={<Today />} />
          <Route path="*" element={<Home />} />
        </Route>
        
      </Routes>
    </BrowserRouter>

    // <>
    //   <div>
    //     <Header />
    //     <Refrigerator />
    //     {/* <Banner /> */}
    //     {/* <Home /> */}
    //     <Footer />
    //   </div>
    // </>
  );
}

export default App;
