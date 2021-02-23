import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import dummyProfile from "./../img/placeholder.png";
import SearchBar from "./SearchBar";

const SidePanel = () => {
  return (
    <StyledSidePanel>
      <SearchBar />
      <StyledConversations>
        <li>
          <img src={dummyProfile} alt="profile" />
          <div>
            <p className="contactName">Harry</p>
            <p className="lastText">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </li>
        <li>
          <img src={dummyProfile} alt="profile" />
          <div>
            <p className="contactName">Ron</p>
            <p className="lastText">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </li>
        <li>
          <img src={dummyProfile} alt="profile" />
          <div>
            <p className="contactName">Hermione</p>
            <p className="lastText">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </li>
      </StyledConversations>
      <StyledNewConversation>
        <FontAwesomeIcon icon={faPlus} />
      </StyledNewConversation>
    </StyledSidePanel>
  );
};

const StyledSidePanel = styled.div`
  width: 30%;
  height: calc(100vh - var(--navHeight));
  display: flex;
  flex-direction: column;
  border-right: 2px solid #276678;
  position: relative;
`;

const StyledConversations = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  li {
    width: 100%;
    padding: 1.25rem 0.5rem;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    img {
      align-self: flex-start;
      width: 12%;
      aspect-ratio: 1/1;
      object-fit: cover;
      margin-right: 1rem;
    }
    div {
      font-size: 1rem;
    }
    .contactName {
      font-size: 1em;
      margin-bottom: 0.2em;
      font-weight: 600;
    }
    .lastText {
      font-size: 0.8em;
    }
  }
  li + li {
    border-top: 1px solid #276678;
  }
`;

const StyledNewConversation = styled.button`
  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;
  width: 15%;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: teal;
  color: white;
  font-size: 1.5rem;
`;

export default SidePanel;
