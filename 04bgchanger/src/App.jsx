import { useState } from 'react'
import './App.css'

// i make background changer with help of useState (hooks) and onclick expect the function in there parameter but we have already method so we can pass it to onClick function we can also do that onClick({setColor}) but in this we cannot pass function with parameter it is syntax problem so we can just pass the setColor function with parameter to onClick function like this  onClick={() => setColor("red")}.

function App() {

  const [color,setColor] = useState("olive");

  const containerStyle = {
    width: '100%',
    height: '100vh',
    backgroundColor: color,
    transition: 'background-color 0.2s ease',
    display:'flex',
    justifyContent:'center',
  };

  const buttonContainerStyle = {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    bottom: '3rem',
    background:'#fff',
    zIndex:'1',
    padding: '8px 16px',
    borderRadius: '9999px',
    alignItems:'center',
  };
  
  const buttonStyle = {
    padding: '8px 16px',
    borderRadius: '9999px',
    color: 'white',
    // boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    marginRight: '8px',
    outline:'none',
  };
  
  return (
    <>
     <div style={containerStyle}>
      <div style={buttonContainerStyle}>
        <button
          onClick={() => setColor("red")}
          style={{...buttonStyle, backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          style={{ ...buttonStyle, backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          style={{ ...buttonStyle, backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("purple")}
          style={{ ...buttonStyle, backgroundColor: "purple" }}
        >
          Purple
        </button>
        <button
          onClick={() => setColor("pink")}
          style={{ ...buttonStyle, backgroundColor: "pink" }}
        >
          Pink
        </button>
        <button
          onClick={() => setColor("yellow")}
          style={{ ...buttonStyle, backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("black")}
          style={{ ...buttonStyle, backgroundColor: "black" }}
        >
          Black
        </button>
        <button
          onClick={() => setColor("gray")}
          style={{ ...buttonStyle, backgroundColor: "gray" }}
        >
          Gray
        </button>
        <button
          onClick={() => setColor("orange")}
          style={{ ...buttonStyle, backgroundColor: "orange" }}
        >
          Orange
        </button>
      </div>
    </div>
    </>
  )
}

export default App
