import styled from "@emotion/styled"
import Content from "Components/Password/Content"
import Header from "Components/Password/Header"

const ForgotPassword = () => {
  return (
    <StyledForgotPassword>
      <Header />
      <Content heading="forgot" />
    </StyledForgotPassword>
  )
}

const StyledForgotPassword = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  --navHeight: 10vh;
  --primary: #4d4476;
`

export default ForgotPassword
