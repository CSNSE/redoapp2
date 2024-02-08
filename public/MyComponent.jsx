import React, { useState } from 'react';

function MyComponent() {
  const [displayText, setDisplayText] = useState('Hello from JSX!');

  // Function to update the text content
  const updateText = () => {
    setDisplayText('New Text from JSX!');
  };

  return (
    <div>
      {/* Display the text from JSX */}
      <p>{displayText}</p>

      {/* Button to update the text */}
      <button onClick={updateText}>Update Text</button>
    </div>
  );
}

export default MyComponent;
