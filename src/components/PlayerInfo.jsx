import React from "react";
export default function PlayerInfo(props) {
  const { player, darah, hasah, removeElement } = props;
  return (
    <div className="flex">
      <button className="delete" onClick={() => removeElement(player.id)}>
        Тоглогч устгах {player.name}
      </button>

      <h2 className="ner">{player.name}</h2>
      <button onClick={() => hasah(player.name)}>оноо хасах</button>
      <p className="onoo">{player.score}</p>
      <button className="" onClick={() => darah(player.name)}>
        оноо нэмэх
      </button>
    </div>
  );
}
