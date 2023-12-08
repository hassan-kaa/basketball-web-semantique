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
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/teams/${id}`);
        const result = await response.json();
        setTeam(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Card className="max-w-[800px] ">
        <CardHeader className="flex gap-3">
          <Image
            alt="Team logo"
            height={40}
            radius="sm"
            src={`/${team[0] && team[0].logo.value}`}
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-xl font-bold">{team[0] && team[0].name.value}</p>
            <p className="text-lg text-default-500">
              {team[0] && team[0].city.value}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem culpa
            magnam numquam laborum, accusantium corrupti, molestias incidunt
            eius omnis laudantium deserunt minus ratione dolorum alias
            perspiciatis totam est? Vel, autem.
          </p>
        </CardBody>
        <Divider />
        {/* <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter> */}
      </Card>
    </div>
  );
}

export default page;
