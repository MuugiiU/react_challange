import { players as data } from "./data/data";
import PlayerInfo from "./components/PlayerInfo";
import { useState } from "react";
const dt = data.sort((player1, player2) => {
  return player2.score - player1.score;
});
function App() {
  const [players, setPlayers] = useState(dt);

  const add = () => {
    let ner = prompt("Нэрээ оруулна уу");
    let onoo = parseInt(prompt("Оноогоо оруулна уу"));
    players.push({ name: ner, score: onoo });
    const erembelsenData = erembleh();
    setPlayers([...erembelsenData]);
  };
  const removeElement = (id) => {
    const newPlayer = players.filter((player) => player.id !== id);
    setPlayers(newPlayer);
  };
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
      <button className="add" onClick={() => add()}>
        Шинэ тоглогч нэмэх
      </button>

      {players.map((player, id) => {
        return (
          <div key={player.id}>
            <PlayerInfo
              player={player}
              darah={darah}
              hasah={hasah}
              removeElement={removeElement}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
