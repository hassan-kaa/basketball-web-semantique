"use client";
import { useEffect, useState } from "react";

function Teams() {
  const [stadiums, setStadiums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/stadiums");
        const result = await response.json();
        setStadiums(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {stadiums &&
        stadiums.map((stadium, index) => (
          <div key={index}>
            {stadium.stadium.value} {index}
          </div>
        ))}
    </div>
  );
}

export default Teams;
