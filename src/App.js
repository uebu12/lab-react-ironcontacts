import "./App.css";
import contacts from "./contacts.json";
import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import {useState} from "react"
import Banana from "./Banana";

function App(){



    return (
      <div>
    <Routes>
<Route path="/home/" element={<Home/>}></Route>
<Route path="/home/about/" element={<About/>}/>
<Route path="/home/about/:banana" element={<Banana/>}/>
    </Routes>

      </div>
    );
  
}

export default App;
