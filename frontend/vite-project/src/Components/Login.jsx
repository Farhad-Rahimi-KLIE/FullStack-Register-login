import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './signup.css'
import axios from 'axios'
import google from '../assets/googlee.jpg'
const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const HandleClick = (e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/login", {email, password}).then(result => {
        console.log(result)
        if (result.data === "Success") {
              navigate("/home")
        }
    }).catch(err => console.log(err))

}
    
  return (
    <>
        <div className="container">
      <div className="logo">
        <img src={google} alt="Google.jpg" />
      </div>
      <div className="form-box">
        <h1>Log In</h1>
        <span>Use Your Google Account</span>
        <form>
          <div className="input-box">
            <input
              type="email"
              name="email"
              id="email-field"
              className="input-field"
              required
              autoFocus
              autoComplete="off"
              onChange={(e)=> setEmail(e.target.value)}
               />
            <label htmlFor="email-field" className="placeholder">Email</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              id="password-field"
              className="input-field"
              required
              onChange={(e)=> setPassword(e.target.value)}
               />
            <label htmlFor="password-field" className="placeholder">password</label>
          </div>
          <a href="#" className="forgot">Forget email?</a>
          
        </form>
      </div>
      <div className="buttons">
            <a href="#" className="create-acount">Create account</a>
            <button className="sign-in" onClick={HandleClick}>Log in</button>
          </div>
    </div>
    </>
  )
}

export default Login