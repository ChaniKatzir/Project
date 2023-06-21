import { React,useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Routes, Route, Link,useLocation,useNavigate } from 'react-router-dom';
import UserProvider from "./components/context/Provider";
import Account from "./components/accounts"
import Home from "./components/Home";
import Login from "./components/login";
import PrivateArea from "./components/privateArea"
import Student from "./components/student"
import Definitions from "./components/definitions"
import Staff from "./components/staff";
import Metirial from "./components/metirial"
import AttendacePrivate from "./components/attendacePrivate";
import Attendace from "./components/attendance";

function App() {
  const [status, setStatus] = useState();

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
          <Route path='/account' element={<Account/>}></Route>   
          <Route path='/materialManagement' element={<Metirial/>}></Route>      
          <Route path='/definitions' element={<Definitions/>}></Route>   
          <Route path='/attendacePrivate' element={<AttendacePrivate/>}></Route> 
          <Route path='/attendance' element={<Attendace/>}></Route>    

        </Routes>
    </UserProvider>
</>
 );
}

export default App;
