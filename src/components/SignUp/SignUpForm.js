import React from 'react'
import {Link} from 'react-router-dom'
import PasswordValidation from '../PasswordValidation/PasswordValidation'
import './SignUpForm.css'

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <form className="sign-up-form">
        <div className="sign-up-form-content">
          <h3 className="sign-up-form-title">Sign Up</h3>
          <label>Email</label>
          <input className="sign-up-input" type="email" placeholder='Enter your email'/>
          <PasswordValidation/>
        <Link to="/signupcompletion"><button type='submit' className='btn btn-primary mt-5 mb-3'>Create an account</button></Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp
