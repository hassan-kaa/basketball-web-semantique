"use client";
import { useEffect, useState } from "react";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/teams");
        const result = await response.json();
        setTeams(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {teams &&
        teams.map((team, index) => (
          <div key={index}>
            {team.name.value} {index}
          </div>
        ))}
    </div>
  );
}

export default Teams;
