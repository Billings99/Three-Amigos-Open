import React, { useEffect, useState } from "react";

import { createRoot } from "react-dom/client";

import "./style.css";

import { updateScore, watchScores } from "./scores";

const players = [

  "Anthony Clemente",

  "Jacob Billings",

  "Brady Billings"

];

function App() {

  const [scores, setScores] = useState({});

  useEffect(() => {

    const unsubscribe = watchScores((data) => {

      setScores(data);

    });

    return () => unsubscribe();

  }, []);

  async function enterScore(player, hole, value) {

    await updateScore(player, hole, Number(value));

  }

  return (

    <div className="app">

      <h1>🏆 The Three Amigos Open</h1>

      <h2>Live Leaderboard</h2>

      {players.map((player) => {

        const playerScores = scores[player] || {};

        const total = Object.values(playerScores)

          .reduce((sum, score) => sum + Number(score), 0);

        return (

          <div className="card" key={player}>

            <h3>{player}</h3>

            <p>Total: {total || "-"}</p>

            <div className="holes">

              {[1,2,3,4,5,6,7,8,9].map((hole) => (

                <input

                  key={hole}

                  type="number"

                  placeholder={`H${hole}`}

                  onChange={(e) =>

                    enterScore(player, hole, e.target.value)

                  }

                />

              ))}

            </div>

          </div>

        );

      })}

    </div>

  );

}

createRoot(document.getElementById("root")).render(<App />);
