import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "duality", duration: "4:45" },
    { title: "Before I forget", duration: "3:00" },
    { title: "Sic", duration: "2:55" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
