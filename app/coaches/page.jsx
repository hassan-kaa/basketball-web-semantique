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
  const [coachs, setCoachs] = useState([]);
  const [groupByNat, setGroupByNat] = useState(false);
  const [nationalities, setNationalities] = useState([]);
  const groupByNationality = async () => {
    setGroupByNat(true);
    try {
      const response = await fetch("/api/coaches/group-by-nationality");
      const result = await response.json();
      setNationalities(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
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
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex gap-5 items-center">
        <Button onClick={groupByNationality} color="secondary" variant="flat">
          Group by Nationality
        </Button>
      </div>
      {!groupByNat && (
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
      )}
      {groupByNat && (
        <Table isStriped aria-label="Player table" className="w-full">
          <TableHeader>
            <TableColumn>Nationality</TableColumn>
            <TableColumn>Teams</TableColumn>
          </TableHeader>
          <TableBody>
            {nationalities &&
              nationalities.map((nationality, index) => (
                <TableRow key={index}>
                  <TableCell>{nationality.nationality.value}</TableCell>
                  <TableCell>{nationality.coaches.value}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default Teams;
