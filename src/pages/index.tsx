import * as React from "react"
import PageLayout from "../layouts/page-layout";
import ScramblingMarkup from "../components/scrambling-markup";
import "./index.scss";

const IndexPage = () => {
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
        <ul>
          <li>Take a look at <a href="https://github.com/luke-codewalker">my code on Github</a></li>
          <li>You can <a href="https://www.linkedin.com/in/lukas-eschstruth-577847159/">contact me on Linkedin</a></li>
          <li>Or just <a href="mailto:info@luke-codewalker.com">send me an email</a></li>
        </ul>
      </main>
    </PageLayout>
  )
}

export default IndexPage
