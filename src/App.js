import React, {useState} from "react";
import './App.css';

function App() {

  // Use State
  const [inputValue, setInputValue] = useState("");
  const [inputValueShow, setInputValuehide] = useState(false);

  const handleChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);

    // Remove Submit Value
    setInputValuehide(false);
  };
  
  return (
    <>
       <div className="App">
      {/* <h1>{inputValue}</h1> */}

      <h1>{inputValueShow ? inputValue : ''}</h1>

      <input type="text" onChange={handleChange}/>

      <button onClick = {() => setInputValuehide(true)}> Submit</button>
    </div>
    </>
  );
}

export default App;
