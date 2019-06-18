import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b432d291c62f9dcf90e873c35d8bdd8d3260b67932de643674eb36f526e9eedb'
    }
})