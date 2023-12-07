"use client";
import { useEffect, useState } from "react";

function Teams() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/players");
        const result = await response.json();
        setPlayers(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {players &&
        players.map((player, index) => (
          <div key={index}>
            {player.playerName.value} {index}
          </div>
        ))}
    </div>
  );
}

export default Teams;
