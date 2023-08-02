import React, { useState } from 'react'
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import "./Signup.css"

export default function Signup() {
  const signin_initalform = {
    in_email: '',
    in_password: '',
  }
  const signup_initalform = {
    name: '',
    password: '',
    repassword: '',
    email: '',
  }
  const [signinform, setSigninform] = useState(signin_initalform);
  const [signupform, setSignupform] = useState(signup_initalform);

  const updatesignin_form = (e) => {
    setSigninform({
      ...signinform, [e.target.name]: e.target.value
    })
  }
  const updatesignup_form = (e) => {
    setSignupform({
      ...signupform, [e.target.name]: e.target.value
    })
  }
  const signin_app=(e)=>{
    e.preventDefault();
    console.log(JSON.stringify(signin_app.in_email));
  }
  return (
    <div>
      <Nav />
      <div className='mt-3 mb-3'>
        <div className="login-wrap">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked=""
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group m-2">
                  <label htmlFor="user" className="label" >
                    Email
                  </label>
                  <input 
                    id="in_user"
                    type="text"
                    className="input"
                    name="in_email"
                    value={signinform.in_email}
                    onChange={updatesignin_form}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="in_pass"
                    type="password"
                    className="input"
                    data-type="password"
                    name="in_password" 
                    value={signinform.in_password}
                    onChange={updatesignin_form}
                  />
                </div>
                <div className="group">
                  <input
                    id="check"
                    type="checkbox"
                    className="check"
                    defaultChecked=""
                  />
                  <label htmlFor="check">
                    <span className="icon" /> Keep me Signed in
                  </label>
                </div>
                <div className="group">
                  <input 
                  type="submit" 
                  className="button" 
                  defaultValue="Sign In" 
                  onClick={signin_app} />
                </div>
                <div className="hr" />
              </div>


              <div className="sign-up-htm">
                <div className="group m-2">
                  <label htmlFor="user" className="label" >
                    Username
                  </label>
                  <input
                    id="user"
                    type="text"
                    className="input"
                    name="name"
                    value={signupform.name}
                    onChange={updatesignup_form} />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label" >
                    Password
                  </label>
                  <input
                    id="up_pass"
                    type="password"
                    className="input"
                    data-type="password"
                    name="password" 
                    value={signupform.password}
                    onChange={updatesignup_form}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Repeat Password
                  </label>
                  <input
                    id="repass"
                    type="password"
                    className="input"
                    data-type="password"
                    name="repassword" 
                    value={signupform.repassword}
                    onChange={updatesignup_form}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label" >
                    Email Address
                  </label>
                  <input 
                    id="email"
                    type="text"
                    className="input"
                    name="email"
                    value={signupform.email}
                    onChange={updatesignup_form} />
                </div>
                <div className="group">
                  <input type="submit" className="button" defaultValue="Sign Up" />
                </div>
                <div className="hr" />
                <div className="foot-lnk">
                  <label htmlFor="tab-1">Already Member?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
