import styled from "styled-components";
import Chat from "./Chat";
import SidePanel from "./SidePanel";

const DashBoard = () => {
  return (
    <StyledDashboard>
      <SidePanel />
      <Chat />
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  width: 100vw;
  display: flex;
  height: 90vh;
`;

export default DashBoard;
