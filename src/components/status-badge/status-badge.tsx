import { graphql, useStaticQuery } from "gatsby";
import React, { FC, useContext } from "react";
import { LocaleContext } from "../../layouts/page-layout";
import { Locale } from "../../utils/translate";
import "./status-badge.scss";

type StatusData = {
    allContentfulStatus: {
        nodes: {
            statusText: string;
            statusIcon: string;
            node_locale: Locale;
        }[]
    }
}

const defaultStatus: {
    statusText: string;
    statusIcon: string;
} = {
    statusIcon: '🤷‍♂️',
    statusText: 'Status not found'
}

type StatusBadgeProps = { style: Record<string, any> }

const StatusBadge = ({ style }: StatusBadgeProps) => {
    const currentLocale = useContext(LocaleContext);
    const data = useStaticQuery<StatusData>(graphql`
    query StatusQuery {
        allContentfulStatus {
            nodes {
              statusText
              statusIcon
              node_locale
            }
          }
      }`)

    const { statusText, statusIcon } = data.allContentfulStatus.nodes.find(node => node.node_locale === currentLocale) ?? defaultStatus;
    return (
        <p style={style} className="status-badge"><span>{statusIcon}</span> {statusText}</p>
    )
}

export default StatusBadge;