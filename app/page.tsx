import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import NewsCards from "@/components/NewsCards";

export default function Home() {
  const RSS_URL = `https://www.haberturk.com/rss`;

  // fetch(RSS_URL)
  //   .then((response) => response.text())
  //   .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  //   .then((data) => console.log(data));

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <NewsCards />
    </section>
  );
}
