import React, {useState} from 'react';
import Wrapper from './Hoc/Wrapper';
const Counter =()=> {

  const [counter, setCounter] = useState(0);

  // Increment counter handler
  const incremenetHandler =()=>{
    setCounter(
      counter + 1,
    );
  }

  // Decrement counter handler
  let decrementHandler = ()=>{
    setCounter(
      counter - 1,
    );
  }
  
  return(
    <Wrapper>
        <h3>Cliked Count : {counter}</h3>
        <button onClick={incremenetHandler} className="add-button">+</button>
        <button onClick={decrementHandler} className="remove-button">-</button>
    </Wrapper>
  );
}
export default Counter;