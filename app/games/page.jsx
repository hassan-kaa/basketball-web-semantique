"use client";
import { useEffect, useState } from "react";

function Teams() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/games");
        const result = await response.json();
        setGames(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {games &&
        games.map((game, index) => (
          <div key={index}>
            {game.game.value} {index}
          </div>
        ))}
    </div>
  );
}

export default Teams;
