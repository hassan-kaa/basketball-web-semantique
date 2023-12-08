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
import Image from "next/image";
function Teams() {
  const [teams, setTeams] = useState([]);
  const [regions, setRegions] = useState([]);
  const [groupByReg, setGroupByReg] = useState(false);
  const groupByRegion = async () => {
    setGroupByReg(true);
    try {
      const response = await fetch("/api/teams/group-by-region");
      const result = await response.json();
      setRegions(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
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
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex gap-5 items-center">
        <Button onClick={groupByRegion} color="warning" variant="flat">
          Group by Region
        </Button>
      </div>
      {!groupByReg && (
        <Table isStriped aria-label="Player table" className="w-full">
          <TableHeader>
            <TableColumn>Logo</TableColumn>
            <TableColumn>NAME</TableColumn>
            <TableColumn>City</TableColumn>
          </TableHeader>
          <TableBody>
            {teams &&
              teams.map((team, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Image
                      alt="Team logo"
                      height={40}
                      radius="sm"
                      src={`/${team && team.logo.value}`}
                      width={40}
                    />
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/teams/${team.name.value}`}
                      className="font-bold hover:text-blue-400"
                    >
                      {team.name.value}
                    </Link>
                  </TableCell>
                  <TableCell>{team.city.value}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
      {groupByReg && (
        <Table isStriped aria-label="Player table" className="w-full">
          <TableHeader>
            <TableColumn>Region</TableColumn>
            <TableColumn>Teams</TableColumn>
          </TableHeader>
          <TableBody>
            {regions &&
              regions.map((region, index) => (
                <TableRow key={index}>
                  <TableCell>{region.region.value}</TableCell>
                  <TableCell>{region.teams.value}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default Teams;
