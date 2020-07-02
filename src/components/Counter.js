import React, {useState, useEffect} from 'react';
import Wrapper from './Hoc/Wrapper';
const Counter =()=> {
    //const [StudentTile] = useState('This is student component...');
  const [counter, setCounter] = useState(0);
  
  // Increment handler
  const incremenetHandler =()=>{
    setCounter(
      counter + 1,
      //student.push([generateName()])
    );
  }
  // Decrement handler
  let decrementHandler = ()=>{
    setCounter(
      counter - 1,
      //student.splice(-1, 1)
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