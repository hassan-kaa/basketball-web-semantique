"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

function page() {
  const { id } = useParams();
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/players/${id}`);
        const result = await response.json();
        setPlayer(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Card className="min-w-[400px]">
        <CardHeader className="flex gap-3 ">
          {/* <Image
            alt="player logo"
            height={40}
            radius="sm"
            src={`/${player[0] && player[0].city.value}`}
            width={40}
          /> */}
          <p className="text-3xl font-bold">
            {player[0] && player[0].name.value}
          </p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-lg font-bold">
            Nationality :{" "}
            <span className="font-light">
              {" "}
              {player[0] && player[0].nationality.value}{" "}
            </span>
          </p>
          <p className="text-lg font-bold">
            Height :{" "}
            <span className="font-light">
              {" "}
              {player[0] && player[0].height.value}
              {" cm "}
            </span>
          </p>
          <p className="text-lg font-bold">
            BirthDate :{" "}
            <span className="font-light">
              {" "}
              {player[0] && player[0].birthDate.value.substring(0, 10)}
              {""}
            </span>
          </p>
          <p className="text-lg font-bold">
            Position :{" "}
            <span className="font-light">
              {" "}
              {player[0] && player[0].position.value}
              {""}
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
