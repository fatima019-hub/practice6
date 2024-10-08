import { useState } from "react";

const ToggleText = () => {
  const [hideText, setHideText] = useState(false);

  return (
    <div>
      <button onClick={() => setHideText(!hideText)}>
        {hideText ? "Click Me" : "Click Me"}
      </button>
      {hideText && (
        <div>
          <p>Hello World!</p>
        </div>
      )}
    </div>
  );
};

export default ToggleText;
