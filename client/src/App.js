import { React,useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import UserProvider from "./components/context/Provider";

import Home from "./components/Home";
import Login from "./components/login";
import PrivateArea from "./components/privateArea"
import Student from "./components/student"
import Definitions from "./components/definitions"

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Staff from "./components/staff";
//import MyContext from "./components/myContext";

// export const MyContext=React.createContext()

function App() {
  // const [id, setId] = useState();
  const [status, setStatus] = useState();

// const  location=useLocation().pathname;
// const setIdCallback = (id) => {
//   setId(id);
// }
const setStatusCallback = (id) => {
  setStatus(id);
}
 return ( 
 <>
  <UserProvider  statusP={status}>
        <Routes>
          <Route path='/' element={<Login  setStatus={setStatusCallback}/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/privateArea' element={<PrivateArea/>}></Route>
          <Route path='/student' element={<Student/>}></Route>      
          <Route path='/staff' element={<Staff/>}></Route>      
          <Route path='/materialManagement' element={<PrivateArea/>}></Route>      
          <Route path='/definitions' element={<Definitions/>}></Route>      
        </Routes>
    </UserProvider>
</>
    

 );
}

export default App;
