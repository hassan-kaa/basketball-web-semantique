"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Link from "next/link";
function Teams() {
  const [coachs, setCoachs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/coaches");
        const result = await response.json();
        setCoachs(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-full">
      <Table isStriped aria-label="coach table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>Nationality</TableColumn>
          <TableColumn>Team</TableColumn>
        </TableHeader>
        <TableBody>
          {coachs &&
            coachs.map((coach, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link
                    className="font-bold hover:text-blue-400"
                    href={`/coaches/${coach && coach.name.value}`}
                  >
                    {coach.name.value}
                  </Link>
                </TableCell>
                <TableCell>{coach.nationality.value}</TableCell>
                <TableCell>
                  <Link
                    className="font-bold hover:text-blue-400"
                    href={`/teams/${coach && coach.teamName.value}`}
                  >
                    {coach.teamName.value}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Teams;
