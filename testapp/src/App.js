
import React from 'react';
import StudentList from './components/StudentList';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';




function App() {
  return (
    <div className="App">

        <BrowserRouter>
        <Routes>
        <Route element={<WelcomeMessage />}> 
        <Route path="/" element={<WelcomeMessage />}></Route>
        <Route path="/login" ></Route>
        <Route
            path="/protected"
          />
          </Route> 
        </Routes>
        </BrowserRouter>

    </div>
  );
}

function WelcomeMessage  () {
  return(
    <>
  <h1>Welcome to my Test app!</h1>
  <StudentList />
  </>
  )
};

export default App;
