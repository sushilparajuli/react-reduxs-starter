import React from "react";
import "semantic-ui-css/semantic.min.css";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

export default function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}
