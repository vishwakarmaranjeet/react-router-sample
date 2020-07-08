import React from 'react';
import Wrapper from './Hoc/Wrapper';
const UserBand = (props) => {
    return (
        <Wrapper>
            {
                props.bandUserData.map((data, index)=>(
                <div className="user-band" key={index + 1}>
                    <button onClick={props.onClickHandler}>x</button>
                    <h3>Now select your tier benefit as per your choice.</h3>
                    <p>New tier benefits added exclusively for you. Select Now! (effective from 16th July 2020)</p>
                </div>
                ))
            }
        </Wrapper>
    );
};

export default UserBand;