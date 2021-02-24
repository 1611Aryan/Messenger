import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Chat = () => {
  const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <StyledChat>
      <StyledHeader>
        <h1>Harry</h1>
        <FontAwesomeIcon icon={faEllipsisV} />
      </StyledHeader>
      <StyledMessages></StyledMessages>
      <StyledForm onSubmit={SubmitHandler}>
        <input type="text" autoFocus />
        <button>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </StyledForm>
    </StyledChat>
  );
};

const StyledChat = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  width: 100%;
  padding: 0.5rem;
  border-bottom: 2px solid #276678;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 1.5rem;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

const StyledMessages = styled.section`
  width: 100%;
  height: 100%;
`;

const StyledForm = styled.form`
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 100%;
    font-size: 0.9rem;
    padding: 1rem;
    border: 0;
    border-radius: 20px 0 0 20px;
    background: #f6f5f5;
    &:focus {
      outline: 0;
    }
  }
  button {
    padding: 0.95rem 1.1rem;
    font-size: 1rem;
    border-radius: 0 20px 20px 0;
    background: #d3e0ea;
    svg {
      transform: rotate(5deg);
    }
  }
`;

export default Chat;
