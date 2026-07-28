import React from "react";

import { createRoot } from "react-dom/client";

import "./style.css";

const players = [

  "Anthony Clemente",

  "Jacob Billings",

  "Brady Billings"

];

function App() {

  return (

    <div className="app">

      <h1>🏆 The Three Amigos Open</h1>

      <h2>54 Hole Gross Championship</h2>

      <h3>Leaderboard</h3>

      {players.map(player => (

        <div className="card" key={player}>

          {player}

          <br />

          Score: --

        </div>

      ))}

      <h3>Courses</h3>

      <p>Round 1: Old Bridge Golf Club - The Rose</p>

      <p>Round 2: Royce Brook Golf Club</p>

      <p>Round 3: Charleston Springs</p>

      <h3>Games</h3>

      <p>🐺 Wolf</p>

      <p>💰 Skins</p>

      <p>🎯 Closest to the Pin</p>

      <p>🐦 Birdie Pot</p>

    </div>

  );

}

createRoot(document.getElementById("root")).render(<App />);
