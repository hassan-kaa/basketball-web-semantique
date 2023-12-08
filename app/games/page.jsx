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
function games() {
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
    <div className="w-full">
      <Table isStriped aria-label="Player table" className="w-full">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>Result</TableColumn>
        </TableHeader>
        <TableBody>
          {games &&
            games.map((game, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link
                    href={`/games/${game.result.value}`}
                    className="font-bold hover:text-blue-400"
                  >
                    {game.game.value}
                  </Link>
                </TableCell>
                <TableCell>{game.result.value}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default games;
