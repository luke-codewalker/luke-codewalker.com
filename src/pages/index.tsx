import * as React from "react"
import PageLayout from "../layouts/page-layout";
import "./index.scss";
import { PageProps } from "gatsby";
import { FC, useEffect } from "react";
import Hero from "../components/hero/hero";
import Bio from "../components/bio/bio";
import TechStack from "../components/tech-stack/tech-stack";
import { consoleGreetings } from "../utils/console-greetings";

const IndexPage: FC<PageProps> = () => {
  useEffect(() => consoleGreetings(), []);

  return (
    <PageLayout title="Home">
      <main>
        <Hero></Hero>
        <div className="grid-container">
          <TechStack></TechStack>
          <Bio></Bio>
        </div>
      </main>
    </PageLayout>
  )
}

export default IndexPage
