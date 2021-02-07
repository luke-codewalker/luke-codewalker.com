import React, { FC } from "react";

interface PageLayoutProps {
    title: string;
}

const PageLayout: FC<PageLayoutProps> = ({ children, title }) => (
    <div className="page">
        <title>{`${title} | Luke Codewalker`}</title>
        {children}
    </div>
)

export default PageLayout;