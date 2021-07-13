import { Link } from "react-router-dom";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <h1>
        <Link to="/">Messenger</Link>
      </h1>

      <Link to="/">
        <button>Login</button>
      </Link>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100vw;
  height: var(--navHeight);
  padding: 0 var(--padding);

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: var(--fontHeading);

  position: relative;
  z-index: 10;
  h1 {
    font-size: 2.5em;
    font-weight: 700;
    color: var(--primary);
  }

  button {
    padding: 0.42rem 1.1rem;
    background: #fff;

    font-size: 1.25em;
    font-weight: 700;
    color: var(--primary);

    border-radius: 6px;
  }
`;

export default Header;