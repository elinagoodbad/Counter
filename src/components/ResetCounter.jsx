import React from "react";

const ResetCounter = ({ resetClickCount }) => {
  return (
    <div>
      <button class="button" onClick={resetClickCount}>
        Сбросить
      </button>
    </div>
  );
};

export default ResetCounter;
