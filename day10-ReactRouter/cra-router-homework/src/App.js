import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Employee from "./components/Employee";

function App() {
  return (
      <>
          <div className={`container`}>
              <Routes>
                  <Route path='/' element={<Login/>}/>
                  <Route path='/homeLogin' element={<Login/>}/>
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/employee' element={<Employee/>}/>
              </Routes>
          </div>
        
      </>
  );
}

export default App;
