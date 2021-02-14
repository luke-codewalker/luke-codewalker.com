import { useStaticQuery, graphql } from "gatsby";
import { RenderRichTextData, ContentfulRichTextGatsbyReference, renderRichText } from "gatsby-source-contentful/rich-text";
import React, { FC, useContext, useState } from "react";
import { LocaleContext } from "../../layouts/page-layout";
import { Locale } from "../../utils/translate";
import "./bio.scss";

type BioData = {
  allContentfulTextSection: {
    nodes: {
      heading: string;
      body: RenderRichTextData<ContentfulRichTextGatsbyReference>;
      node_locale: Locale;
    }[]
  }
}


const Bio: FC = () => {
  const currentLocale = useContext(LocaleContext);

  const data = useStaticQuery<BioData>(graphql`
    query BioDataQuery {
        allContentfulTextSection(
          filter: {
            heading: {regex: "/bio/i"}
          }) {
          nodes {
            heading
            body {
              raw
            }
            node_locale
          }
        }
      }
    `)

  const { heading, body } = data.allContentfulTextSection.nodes.find(node => node.node_locale === currentLocale);

  return <section className="bio">
    <h2>{heading}</h2>
    {renderRichText(body)}
  </section>
}

export default Bio;