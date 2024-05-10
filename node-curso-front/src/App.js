// App.js
import React from "react";
import SideBar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <Outlet />
    </div>
  );
}

export default App;
