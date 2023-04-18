import { useState } from "react";

export const ReactApp = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  return (
    <>
      <h2>This is a React App</h2>
      <button onClick={handleClick}>
        {active ? "Hide shown text" : "Show hidden text"}
      </button>
      {active && <div>Hidden text</div>}
    </>
  );
};
