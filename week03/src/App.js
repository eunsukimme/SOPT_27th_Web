import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import { getUserAPI } from "./lib/api";
import "./components/style.css";
import "./components/switch.css";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async (username) => {
    try {
      const data = await getUserAPI(username);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onToggle = () => {
    const toggle = document.getElementById("toggle");
    const nodes = document.getElementsByClassName("changable");
    console.log(nodes);

    for (let i = 0; i < nodes.length; i++) {
      if (toggle.checked) {
        nodes[i].classList.add("white");
      } else {
        nodes[i].classList.remove("white");
      }
    }
  };

  return (
    <div className="App changable">
      <label className="switch">
        <input type="checkbox" id="toggle" onClick={onToggle} />
        <span className="slider round"></span>
      </label>
      <SearchInput onSubmit={getUser} />
      <SearchResult user={user} />
    </div>
  );
}

export default App;
