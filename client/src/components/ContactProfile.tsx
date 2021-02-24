import styled from "styled-components";

const ContactProfile: React.FC<{
  contact: {
    name: string;
    id: string;
    lastText: string;
    img: string;
  };
}> = ({ contact }) => {
  return (
    <StyledContactProfile>
      <img src={contact.img} alt="profile" />
      <div>
        <p className="contactName">{contact.name}</p>
        <p className="lastText">{contact.lastText}</p>
      </div>
    </StyledContactProfile>
  );
};

const StyledContactProfile = styled.li`
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
`;

export default ContactProfile;
