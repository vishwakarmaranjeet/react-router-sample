import React, { Component } from 'react';
import Wrapper from './Hoc/Wrapper';
import Input from './Input';
class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            inputVal:''
        }
    }
    onChangeHandler=(data)=>{
        this.setState({
            inputVal:data
        });
    }
    render() {
        return (
            <Wrapper>
                <h3>Class Component</h3>
                <Input 
                  inputType='text'
                  placeholderTxt='Enter your name'
                  inputVal={this.state.inputVal}
                  inputOnChangeHandler={this.onChangeHandler}
                />
            </Wrapper>
        );
    }
}

export default ClassComponent;