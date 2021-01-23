import React, { useState } from "react";
import "./styles.css";
// import Lottie from 'react-lottie';
// import animationData from './lotties/Music';

var musicDatabase = {
  EDM: [
    {
      Song: "Bombay Dream",
      Rating: 4.1
    },
    {
      Song: "Bhayaknak Atma",
      Rating: 4.5
    },
    {
      Song: "Liggi",
      Rating: 4.4
    },
    {
      Song: "Fight Back",
      Rating: 4.2
    },
    {
      Song: "Shelter",
      Rating: 4.0
    }
  ],
  "Hip Hop": [
    {
      Song: "Rockstar",
      Rating: 4.8
    },
    {
      Song: "Drake",
      Rating: 4.7
    },
    {
      Song: "Godzilla",
      Rating: 4.6
    },
    {
      Song: "Venom",
      Rating: 4.4
    },
    {
      Song: "Unstoppable",
      Rating: 4.7
    }
  ],
  Pop: [
    {
      Song: "When You Wish Upon A Star",
      Rating: 4.6
    },
    {
      Song: "Afterglow",
      Rating: 4.6
    },
    {
      Song: "Uptown Funk",
      Rating: 4.5
    },
    {
      Song: "Holiday",
      Rating: 4.4
    },
    {
      Song: "Play Date",
      Rating: 4.1
    }
  ]
};

var genreList = Object.keys(musicDatabase);

export default function App() {
  const [genre, setGenre] = useState("EDM");
  function handleGenre(genre) {
    if (genreList.includes(genre)) {
      setGenre(genre);
    } else {
    }
  }

  return (
    <div className="App">
      <h1>Playlists</h1>
      <h2>Checkout my favourite playlist here</h2>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      {/* <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_VE06RZ.json"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px;"
        loop
        controls
        autoplay
      ></lottie-player> */}

      <div style={{ display: "inline" }}>
        <button className="button" onClick={() => handleGenre("EDM")}>
          EDM
        </button>
        <button className="button" onClick={() => handleGenre("Hip Hop")}>
          Hip Hop
        </button>
        <button className="button" onClick={() => handleGenre("Pop")}>
          Pop
        </button>
      </div>

      <hr style={{ width: "70%" }} />
      <h3>Songs</h3>

      <div>
        {musicDatabase[genre].map((element) => {
          return (
            <div key={element.Song} className="song-item">
              <h2 className="song"> {element.Song}</h2>
              <small className="rating"> Rating - {element.Rating}/5</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}
