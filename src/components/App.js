
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName]=useState('');
  function showName(event){
    setName(event.target.value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" onChange={showName}></input>
        <h1>{name && `Hello ${name}!`}</h1>
    </div>
  )
}

export default App
