"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

function page() {
  const { id } = useParams();
  const [game, setGame] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/games/${id}`);
        const result = await response.json();
        setGame(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Card className="max-w-[600px]">
        <CardHeader className="flex gap-3 h-auto ">
          {/* <Image
            alt="game logo"
            height={40}
            radius="sm"
            src={`/${game[0] && game[0].city.value}`}
            width={40}
          /> */}
          <p className="text-3xl font-bold">{game[0] && game[0].game.value}</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-lg font-bold">
            Result :{" "}
            <span className="font-light">
              {" "}
              {game[0] && game[0].result.value}{" "}
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem culpa
            magnam numquam laborum, accusantium corrupti, molestias incidunt
            eius omnis laudantium deserunt minus ratione dolorum alias
            perspiciatis totam est? Vel, autem.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

export default page;
