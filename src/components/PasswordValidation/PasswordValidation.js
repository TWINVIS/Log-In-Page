import { useState } from 'react'
import PasswordInputField from './PasswordInputField'
import ConfirmPasswordComponent from './ConfirmPasswordComponent'

const PasswordValidation = () => {
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [passwordInput, setPasswordInput] = useState({
    password: '',
    confirmPassword: '',
  })

  const handlePasswordChange = (evnt) => {
    const passwordInputValue = evnt.target.value.trim()
    const passwordInputFieldName = evnt.target.name
    const NewPasswordInput = {
      ...passwordInput,
      [passwordInputFieldName]: passwordInputValue,
    }
    setPasswordInput(NewPasswordInput)
  }

  const handleValidation = (evnt) => {
    const passwordInputValue = evnt.target.value.trim()
    const passwordInputFieldName = evnt.target.name

    if (passwordInputFieldName === 'password') {
      const minLength = /.{8,}/

      const passwordLength = passwordInputValue.length
      const minLenghtPassword = minLength.test(passwordInputValue)

      let errorMassage = ''
      if (passwordLength === 0) {
        errorMassage = 'Password field is empty'
      } else if (!minLenghtPassword) {
        errorMassage = 'Password must contain at least 8 characters'
      } else {
        errorMassage = ''
      }
      setPasswordError(errorMassage)
    }

    if (
      passwordInputFieldName === 'confirmPassword' ||
      (passwordInputFieldName === 'password' &&
        passwordInput.confirmPassword.length > 0)
    ) {
      if (passwordInput.confirmPassword !== passwordInput.password) {
        setConfirmPasswordError('Passwords are not mached')
      } else {
        setConfirmPasswordError('')
      }
    }
  }

  return (
    <div>
      <div>
        <PasswordInputField handlePasswordChange={handlePasswordChange} 
        handleValidation={handleValidation}
        passwordValue={passwordInput.password}
        passwordError={passwordError}/>
        <ConfirmPasswordComponent
        handlePasswordChange={handlePasswordChange}
        handleValidation={handleValidation}
        confirmPasswordValue={passwordInput.confirmPassword}
        confirmPasswordError={confirmPasswordError}/>
      </div>
    </div>
  )
}

export default PasswordValidation