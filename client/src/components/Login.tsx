import { useRef } from "react";
import styled from "styled-components";

import { v4 as uuid } from "uuid";

const Login: React.FC<{ setId: any }> = ({ setId }) => {
  const idRef = useRef<HTMLInputElement>(null);

  const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (idRef.current) setId(idRef.current.value);
  };

  const newId = () => {
    setId(uuid());
  };

  return (
    <StyledLogin>
      <StyledForm onSubmit={SubmitHandler}>
        <h1>Login</h1>
        <div className="formField">
          <label htmlFor="">Enter Your Id: </label>
          <input type="text" ref={idRef} />
        </div>
        <div className="buttonContainer">
          <button>Go</button>
          <button type="button" onClick={newId}>
            New Id
          </button>
        </div>
      </StyledForm>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  width: 100%;
  height: calc(100vh - var(--navHeight));
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .circle1 {
    z-index: 1;
    transform: translate(-50%, 50%);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80%;
    aspect-ratio: 1/1;
    background: #ffa17e;
    border-radius: 50%;
  }
  .circle2 {
    z-index: 1;
    transform: translate(20%, 30%);
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    aspect-ratio: 1/1;
    background: #ffff7c;
    border-radius: 50%;
  }
`;

const StyledForm = styled.form`
  width: 40%;
  height: 70%;
  padding: 1rem 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  z-index: 2;

  h1 {
    font-size: 2rem;
    font-family: "Quicksand", sans-serif;
  }
  .formField {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    & > * {
      margin: 0.5rem 0;
    }
  }

  label {
    font-size: 1.5rem;
    padding: 0 1rem 0 0;
  }
  input {
    width: 100%;
    font-size: 1rem;
    padding: 0.7rem;
    border-radius: 3px;
    border: 0;
    border-bottom: 2px solid #009dc7;
    background: transparent;
    &:focus {
      outline: 0;
    }
  }
  .buttonContainer {
    padding: 1rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  button {
    min-width: 20%;
    font-size: 1rem;
    padding: 0.7rem 1.2rem;
    border: 1px solid #009dc7;
    border-radius: 2px;
    border-radius: 3px;
    margin-right: 2rem;
    background: #ffffff;
  }
`;

export default Login;
