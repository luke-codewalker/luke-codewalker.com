import { graphql, useStaticQuery } from "gatsby";
import React, { FC, useContext } from "react";
import { Locale, LocaleContext } from "../../layouts/page-layout";
import ContactLinks from "../contact-links/contact-links";
import ProfilePicture from "../profile-picture/profile-picture";
import ScramblingMarkup from "../scrambling-markup/scrambling-markup";
import "./hero.scss";

type TaglineData = {
    allContentfulTagline: {
        nodes: {
            tagline: string;
            node_locale: Locale;
        }[];
    }
}

const Hero: FC = () => {
    const data = useStaticQuery<TaglineData>(graphql`
    query TagLineQuery {
        allContentfulTagline {
          nodes {
            tagline
            node_locale
          }
        }
      }`);

    const currentLocale = useContext(LocaleContext);

    const { tagline } = data.allContentfulTagline.nodes.find(node => node.node_locale === currentLocale);

    return <article className="hero">
        <ProfilePicture></ProfilePicture>
        <section className="info">
            <h1 className="headline"><ScramblingMarkup tagName="h1" innerText="Hello World"></ScramblingMarkup></h1>
            <p className="tagline">{tagline}</p>
            <ContactLinks></ContactLinks>
        </section>
    </article>
}

export default Hero;