import React from "react";

function ChildComponent2({ onSelect }) {
  return (
    <div
      style={{
        backgroundColor: "Yellow",
        padding: "20px",
        margin: "10px",
      }}
    >
      <button onClick={() => onSelect("Option 2")}>
         Option 2
      </button>
    </div>
  );
}

export default ChildComponent2;
