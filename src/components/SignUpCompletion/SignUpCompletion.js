import { Link } from 'react-router-dom'
import './SignUpCompletion.css'

const SignUpCompletion = () => {
  return (
    <div className="sign-up-container">
      <div className="sign-up-form">
        <div className="sign-up-form-content">
          <h3 className="Login-form-title">Thank you for registering!</h3>
          <h3 className="completion-text">
            Please check your email to confirm your registartion.
          </h3>

          <Link to="/" className="btn btn-primary mt-4">
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpCompletion
