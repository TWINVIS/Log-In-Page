const PasswordInputField = ({
  handleValidation,
  handlePasswordChange,
  passwordValue,
  passwordError,
}) => {
  return (
    <>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onKeyUp={handleValidation}
          name="password"
          placeholder="Enter your password"
          className="sign-up-input"
        />
        {passwordError ? (
          <div className="password-danger">{passwordError}</div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default PasswordInputField
