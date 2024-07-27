import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <>
    <div>Login</div>
    <div><Link to={'/register'}>Register Page</Link></div>
    </>
  )
}

export default Login