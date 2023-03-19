import Home1 from "./components/Home1";
import Login from "./components/login";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Student from "./components/students";

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function App() {

  <Router>
    <div className="App">
    <Routes>
      <Route exact path='/' element={< Login />}></Route>
      <Route exact path='/manager' element={< Home1 />}></Route>
      <Route exact path='/staff' element={< Home2 />}></Route>
      <Route exact path='/student' element={< Home3 />}></Route>

    </Routes>
    </div>
  </Router>

  return (
    <div className="App">
      <Student/>
    </div>

  );
}

export default App;
