import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useParams, BrowserRouter } from "react-router-dom";
import { Space } from 'antd';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Admin from './Pages/Admin';
import PageNotFound from './Components/PageNotFound';

function App() {
  
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element = { <Home/> }
            ></Route>
            <Route
              path='/login'
              element = { <Login/> }
            ></Route>
            <Route
              path='/register'
              element = { <Register/> }
            >
            </Route>
            <Route
              path='/student'
              element = { <Admin/> }
            >
            </Route>
            <Route
              path='/teacher'
              element = { <Admin/> }
            >
            </Route>
            <Route
              path='/admin'
              element = { <Admin/> }
            >
            </Route>
            <Route
              path='/:pagenotfound'
              element = { <PageNotFound/> }
            >
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
