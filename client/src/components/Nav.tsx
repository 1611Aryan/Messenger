import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Nav: React.FC<{ setId: any; id: null | string }> = ({ setId, id }) => {
  const logOut = () => {
    setId(null);
  };

  return (
    <StyledNav>
      <h1>
        <a href="/">Messenger</a>
      </h1>
      {id && (
        <div className="profile">
          <FontAwesomeIcon icon={faUserCircle} />
          <StyledButton onClick={logOut}>Log Out</StyledButton>
        </div>
      )}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100vw;
  height: var(--navHeight);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: linear-gradient(to right, rgb(0, 180, 219), rgb(0, 131, 176));
  color: #f6f5f5;
  font-family: "Quicksand", sans-serif;
  h1 {
    font-size: 2em;
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    font-size: 2rem;
    & > * + * {
      margin-left: 2rem;
    }
    svg {
      cursor: pointer;
    }
  }
`;

const StyledButton = styled.button`
  padding: 0.5rem 0.7rem;
  border-radius: 3px;
  font-size: 1rem;
  font-weight: 600;
  background: transparent;
  color: #f6f5f5;
  border: 1px solid #f6f5f5;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #f6f5f5;
    color: #1687a7;
  }
`;
export default Nav;
