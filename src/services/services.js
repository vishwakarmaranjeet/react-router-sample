import axios from 'axios';
// Sample data api URL
let apiURL = "https://reqres.in/api/";
// Promise based api calling function
const getSampleUserData = () => {
    return new Promise((resolve, reject) => {
        axios.get(apiURL+"users?delay=3")
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
}
const service = {
    getSampleUserData
}
export default service;