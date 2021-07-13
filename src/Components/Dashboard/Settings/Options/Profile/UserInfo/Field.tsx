import React, { useRef } from "react"
import { useState } from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { IoMdCheckmark } from "react-icons/io"

// import { actionsUser, useUser } from "../../../../../../Providers/UserProvider"
import { useDispatch, useSelector } from "react-redux"

import axios from "axios"
import { rootState } from "../../../../../../Reducers"
import { actionsUser } from "../../../../../../Actions/userActions"
import { updateUsername } from "../../../../../../API_Endpoints"

const Field: React.FC<{
  info: {
    username: string
    email: string
    phone: string
  }
  setInfo: React.Dispatch<
    React.SetStateAction<{
      username: string
      email: string
      phone: string
    }>
  >
  name: "username" | "email" | "phone"
  value: string | undefined
}> = ({ info, setInfo, name, value }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  //const { user, dispatchUser } = useUser()
  const user = useSelector((state: rootState) => state.user)

  const dispatch = useDispatch()

  const [activated, setActivated] = useState(false)

  const activateInput = () => {
    if (inputRef.current) {
      inputRef.current.readOnly = false
      inputRef.current.focus()
      setActivated(true)
    }
  }

  const deactivateInput = () => {
    if (inputRef.current) {
      inputRef.current.readOnly = true
      setInfo(info => ({
        ...info,
        [name]: user?.[name] ? user?.[name] : "1234567890",
      }))
    }
    setActivated(false)
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(info => ({
      ...info,
      [e.target.name]: e.target.value,
    }))
  }

  const saveInput = async () => {
    if (inputRef.current && inputRef.current.value !== user?.[name]) {
      setInfo(info => ({
        ...info,
        [name]: inputRef.current?.value,
      }))
      inputRef.current.readOnly = true
      setActivated(false)
    }
    let URL = ""
    if (name === "username") {
      URL = updateUsername.URL
    }
    try {
      const res = await axios[updateUsername.METHOD](
        URL,
        {
          username: info.username,
        },
        {
          withCredentials: true,
        }
      )

      dispatch({
        type: actionsUser.UPDATE_USER,
        payload: { property: { key: name, value: info?.[name] } },
      })
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <StyledField>
      <div className="field" onDoubleClick={activateInput}>
        <label htmlFor="username">{name}</label>
        <input
          type="text"
          name={name}
          value={value}
          ref={inputRef}
          //onBlur={deactivateInput}
          onChange={changeHandler}
          readOnly
        />
      </div>
      {!activated ? (
        <button type="button" onClick={activateInput}>
          Edit
        </button>
      ) : (
        <div className="buttons">
          <IoMdCheckmark
            role="button"
            tabIndex={0}
            className="save"
            onClick={saveInput}
          />
          <FaTimes
            role="button"
            tabIndex={0}
            className="cancel"
            onClick={deactivateInput}
          />
        </div>
      )}
    </StyledField>
  )
}

const StyledField = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1em 0;

  .field {
    flex: 1;

    display: flex;
    flex-direction: column;

    max-width: 80%;
  }

  label {
    font-size: 1em;
    text-transform: uppercase;
    color: #b8b8b8;
  }
  input {
    width: 100%;
    margin: 0.2em 0;
    padding: 0.25em;

    border: 0;

    border-bottom: 1px solid #fff;

    background: #0002;
    font-family: var(--fontContent);
    font-size: 1.1em;
    font-weight: 200;
    color: #fff;

    transition: all 0.1s;

    &:focus {
      outline: 0;
    }
  }
  input[readonly] {
    border-bottom: 1px solid transparent;
    background: transparent;
    padding: 0.25em 0;
  }

  button {
    width: calc(2.4em + 4ch);
    border: 0;
    padding: 0.5em 1.2em;

    background: rgba(255, 255, 255, 0.4);

    color: white;
    font-size: 0.9em;
    &:focus {
      outline: 0;
    }
  }

  .buttons {
    width: calc(2.4em + 4ch);
    display: flex;
    justify-content: space-around;
    align-items: center;
    svg {
      cursor: pointer;
      font-size: 1.5em;

      transition: all 0.1s;
      @media (hover: hover) {
        :hover {
          transform: scale(1.1);
          filter: saturate(250%);
        }
      }
    }
    .save {
      color: #48ff48;
    }
    .cancel {
      color: #ff3232;
    }
  }
`

export default Field