import React, { useState } from "react";
import ClickCounter from "./components/ClickCounter";
import ClickButton from "./components/ClickButton";
import ResetCounter from "./components/ResetCounter";
import "./index.css";

const App = () => {
  let [clickCount, setClickCount] = useState(0);
  const incrementClickCount = () => {
    setClickCount(clickCount + 1);
  };

  const resetClickCount = () => {
    setClickCount(0);
  };
  return (
    <div className="app">
      <ClickCounter clickCount={clickCount} />
      <ClickButton incrementClickCount={incrementClickCount} />
      <ResetCounter resetClickCount={resetClickCount} />
    </div>
  );
};

export default App;
