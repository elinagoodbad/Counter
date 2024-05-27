import React from "react";

const ClickButton = ({ incrementClickCount }) => {
  return (
    <div>
      <button class="button" onClick={incrementClickCount}>
        Увеличить
      </button>
    </div>
  );
};

export default ClickButton;
