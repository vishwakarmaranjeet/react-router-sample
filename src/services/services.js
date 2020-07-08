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
// Get User band data
const getUserBandData = () => {
    return new Promise((resolve, reject) => {
        axios.get('../userband.json')
        .then(res => resolve(res.data))
        .catch(error => reject(error));
    });
}

// Function for number format
function formatNumber(num) {
    let n1, n2;
    num = num + '' || '';
    // works for integer and floating as well
    n1 = num.split('.');
    n2 = n1[1] || null;
    n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
    num = n2 ? n1 + '.' + n2 : n1;
    return num;
}

// function for make text capitalize
function toCapitalizeCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
// Function for first letter capitalize
const firstLetterCapitalize = (str) => {
    if (typeof str !== 'string') return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}
// Get first charecter from string.
function getUserInitial(input) {
    return input ? input.charAt(0).toUpperCase() : "";
}
// Date format
function dateFormat(str) {
    return str.replace(/(\d+)(st|nd|rd|th)/, "$1");
}
// function for get full month name e.g 01 Jan 2020
function getFullMonthName(input) {
    let splitValue = input.split(" ");
    let monthNames = {
        "jan": "January",
        "feb": "February",
        "mar": "March",
        "apr": "April",
        "may": "May",
        "jun": "June",
        "jul": "July",
        "aug": "August",
        "sep": "September",
        "oct": "October",
        "nov": "Novemer",
        "dec": "December"
    }
    return splitValue[0] + ' ' + monthNames[splitValue[1].toLowerCase()] + ' ' + splitValue[2]
}
// date without slash
function dateWithoutSlash(date) {
    let year = date.getFullYear().toString();
    let month = date.getMonth().toString();
    let day = date.getDate().toString();
    let appendedDay = day.length === 1 ? '0' + day : day;
    let appendedMonth = month.length === 1 ? '0' + month : month;
    return `${appendedDay}${appendedMonth}${year}`
}
// Check URL basis on that active/inactive router link
const checkActiveUrl = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    const { url } = match;
    return pathname === url ? true : false;
};
const service = {
    getSampleUserData,
    formatNumber,
    toCapitalizeCase,
    firstLetterCapitalize,
    getUserInitial,
    dateFormat,
    getFullMonthName,
    dateWithoutSlash,
    checkActiveUrl,
    getUserBandData,
}
export default service;