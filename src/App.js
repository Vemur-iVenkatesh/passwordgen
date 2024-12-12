import React, { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);

  const handleGeneratePassword = () => {
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let characters = "";
    if (includeUpper) characters += upperChars;
    if (includeLower) characters += lowerChars;
    if (includeNumbers) characters += numberChars;
    if (includeSpecial) characters += specialChars;

    if (characters === "") return; // No characters selected

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random('h') * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div>
        <label>
          Password Length:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min="6"
            max="20"
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeUpper}
            onChange={() => setIncludeUpper(!includeUpper)}
          />
          Include Uppercase letters
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={includeLower}
            onChange={() => setIncludeLower(!includeLower)}
          />
          Include Lowercase Letters
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={includeSpecial}
            onChange={() => setIncludeSpecial(!includeSpecial)}
          />
          Include Special Characters
        </label>
      </div>
      <button onClick={handleGeneratePassword}>Generate Password</button>
      <div>
        <h2>Generated Password:</h2>
        <textarea value={password} readOnly rows="4" cols="50" />
      </div>
    </div>
  );
}

export default App;
