// App.js
import React from "react";
import AppRoutes from "./routes";
import SideBar from "./sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <SideBar>
        <AppRoutes />
      </SideBar>
      <h1>Essa porra ta ligando</h1>
    </div>
  );
}

export default App;
