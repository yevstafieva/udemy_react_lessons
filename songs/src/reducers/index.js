import { combineReducers } from 'redux'; 

const songsReducer = () => {
    return [
        {title: "No Scrubs", duration: '4:10'},
        {title: 'Macarena', duration: '3:10'},
        {title: 'All star', duration: '2:50'},
        {title: 'I want it', duration: '2:40'}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') return action.payload;
    return selectedSong
};

export default combineReducers (
    {
        songs: songsReducer,
        selectedSong: selectedSongReducer
    }
);