"use client";
import { useEffect, useState } from "react";

function Teams() {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/coaches");
        const result = await response.json();
        setCoaches(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {coaches &&
        coaches.map((coach, index) => (
          <div key={index}>
            {coach.coachName.value} {index}
          </div>
        ))}
    </div>
  );
}

export default Teams;
