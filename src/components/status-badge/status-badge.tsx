import { graphql, useStaticQuery } from "gatsby";
import React, { FC, useContext } from "react";
import { Locale, LocaleContext } from "../../layouts/page-layout";
import "./status-badge.scss";

type StatusData = {
    allContentfulStatus: {
        nodes: {
            statusText: string;
            location: {
                lat: number;
                lon: number;
            },
            node_locale: Locale;
        }[]
    }
}

const StatusBadge: FC = () => {
    const currentLocale = useContext(LocaleContext);
    const data = useStaticQuery<StatusData>(graphql`
    query StatusQuery {
        allContentfulStatus {
            nodes {
              statusText
              location {
                lon
                lat
              }
              node_locale
            }
          }
      }`)

    const { statusText, location } = data.allContentfulStatus.nodes.find(node => node.node_locale === currentLocale);
    return (
        <span className="status-badge">{statusText}<a className="location" href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lon}`} target="_blank" rel="noreferrer, noopener"><i className="icon icon-location"></i></a></span>
    )
}

export default StatusBadge;