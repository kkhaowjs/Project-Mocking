import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>Home</div>
    <div><Link to={'/login'}>Login Page</Link></div>
    
    </>
  )
}

export default Home