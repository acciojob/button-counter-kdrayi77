import React, { useState } from 'react';

function ButtonCounter() {
  // Initialize state with useState hook
  const [count, setCount] = useState(0);

  // Event handler to increment the counter
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ButtonCounter;
