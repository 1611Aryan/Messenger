import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Chat from "./Chat";
import SidePanel from "./SidePanel";

const DashBoard = () => {
  //State
  const [isVisible, setIsVisible] = useState<boolean>(false);

  //Effect
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const variants = {
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
    hidden: { opacity: 0 },
  };

  return (
    <StyledDashboard
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <SidePanel />
      <Chat />
    </StyledDashboard>
  );
};

const StyledDashboard = styled(motion.div)`
  width: 100vw;
  display: flex;
  height: 90vh;
`;

export default DashBoard;
