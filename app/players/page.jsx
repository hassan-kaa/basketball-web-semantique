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
function Teams() {
  const [players, setPlayers] = useState([]);
  const [groupByPos, setGroupByPos] = useState(false);
  const [groupByNat, setGroupByNat] = useState(false);
  const [positions, setPositions] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const orderByHeight = async () => {
    setGroupByPos(false);
    setGroupByNat(false);
    try {
      const response = await fetch("/api/players/order-by-height");
      const result = await response.json();
      setPlayers(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const orderByAge = async () => {
    setGroupByPos(false);
    setGroupByNat(false);
    try {
      const response = await fetch("/api/players/order-by-age");
      const result = await response.json();
      setPlayers(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const groupByPosition = async () => {
    setGroupByPos(true);
    setGroupByNat(false);
    try {
      const response = await fetch("/api/players/group-by-position");
      const result = await response.json();
      setPositions(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const groupByNationality = async () => {
    setGroupByPos(false);
    setGroupByNat(true);
    try {
      const response = await fetch("/api/players/group-by-nationality");
      const result = await response.json();
      setNationalities(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
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
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex gap-5 items-center">
        <Button onClick={orderByHeight} color="primary" variant="flat">
          Order by Height ↑
        </Button>
        <Button onClick={orderByAge} color="secondary" variant="flat">
          Order by Age ↑
        </Button>
        <Button onClick={groupByPosition} color="success" variant="flat">
          Group by Position
        </Button>
        <Button onClick={groupByNationality} color="warning" variant="flat">
          Group by Nationality
        </Button>
      </div>
      {!groupByPos && !groupByNat && (
        <Table isStriped aria-label="Player table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>BirthDate</TableColumn>
            <TableColumn>Height</TableColumn>
            <TableColumn>Nationality</TableColumn>
            <TableColumn>Position</TableColumn>
            <TableColumn>Plays For</TableColumn>
          </TableHeader>
          <TableBody>
            {players &&
              players.map((player, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Link
                      className="font-bold hover:text-blue-400"
                      href={`/players/${player && player.name.value}`}
                    >
                      {player.name.value}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {player.birthDate.value.substring(0, 10)}
                  </TableCell>
                  <TableCell>{player.height.value}</TableCell>
                  <TableCell>{player.nationality.value}</TableCell>
                  <TableCell>{player.position.value}</TableCell>
                  <TableCell>
                    <Link
                      className="font-bold hover:text-blue-400"
                      href={`/teams/${player && player.teamName.value}`}
                    >
                      {player.teamName.value}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
      {groupByPos && (
        <Table isStriped aria-label="Player table">
          <TableHeader>
            <TableColumn>Position</TableColumn>
            <TableColumn>Players</TableColumn>
          </TableHeader>
          <TableBody>
            {positions &&
              positions.map((position, index) => (
                <TableRow key={index}>
                  <TableCell>{position.position.value}</TableCell>
                  <TableCell>{position.players.value}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
      {groupByNat && (
        <Table isStriped aria-label="Player table">
          <TableHeader>
            <TableColumn>Nationality</TableColumn>
            <TableColumn>Players</TableColumn>
          </TableHeader>
          <TableBody>
            {nationalities &&
              nationalities.map((nationality, index) => (
                <TableRow key={index}>
                  <TableCell>{nationality.nationality.value}</TableCell>
                  <TableCell>{nationality.players.value}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default Teams;
