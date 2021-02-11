import { useStaticQuery, graphql } from "gatsby";
import { RenderRichTextData, ContentfulRichTextGatsbyReference, renderRichText } from "gatsby-source-contentful/rich-text";
import React, { FC } from "react";

type BioData = {
    allContentfulTextSection: {
        nodes: {
            heading: string;
            body: RenderRichTextData<ContentfulRichTextGatsbyReference>
        }[]
    }
}

const Bio: FC = () => {
    const data = useStaticQuery<BioData>(graphql`
    query BioDataQuery {
        allContentfulTextSection(filter: {heading: {regex: "/bio/i"}}) {
          nodes {
            heading
            body {
              raw
            }
          }
        }
      }
    `)

    const { heading, body } = data.allContentfulTextSection.nodes[0];

    return <section>
        <h2>{heading}</h2>
        {renderRichText(body)}
    </section>
}

export default Bio;