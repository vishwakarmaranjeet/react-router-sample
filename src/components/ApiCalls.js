import React, {useState, useEffect} from 'react';
import Wrapper from './Hoc/Wrapper';
import services from '../services/services';
const ApiCalls =()=>{
const [loader, setLoader] = useState(false);
const [userData, setUserData] = useState([]);
    useEffect(()=>{
        setLoader(true);
        services.getSampleUserData().then(res=>{
            setUserData(
                res.data,
                setLoader(false)
            );
        })
        .catch(error=>{
            console.log(error);
            setLoader(false);
        })
    },[]);
    return (
        <Wrapper>
            <div className="flex-container">
                {
                    loader ? <p>Loading...</p> :
                    userData.map((item, index)=>(
                        <div className="flex-item" key={item.id}>
                            <div className="user-avatar">
                                <img src={`${item.avatar}`} alt={item.first_name}/>
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
export default ApiCalls;