import React from 'react';
import Wrapper from './Hoc/Wrapper';
const Input = (props) => {

     const {inputType, inputVal, placeholderTxt, inputOnChangeHandler} = props;

     const onChangeHandlers=(e)=>{
        let inputVal = e.target.value;
        inputOnChangeHandler(inputVal);
    }

    return (
        <Wrapper>
            <input 
                type={inputType} 
                value={inputVal} 
                placeholder={placeholderTxt}
                onChange={(e)=>onChangeHandlers(e)}
            />
        </Wrapper>
    );
};
export default Input;