import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Nav from "./components/Nav";
import DashBoard from "./components/DashBoard";
import Login from "./components/Login";

const App: React.FC = () => {
  const [id, setId] = useLocalStorage("id", null);
  return (
    <>
      <Nav setId={setId} id={id} />
      {id !== null ? <DashBoard /> : <Login setId={setId} />}
    </>
  );
};

export default App;
