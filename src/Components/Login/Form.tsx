import React, { useState } from "react"
import { Link } from "react-router-dom"

import styled from "@emotion/styled"
import OAuth from "./OAuth"

import { error, input, login } from "API/LoginApi"
import useTypedDispatch from "Hooks/useTypedDispatch"
import { loginUser } from "Redux/Slices/Access.Slice"

const Form: React.FC = () => {
  const [input, setInput] = useState<input>({
    username_email: "",
    password: "",
  })
  const [error, setError] = useState<error>(null)

  const dispatch = useTypedDispatch()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(input => ({ ...input, [e.target.name]: e.target.value }))
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const username = await login(input)
      dispatch(loginUser({ username }))
    } catch (err: any) {
      console.log(err.response.data)
      setError(err.response.data)
      //setInput({ username_email: "", password: "" })
    }
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <p className="errorMessage">
        {error && error.type === "oauth" ? error.info : ""}
      </p>
      <StyledInputContainer>
        <label htmlFor="username_email">Username/Email</label>
        <div>
          <p className="errorMessage">
            {error && error.type === "username" ? error.info : ""}
          </p>
          <input
            type="text"
            name="username_email"
            autoFocus
            required
            value={input.username_email}
            onChange={changeHandler}
            className={error && error.type === "username" ? "highlight" : ""}
          />
        </div>
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="password">Password</label>
        <div>
          <p className="errorMessage">
            {error && error.type === "password" ? error.info : ""}
          </p>
          <input
            type="password"
            name="password"
            required
            value={input.password}
            onChange={changeHandler}
            className={error && error.type === "password" ? "highlight" : ""}
          />
        </div>
      </StyledInputContainer>

      <div className="buttons">
        <button>Login</button>
        <span>
          <Link to="/forgotPassword">Forgot Password?</Link>
        </span>
      </div>

      <OAuth setError={setError} />
    </StyledForm>
  )
}

const StyledForm = styled.form`
  position: relative;
  width: 90%;
  padding: 0 var(--padding) 0 calc(var(--padding) * 1.25);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  font-family: var(--fontContent);
  color: var(--primary);

  z-index: 2;

  .errorMessage {
    width: 100%;
    color: red;
    line-height: 1;

    font-size: clamp(0.6em, 1vw, 0.8em);
    font-weight: 300;
    margin: 0.1em 0;

    text-align: left;
  }

  .buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      align-self: flex-start;
      background: #4d4476;
      color: #fff;
      border-radius: 5px;

      padding: clamp(0.3em, 2vw, 0.6em) 1.5em;
      font-size: clamp(0.8em, 3vw, 1em);

      font-weight: 500;
    }
    span {
      display: inline-block;
      padding: 0.3em 0;
      font-size: clamp(0.7em, 3vw, 0.9em);
      transition: color ease-out 100ms;
      cursor: pointer;
      &:hover {
        color: #bcb243;
      }
    }
  }
`

const StyledInputContainer = styled.div`
  width: 100%;

  label {
    font-size: clamp(1em, 4vw, 1.5em);
  }

  div {
    margin: 0.5em 0 1em 0;
  }

  input {
    width: 100%;
    background: #ececec;
    color: #383838;
    border-radius: 5px;

    padding: 0.5em;
    font-size: clamp(0.8em, 3vw, 1em);

    margin-top: 0.25em;
    transition: box-shadow 0.3s;
  }

  .highlight {
    border: 1px solid rgba(255, 0, 0, 0.2);
  }
`

export default Form
