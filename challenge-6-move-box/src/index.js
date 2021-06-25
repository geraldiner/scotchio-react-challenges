import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [offsetY, setOffsetY] = useState(300);
  const [offsetX, setOffsetX] = useState(0);

  function moveBox(dir) {
    switch (dir) {
      case "left":
        setOffsetX(offsetX - 50);
        break;
      case "up":
        setOffsetY(offsetY - 50);
        break;
      case "right":
        setOffsetX(offsetX + 50);
        break;
      case "down":
        setOffsetY(offsetY + 50);
        break;
      default:
        return;
    }
  }

  return (
    <div className="App">
      <h1>Move the Box!</h1>
      <p>Click on the arrow buttons to move the box around.</p>

      <button type="button" onClick={() => moveBox("up")}>
        ↑
      </button>
      <button type="button" onClick={() => moveBox("down")}>
        ↓
      </button>
      <button type="button" onClick={() => moveBox("left")}>
        ←
      </button>
      <button type="button" onClick={() => moveBox("right")}>
        →
      </button>

      {/* move this box using inline styles */}
      <div
        className="box"
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px)`,
        }}
      />

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
