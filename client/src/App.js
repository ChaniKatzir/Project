import Home1 from "./components/Home1";
import Login from "./components/login";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Student1 from "./components/students1";
import Student2 from "./components/students2";
import Staff from "./components/staff";
import Account from "./components/AccountManagement"
import Material from "./components/MaterialManagement"
import Material2 from "./components/MaterialManagement2"
import Area2 from "./components/privateArea2"
import Area3 from "./components/privateArea3"




import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function App() {

 return (
    <div className="App">
    <Routes>
      <Route path='/' element={< Login />}></Route>
      <Route path='/Home1' element={< Home1 />}></Route>
      <Route path='/Home1/student' element={< Student1 />}></Route>
      <Route path='/Home1/staff' element={< Staff />}></Route>
      <Route path='/Home2' element={< Home2 />}></Route>
      <Route path='/Home2/student' element={< Student2 />}></Route>
      <Route path='/Home3' element={< Home3 />}></Route>
      <Route path='/AccountManagement' element={< Account />}></Route>
      <Route path='/Home1/MaterialManagement' element={< Material />}></Route>
      <Route path='/Home2/MaterialManagement' element={< Material2 />}></Route>
      <Route path='/Home2/PrivateArea' element={< Area2 />}></Route>
      <Route path='/Home3/PrivateArea' element={< Area3 />}></Route>

      
     </Routes>
    </div>


 
    

  );
}

export default App;
