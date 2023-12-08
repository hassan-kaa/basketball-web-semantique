"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

function page() {
  const { id } = useParams();
  const [stadium, setStadium] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/stadiums/${id}`);
        const result = await response.json();
        setStadium(result.data);
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
            alt="stadium logo"
            height={40}
            radius="sm"
            src={`/${stadium[0] && stadium[0].city.value}`}
            width={40}
          /> */}
          <p className="text-3xl font-bold">
            {stadium[0] && stadium[0].name.value}
          </p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-lg font-bold">
            Stadium capacity :{" "}
            <span className="font-light">
              {" "}
              {stadium[0] && stadium[0].capacity.value}{" "}
            </span>
          </p>
          <p className="text-lg font-bold">
            Stadium City :{" "}
            <span className="font-light">
              {" "}
              {stadium[0] && stadium[0].city.value}{" "}
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
