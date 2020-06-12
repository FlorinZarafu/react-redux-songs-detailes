import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for</h3>
      <p>
        title {song.title} <br /> duration: {song.duration}
      </p>
    </div>
  );
  // var res = !song ? <div>Slect A Song</div> : <div>{song.title}</div>;
  // return res;
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};
export default connect(mapStateToProps)(SongDetail);
