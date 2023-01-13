import React from "react";
export default function PlayerInfo(props) {
  const { player, darah, hasah } = props;
  return (
    <div>
      {/* <button onClick={()=> delete()}>Delete</button> */}
      <h2>{player.name}</h2>
      <button onClick={() => hasah(player.name)}>-</button>
      <p>{player.score}</p>
      <button onClick={() => darah(player.name)}>+</button>
    </div>
  );
}
