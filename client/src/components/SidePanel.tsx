import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import ContactProfile from "./ContactProfile";
import dummyProfile from "./../img/placeholder.png";
import useConversation from "../hooks/useConversation";

const SidePanel = () => {
  const [contacts, setContacts] = useState([
    {
      name: "Harry",
      id: "1234",
      lastText: " Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: dummyProfile,
    },
    {
      name: "Ron",
      id: "5678",
      lastText: " Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: dummyProfile,
    },
    {
      name: "Hermione",
      id: "9012",
      lastText: " Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: dummyProfile,
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useConversation(
    contacts
  );

  useEffect(() => {
    if (typeof setSelectedConversation !== "object")
      setSelectedConversation("9012");
    console.log(selectedConversation);
  }, [selectedConversation]);

  return (
    <StyledSidePanel>
      <SearchBar />
      <StyledConversations>
        {contacts.map(contact => (
          <ContactProfile key={contact.id} contact={contact} />
        ))}
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
