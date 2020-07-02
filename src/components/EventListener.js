import React, {useState, useEffect} from 'react';
import Wrapper from './Hoc/Wrapper';
const EventListener =()=> {
  const [screenWidth, setScreenWidth] = useState([window.innerWidth]);
  // get screen size 
  useEffect(()=>{
    const handleResize =()=>{
      setScreenWidth(window.innerWidth)
    }
      window.addEventListener('resize', handleResize);
    return ()=> {
      window.removeEventListener('resize', handleResize);
    }
  },[]);
  return(
    <Wrapper>
        {screenWidth <=768 ? <h4>Mobile</h4> : <h4>Desktop</h4>}
    </Wrapper>
  );
}
export default EventListener;