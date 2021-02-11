import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react"
import { ContentfulRichTextGatsbyReference, renderRichText, RenderRichTextData } from "gatsby-source-contentful/rich-text";
import "./contact-list.scss";

type IconLinkData = {
    allContentfulIconLink: {
        nodes: {
            iconName: string
            linkText: RenderRichTextData<ContentfulRichTextGatsbyReference>;
            order: number;
        }[]
    }
}

const ContactLinks: FC = () => {
    const data = useStaticQuery<IconLinkData>(graphql`
    query IconLinkQuery {
      allContentfulIconLink {
        nodes {
          order
          iconName
          linkText {
            raw
          }
        }
      }
    }
    `)

    const { nodes: links } = data.allContentfulIconLink;

    return (
        <ul className="contact-list">
            {
                links
                    .sort((a, b) => a.order - b.order)
                    .map(
                        (link, i) =>
                            <li key={i}><i className={`icon-${link.iconName}`}></i>{renderRichText(link.linkText)}</li>
                    )
            }
        </ul>
    )
}

export default ContactLinks;