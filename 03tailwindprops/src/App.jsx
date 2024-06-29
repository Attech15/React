import React from 'react';
import './App.css'
import Card from './components/card'

// we have seen props importance in react how they work and why we need it same with component and how to pass props and how to handle props in component we can aslo put default value.props alsp knows as properties but raact say props we have to use props keword in order to use props and its feature.
let myobj = {
  username:"akash",
  age:21
}

let myarr = [1,2,3];

function App() {
  return (
   <>
   <h1 className='bg-green'>Tailwind test</h1>

   {/* <Card/> */}
   <Card channel="chaiaurcode" btn="advanced"/>
   <Card channed="hites"/>
   </>
  )
};

export default App
