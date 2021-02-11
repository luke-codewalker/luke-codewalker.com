import * as React from "react"
import PageLayout from "../layouts/page-layout";
import "./index.scss";
import { PageProps } from "gatsby";
import { FC } from "react";
import Hero from "../components/hero/hero";
import Bio from "../components/bio/bio";

const IndexPage: FC<PageProps> = () => {
  return (
    <PageLayout title="Home">
      <main>
        <Hero></Hero>
        <Bio></Bio>
      </main>
    </PageLayout>
  )
}

export default IndexPage
