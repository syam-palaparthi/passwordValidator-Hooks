// Write your code here
import {useState} from 'react'
import {
  BgContainer,
  PasswordValidatorContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorMessage,
  CheckBoxInput,
  ShowPassword,
  Container,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const showType = showPassword ? 'text' : 'password'
  const showErrorMsg = password.length < 8
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  const onClickPassword = () => {
    setShowPassword(prevStatus => !prevStatus)
  }
  return (
    <BgContainer>
      <PasswordValidatorContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <PasswordInput
          type={showType}
          value={password}
          onChange={onChangePassword}
        />
        <Container>
          <CheckBoxInput type="checkbox" onClick={onClickPassword} />
          <ShowPassword>Show Password</ShowPassword>
        </Container>

        {showErrorMsg && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordValidatorContainer>
    </BgContainer>
  )
}
export default PasswordValidator
