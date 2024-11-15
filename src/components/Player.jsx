import { useState } from "react";

export default function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false);

    function handleEditing() {
        setIsEditing(wasEditing => !wasEditing);
    }

  return (
    <li>
      <span className="player">
        {!isEditing ? <span className="player-name">{name}</span> : <input type="text" required value={name} />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save": "Edit"}</button>
    </li>
  );
}