import { players as data } from "./data/data";
import PlayerInfo from "./components/PlayerInfo";
import { useState } from "react";
const dt = data.sort((player1, player2) => {
  return player2.score - player1.score;
});
function App() {
  const [players, setPlayers] = useState(dt);

  const add = () => {};

  const darah = (name) => {
    console.log("darah ajillaa name=", name);
    const playerIndex = players.findIndex((player) => player.name === name);
    players[playerIndex].score += 1;
    const erembelsenData = erembleh();
    setPlayers([...erembelsenData]);
  };
  const hasah = (name) => {
    const playerIndex = players.findIndex((player) => player.name === name);
    players[playerIndex].score -= 1;
    const erembelsenData = erembleh();
    setPlayers([...erembelsenData]);
  };
  const erembleh = () => {
    return players.sort((player1, player2) => {
      return player2.score - player1.score;
    });
  };
  return (
    <div className="name">
      {players.map((player, index) => {
        return (
          <div key={index}>
            <PlayerInfo player={player} darah={darah} hasah={hasah} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
