import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// why hooks are important == in UI updation react take control of it so react provide us hook(methods) to propogate the UI updation with ease and better way and there are many lot of hooks (methodss).

function App() {

  let [counter,setCounter] = useState(0); // useState function gives two value in array format 1st is whatever we want to update & play for value and 2nd value is function that controls 1st vallue . useState needs a parameter to update and you can pass any number or value like false,true etc and there is no specific keyword that useState return in array format you can own pick or choose any name.
  // let counter = 0;
  const addValue = () => {
    // counter+=1;
    // console.log("clicked",counter);
    if(counter < 20){
      // setCounter(counter+1);
    setCounter(prevcounter => prevcounter+1); 
    // setCounter(prevcounter => prevcounter+1);
    // setCounter(prevcounter => prevcounter+1);
    // setCounter(prevcounter => prevcounter+1);
    }
  }

  const removeValue = () =>{
    if(counter > 0){
    setCounter(counter-1);
    }
  }
  return (
   <>
   <h1>Chai aur react</h1>
   <h2>Counter value:{counter}</h2>
   
   <button onClick={addValue}>Add value {counter}</button>
   <br />
   <button onClick={removeValue}>Remove value {counter}</button>
   <p>footer:{counter}</p>
   </>
  )
}

export default App
