import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(() => {passwordGenerator()},[length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className="container">
        <h1 className="heading">Password Generator</h1>
        <div className="search">
          <input type="text" value={password} placeholder="Password" readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="options">
          <div className="range">
            <input type="range" min={6} max={100} value={length} onChange={(e) => {setLength(e.target.value)}}/>
            <label >Length:{length}</label>
          </div>
          <div className="checks">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {setNumberAllowed((prev) => !prev)}}/>
            <label htmlFor="">Numbers</label>
          </div>
          <div className="checks">
            <input type="checkbox" name="" id="characterInput" onChange={() => {setCharAllowed((prev) => !prev)}}/>
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
