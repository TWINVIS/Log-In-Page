import React from 'react'
import { Link } from 'react-router-dom'
import Divider from './divider/divider'
import SocialMedia from './social/SocialMedia'

export default function Login() {

  return (
    <div className="Login-form-container">
      <form className="Login-form">
        <div className="Login-form-content">
          <h3 className="Login-form-title">Sign In</h3>
          <div className="email mt-5">
            <label>Email adress</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="mt-3">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <p className="forgot-password text-right mt-2">
            <a href="#">forgot password?</a>
          </p>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary ">
              Log in
            </button>
          </div>
          <div>
            <input
              className="form-check-input mt-3"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label mt-3 ms-2"
              htmlFor="flexCheckDefault"
            >
              Remember me
            </label>
          </div>
              <Divider>or</Divider>
              <div className='register-link'>
                <Link to="/signup" className='btn btn-primary'>Sign up</Link>
              </div>
        </div>
              <SocialMedia />
      </form> 
    </div>
  )
}
