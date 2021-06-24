import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

import Users from "./Users";

/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import users from "./users-data";

/**
 * Our React component where we display data
 * -----------------------------
 */
function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Loop Over an Array of Data</h2>
      </div>

      {/* Iterate over imported array in userData */}
      <div className="users">
        <Users users={users} />
      </div>
      
      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
