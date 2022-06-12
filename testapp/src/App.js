
import React from 'react';
import StudentList from './components/StudentList';
import useToken from './components/useToken';
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';




function App() {
  const {token, setToken} = useToken();

  if(!token){
    return <Login setToken={setToken} />
  }
  console.log(token)
  return (
    <div className="App">

        <BrowserRouter>
        <Routes>
        <Route element={<StudentList token={token} />}> 
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
  <StudentList  />
  </>
  )
};

export default App;
