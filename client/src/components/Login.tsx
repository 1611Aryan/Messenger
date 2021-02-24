import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";

const Login: React.FC<{ setId: any }> = ({ setId }) => {
  //State
  const [isVisible, setIsVisible] = useState<boolean>(false);

  //Refs
  const idRef = useRef<HTMLInputElement>(null);

  //Effect
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (idRef.current && idRef.current.value !== "") setId(idRef.current.value);
    else alert("Please Enter an Id");
  };

  const newId = () => {
    setId(uuid());
  };

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.7, ease: "easeInOut" } },
    hidden: { opacity: 0 },
  };

  return (
    <StyledLogin
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <StyledForm onSubmit={SubmitHandler}>
        <h1>Login</h1>
        <div className="formField">
          <label htmlFor="">Enter Your Id: </label>
          <input type="text" ref={idRef} autoFocus />
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

const StyledLogin = styled(motion.div)`
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
    background: linear-gradient(
      to right,
      rgb(251, 215, 134),
      rgb(247, 121, 125)
    );
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
    background: linear-gradient(
      179deg,
      rgba(253, 196, 10, 0.7) 9.6%,
      rgb(245, 211, 87) 50.1%
    );
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
    transition: background 0.3s ease-out;
    &:focus {
      outline: 0;
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(1px);
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
