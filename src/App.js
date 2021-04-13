import React, { useState } from "react";

// Import Styles
import "./styles/App.css";

// Import Components
import Hello from "./components/Hello";
import Rectangle from "./components/Rectangle";
import Button from "./components/Button";

function App() {
  const [colorStatus, setColorStatus] = useState(false);

  return (
    <div className="App">
      <Hello />
      <Rectangle colorStatus={colorStatus} />
      <Button colorStatus={colorStatus} setColorStatus={setColorStatus} />
    </div>
  );
}

export default App;
