import { graphql, useStaticQuery } from "gatsby";
import React, { FC, useContext } from "react"
import { ContentfulRichTextGatsbyReference, renderRichText, RenderRichTextData } from "gatsby-source-contentful/rich-text";
import { INLINES } from '@contentful/rich-text-types';
import "./contact-list.scss";
import { LocaleContext } from "../../layouts/page-layout";
import { Locale } from "../../utils/translate";

type IconLinkData = {
  allContentfulIconLink: {
    nodes: {
      iconName: string;
      linkText: RenderRichTextData<ContentfulRichTextGatsbyReference>;
      order: number;
      node_locale: Locale;
    }[]
  }
}

const ContactLinks: FC = () => {
  const currentLocale = useContext(LocaleContext);

  const data = useStaticQuery<IconLinkData>(graphql`
    query IconLinkQuery {
      allContentfulIconLink {
        nodes {
          order
          iconName
          linkText {
            raw
          }
          node_locale
        }
      }
    }
    `)

  const links = data.allContentfulIconLink.nodes.filter(node => node.node_locale === currentLocale);

  return (
    <ul className="contact-list">
      {
        links
          .sort((a, b) => a.order - b.order)
          .map(
            (link, i) =>
              <li key={i}><i className={`icon-${link.iconName}`}></i>{renderRichText(link.linkText, {
                renderNode: {
                  [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} target="_blank">{children}</a>
                }
              })}</li>
          )
      }
    </ul>
  )
}

export default ContactLinks;