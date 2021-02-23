import React from "react";
import Nav from "./components/Nav";
import DashBoard from "./components/DashBoard";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <DashBoard />
    </div>
  );
};

export default App;
