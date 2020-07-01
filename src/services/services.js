import axios from 'axios';
let userobj=[
    {name:"Ranjeet", location:"Mumbai"},
    {name:"Mukesh", location:"Rajashthan"},
    {name:"Vikrant", location:"Mumbai"},
    {name:"Abhishek", locatiob:"Mumbai"}
];
// Sample data api URL
let apiURL = "https://reqres.in/api/";

// Promise based api calling function
const getSampleUserData = () => {
    return new Promise((resolve, reject) => {
        axios.get(apiURL+"users")
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
}
const service = {
    userobj,
    getSampleUserData
}
export default service;