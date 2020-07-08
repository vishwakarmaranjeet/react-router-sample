import React, { Component } from 'react';
import cookie from 'react-cookies'
import services from '../services/services';
import Wrapper from './Hoc/Wrapper';
import Input from './Input';
import UserBand from './UserBand';
class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            inputVal:'',
            isUserBandVisible:true,
            bandData:[]
        }
    }
    componentDidMount(){
        this.getUserBandDataDetails();
        let userBandCookie = cookie.load('User_Band');
        if(typeof userBandCookie !== 'undefined' && userBandCookie){
            this.setState({
                isUserBandVisible:false
            })
        }
    }

    // Get User Band data
    getUserBandDataDetails(){
        services.getUserBandData().then(res=>{
            this.setState({
                bandData:res.UserBand
            });
        })
        .catch(error=>{
            console.log(error);
        })
    }
    onChangeHandler=(data)=>{
        this.setState({
            inputVal:data
        });
    }
    // User band handler fuction
    userBandClickHandler=()=>{
        // Set cookies date 1 year
        const expires = new Date()
        expires.setDate(expires.getDate() + 365)
        cookie.save(this.state.bandData[0].CookieName, '1', {
             path: '/',
             expires:expires,
            }
        )
        this.setState({
            isUserBandVisible:false
        })
    }
    // remove cookies 
    removeCookieHandler=()=>{
        cookie.remove(this.state.bandData[0].CookieName, '1', { path: '/' })
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
                { this.state.isUserBandVisible && 
                    <UserBand 
                        bandUserData={this.state.bandData}
                        onClickHandler={this.userBandClickHandler}
                    />
                }
                <button onClick={this.removeCookieHandler}>Remove Cookie</button>
            </Wrapper>
        );
    }
}

export default ClassComponent;