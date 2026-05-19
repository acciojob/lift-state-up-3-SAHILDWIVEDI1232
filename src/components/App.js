import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1.jsx";
import ChildComponent2 from "./ChildComponent2.jsx";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent"
    style={{
      backgroundColor:"lightgreen",
      width:"200px"
    }}>
      <h1>Parent Component</h1>

      

      <ChildComponent1 onSelect={handleSelection} />
      <ChildComponent2 onSelect={handleSelection} />
      <h2>
        Selected Option:{selectedOption}
        
      </h2>
    </div>
  );
}

export default App;
