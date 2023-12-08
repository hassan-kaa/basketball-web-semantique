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
function stadiums() {
  const [stadiums, setStadiums] = useState([]);
  const orderByCapacity = async () => {
    try {
      const response = await fetch("/api/stadiums/order-by-capacity");
      const result = await response.json();
      setStadiums(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex gap-5 items-center">
        <Button onClick={orderByCapacity} color="danger" variant="flat">
          Order by Capcity ↑
        </Button>
      </div>
      <Table isStriped aria-label="Player table" className="w-full">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>City</TableColumn>
          <TableColumn>Capacity</TableColumn>
        </TableHeader>
        <TableBody>
          {stadiums &&
            stadiums.map((stadium, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link
                    href={`/stadiums/${stadium.city.value}`}
                    className="font-bold hover:text-blue-400"
                  >
                    {stadium.name.value}
                  </Link>
                </TableCell>
                <TableCell>{stadium.city.value}</TableCell>
                <TableCell>{stadium.capacity.value}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default stadiums;
