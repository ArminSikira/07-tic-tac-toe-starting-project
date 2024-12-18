import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  
  const [playerName, setPlayerName] = useState(initialName);

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  const [isEditing, setIsEditing] = useState(false);

  function handleEditing() {
    setIsEditing((wasEditing) => !wasEditing);
  }

  return (
    <li className={isActive ? "active": undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
