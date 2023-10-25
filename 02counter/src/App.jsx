import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  // let counter = 15;

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      // setCounter(counter + 1);  // This will not update by 4
      // setCounter(counter + 1);
      // setCounter(counter + 1);
    }
  };

  // const addValueby4 = () => {
  //   if (counter < 20) {
  //     // This will add 4 in our counter
  //     setCounter((prevCounter) => prevCounter + 1);
  //     setCounter((prevCounter) => prevCounter + 1);
  //     setCounter((prevCounter) => prevCounter + 1);
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }
  // };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Coffee and react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
