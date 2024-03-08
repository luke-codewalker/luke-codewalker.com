import React from "react";
import { formatTitle } from '../utils/format-title'

type HeadProps = {
    title: string
}

export const CustomHead = ({ title }: HeadProps) => <>
    <title>{formatTitle(title)}</title>
</>