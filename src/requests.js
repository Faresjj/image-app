const APIURL = 'https://pixabay.com/api';
const axios = require('axios');
const querystring = require('querystring');
const APIKEY = '15483434-a1c072458182bb7c3c5a38947';
export const getPhotos = (page = 1) => axios.get(`${APIURL}/?key=${APIKEY}&page=${page}`);
export const searchPhotos = (data) => {
    data['key'] = APIKEY;
    return axios.get(`${APIURL}/?${querystring.encode(data)}`);
}
export const searchVideos = (data) => {
    data['key'] = APIKEY;
    return axios.get(`${APIURL}/videos/?${querystring.encode(data)}`);
}