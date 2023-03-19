import Home1 from "./components/Home1";
import Login from "./components/login";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Student1 from "./components/students1";
import Student2 from "./components/students2";
import Staff from "./components/staff";


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
     </Routes>
    </div>


 
    

  );
}

export default App;
