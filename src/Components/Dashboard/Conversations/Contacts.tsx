import styled from "styled-components";
import Contact from "./Contact";

const Contacts: React.FC<{
  displacement: number | undefined;
  setSelected: React.Dispatch<
    React.SetStateAction<{
      name: string;
      img: string;
    }>
  >;
}> = ({ displacement, setSelected }) => {
  const contacts = [
    {
      name: "Andrea	Bell",
      message:
        "Sed eget sem molestie, iaculis arcu vitae, ultrices tortor. Nullam rhoncus, sapien quis suscipit lobortis.",
    },
    {
      name: "Sally King",
      message:
        "Nullam suscipit aliquam libero, vitae suscipit augue ultrices sit amet. Curabitur eu malesuada nibh, a.",
    },
    {
      name: "Wendy	Lewis",
      message:
        "Proin sed metus a est fermentum eleifend id sed quam. Aliquam nec mi at orci.",
    },
    {
      name: "Dylan	Oliver",
      message:
        "Proin hendrerit arcu feugiat turpis feugiat, non tristique purus commodo. Orci varius natoque penatibus et.",
    },
    {
      name: "Leonard Metcalfe",
      message:
        "Duis at lacus vel velit placerat egestas. Nullam tortor orci, iaculis vel pretium nec, efficitur.",
    },
    {
      name: "Sophie	Mills",
      message:
        "Maecenas sit amet elit quam. Maecenas commodo velit at odio dictum finibus. Maecenas molestie finibus.",
    },
    {
      name: "Kylie White",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem  quisquam blanditiis eligendi similique assumenda impedit.",
    },
  ];

  return (
    <StyledContacts theme={{ displacement }}>
      <ul>
        {contacts &&
          contacts.map((contact, index) => (
            <Contact key={index} contact={contact} setSelected={setSelected} />
          ))}
      </ul>
    </StyledContacts>
  );
};

const StyledContacts = styled.div`
  width: 100%;
  height: ${props => window.innerHeight - props.theme.displacement}px;
  flex: 1;
  ul {
    width: 100%;
    max-height: 100%;
    overflow-y: auto;

    list-style-type: none;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default Contacts;
