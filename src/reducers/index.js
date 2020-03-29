import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "Song One", duration: "4:05" },
    { title: "Song Two", duration: "3:05" },
    { title: "Song Three", duration: "3:35" },
    { title: "Song Four", duration: "2:15" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
