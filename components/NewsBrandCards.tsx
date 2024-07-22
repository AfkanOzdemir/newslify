"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
type Props = {
  id: number;
  name: string;
  logo: string;
};

const NewsBrandCards = (props: Props) => {
  return (
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={"Habertürk"}
          className="w-full object-cover h-[140px]"
          src={props.logo}
        />
      </CardBody>
      <CardFooter className="text-small text-center items-center justify-center">
        <h4 className="font-bold">{props.name}</h4>
      </CardFooter>
    </Card>
  );
};

export default NewsBrandCards;
