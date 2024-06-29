import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <h1>Jai Shree Ram</h1>
//   )
// }

// const anotherElement = (
//   <a href="https://google.com" target="_blank">Visit Google</a>
// )

// const reactElement = React.createElement(
//   'a',
//   {href:'https://google.com', target:'_blank'},
//   'Click me to visit Google'
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
    // anotherElement
    // reactElement
    // MyApp()
  // </React.StrictMode>,
)
