import { React,useState, createContext } from "react";
import ReactDOM from "react-dom/client";

import Home from "./components/Home";
import Login from "./components/login";
import Menu from "./components/menu";
import PrivateArea from "./components/privateArea"


import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
//import MyContext from "./components/myContext";

// export const MyContext=React.createContext()

function App() {
// const  location=useLocation().pathname;
 return (
    <div className="App">
      {/* {(location==="/"||location==="/login")?<></>:<Menu></Menu>} */}
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/PrivateArea' element={<PrivateArea/>}></Route>
          

        </Routes>
    </div>
 );
}

export default App;
