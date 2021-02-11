import React, { FC } from "react";
import ContactLinks from "../contact-links/contact-links";
import ScramblingMarkup from "../scrambling-markup/scrambling-markup";
import "./hero.scss";

const Hero: FC = () => {

    return <article className="hero">
        <picture className="profile-picture">
            <source media="(min-width: 720px)" srcSet="images/profile_l.JPG" />
            <source media="(min-width: 420px)" srcSet="images/profile_m.JPG" />
            <img src="images/profile_s.JPG" alt="Profile Picture of Luke Codewalker" />
        </picture>
        <section className="info">
            <h1><ScramblingMarkup tagName="h1" innerText="Hello World"></ScramblingMarkup></h1>
            <p>My name is Luke and I like to code.</p>
            <ContactLinks></ContactLinks>
        </section>
    </article>
}

export default Hero;