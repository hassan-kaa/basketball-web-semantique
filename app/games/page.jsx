"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
function games() {
  const [games, setGames] = useState([]);
  const [groupByRes, setGroupByRes] = useState(false);
  const [results, setResults] = useState([]);
  function formatBasketballMatch(input) {
    // Extract the part after the last '#' symbol
    const lastHashIndex = input.lastIndexOf("#");
    const extractedString = input.substring(lastHashIndex + 1);

    // Replace 'Vs' with 'vs' and insert a space before each uppercase letter
    const formattedString = extractedString
      .replace("Vs", " vs")
      .replace(/([A-Z])/g, " $1")
      .trim();

    return formattedString;
  }
  const myFunc = (arr) => {
    let res = arr.split(",");
    let m = res.map((r) => formatBasketballMatch(r));
    console.log(m);
    return m;
  };
  const groupByResult = async () => {
    setGroupByRes(true);
    try {
      const response = await fetch("/api/games/group-by-local-win");
      const result = await response.json();
      setResults(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
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
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex gap-5 items-center">
        <Button onClick={groupByResult} color="warning" variant="flat">
          Group by Local team Result
        </Button>
      </div>
      {!groupByRes && (
        <Table isStriped aria-label="Player table" className="w-full">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>Result</TableColumn>
            <TableColumn>Venue</TableColumn>
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
                      {formatBasketballMatch(game.game.value)}
                    </Link>
                  </TableCell>
                  <TableCell>{game.result.value}</TableCell>
                  <TableCell>{game.venu.value}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
      {groupByRes && (
        <Table isStriped aria-label="Player table" className="w-full">
          <TableHeader>
            <TableColumn>Local team Result </TableColumn>
            <TableColumn>Matches</TableColumn>
          </TableHeader>
          <TableBody>
            {results &&
              results.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{result.result.value} for Local team</TableCell>
                  <TableCell>
                    {myFunc(result.games.value).map((x) => (
                      <Link
                        href={`/games/${x}`}
                        className="font-bold hover:text-blue-400"
                      >
                        {x} {" | "}
                      </Link>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default games;
