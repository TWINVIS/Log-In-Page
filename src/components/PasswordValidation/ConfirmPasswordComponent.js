const ConfirmPasswordInputField = ({
  handleValidation,
  handlePasswordChange,
  confirmPasswordValue,
  confirmPasswordError,
}) => {
  return (
    <>
      <div>
        <label>Password Confirmation</label>
        <input
          type="password"
          value={confirmPasswordValue}
          onChange={handlePasswordChange}
          onKeyUp={handleValidation}
          name="confirmPassword"
          placeholder="Confirm your password"
          className="sign-up-input"
        />
        {confirmPasswordError ? (
          <div className="password-danger">{confirmPasswordError}</div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default ConfirmPasswordInputField
