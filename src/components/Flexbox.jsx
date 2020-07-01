import React, {useState, useEffect} from 'react';
import Wrapper from './Hoc/Wrapper';
import services from '../services/services';
const Flexbox = ()=>{
const [userData, setUserData] = useState([]);
    useEffect(()=>{
        services.getSampleUserData().then(res=>{
            setUserData(
                res.data
            );
        })
        .catch(error=>{
            console.log(error);
        })
    },[]);
    return (
        <Wrapper>
            <div className="flex-container">
                {
                    userData.map((item, index)=>(
                        <div className="flex-item" key={item.id}>
                            <div className="user-avatar">
                                <img src={`${item.avatar}`}/>
                            </div>
                            <p>{`${item.first_name} ${item.last_name}`}</p>
                            <p>{item.email}</p>
                        </div>
                    ))
                }
                {/* {[...Array(100)].map((x, i) => (
                 <div className="flex-item" key={i+1}>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                 </div>
                ))} */}
            </div>
        </Wrapper>
    )
}
export default Flexbox;