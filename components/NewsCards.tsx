"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

type Props = {};

const NewsCards = (props: Props) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex flex-col gap-3">
        <Image
          alt="Başlık"
          height={250}
          radius="sm"
          width={"100%"}
          src="https://im.haberturk.com/l/2024/07/22/ver1721672560/3704838/jpg/1280x1280"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">
            Kabine Toplantısı ne zaman yapılacak?
          </h3>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          Kabine Toplantısı tarihi merak konusu oldu. Son olarak Kabine
          Toplantısı 16 Temmuz tarihinde gerçekleşmişti. Normal zamanda iki
          haftada bir gerçekleşen toplantı hakkında merak edilenleri haberimizde
          derledik. Peki, Kabine Toplantısı ne zaman yapılacak ve saat kaçta
          başlayacak? İşte Kabine Toplantısı tarihi ve gündem maddeleri...
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://www.haberturk.com/">
          HaberTürk
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCards;
