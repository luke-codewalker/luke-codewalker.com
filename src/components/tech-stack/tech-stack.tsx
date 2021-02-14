import { useStaticQuery, graphql } from "gatsby";
import React, { FC } from "react";
import "./tech-stack.scss";

type TechStackData = {
    allContentfulTechnology: {
        nodes: {
            expertise: number;
            name: string;
        }[]
    }
}

const TechStack: FC = () => {
    const data = useStaticQuery<TechStackData>(graphql`
    query TechStackQuery {
        allContentfulTechnology(filter: {node_locale: {eq: "en-US"}}) {
          nodes {
            expertise
            name
          }
        }
      }
    `)

    const { nodes: techStack } = data.allContentfulTechnology;

    return <section className="tech-stack">
        <h2>Tech Stack</h2>
        <p className="stack">
            {
                techStack.sort((a, b) => b.expertise - a.expertise).map((tech, i) => <span key={i} className={`tech level-${tech.expertise}`}>{tech.name}</span>)
            }
        </p>
    </section>
}

export default TechStack;