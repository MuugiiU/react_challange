import React from "react";
export default function PlayerInfo(props) {
  const { player, darah, hasah } = props;
  return (
    <div>
      {player.name}
      <button onClick={() => hasah(player.name)}>-</button>
      {player.score}
      <button onClick={() => darah(player.name)}>+</button>
    </div>
  );
}
