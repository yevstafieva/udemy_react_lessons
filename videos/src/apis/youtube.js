import axios from 'axios';

const KEY = 'AIzaSyBGt5d_JSSzMJmWTSQqV8toj0uHgLkm9RY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});