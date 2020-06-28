import React from 'react';
import Wrapper from './Hoc/Wrapper'
const Flexbox = ()=>{
    return (
        <Wrapper>
            <div className="flex-container">
                {[...Array(20)].map((x, i) => (
                 <div className="flex-item">
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                 </div>
                ))}
            </div>
        </Wrapper>
    )
}
export default Flexbox;