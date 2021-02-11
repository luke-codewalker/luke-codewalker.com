import * as React from "react"
import PageLayout from "../layouts/page-layout";
import ScramblingMarkup from "../components/scrambling-markup/scrambling-markup";
import "./index.scss";
import { PageProps } from "gatsby";
import { FC } from "react";
import ContactLinks from "../components/contact-links/contact-links";

const IndexPage: FC<PageProps> = () => {
  return (
    <PageLayout title="Home">
      <picture className="profile-picture">
        <source media="(min-width: 720px)" srcSet="images/profile_l.JPG" />
        <source media="(min-width: 420px)" srcSet="images/profile_m.JPG" />
        <img src="images/profile_s.JPG" alt="Profile Picture of Luke Codewalker" />
      </picture>
      <main>
        <h1><ScramblingMarkup tagName="h1" innerText="Hello World"></ScramblingMarkup></h1>
        <p>My name is Luke and I like to code.</p>
        <ContactLinks></ContactLinks>
      </main>
    </PageLayout>
  )
}

export default IndexPage
