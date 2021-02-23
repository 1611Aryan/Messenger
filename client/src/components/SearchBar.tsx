import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <input type="text" placeholder="Search" />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.form`
  width: 100%;
  padding: 1rem 0.5rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    font-size: 0.9rem;
    width: 100%;
    padding: 0.7rem;
    border: 0;
    border-radius: 20px 0 0 20px;
    background: #f6f5f5;
    color: #111;
    font-weight: 300;
    &:focus {
      outline: 0;
    }
  }
  button {
    font-size: 1rem;
    padding: 0.65rem 1rem;
    background: #d3e0ea;
    border-radius: 0 20px 20px 0;
  }
`;

export default SearchBar;
