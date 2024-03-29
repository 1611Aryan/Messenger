import styled from "@emotion/styled"
import Form from "./Form"

const FormContainer = () => {
  return (
    <StyledRight>
      <div className="whiteBg"></div>
      <Form />
    </StyledRight>
  )
}

const StyledRight = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .whiteBg {
    position: absolute;
    top: 0;
    right: 0;
    width: 40vw;
    height: 100vh;

    overflow: hidden;
    z-index: 1;

    background: #fff;
  }

  @media only screen and (max-width: 500px) {
    display: none;
  }
`

export default FormContainer
