import React, { FC, useEffect, useState } from "react";
import "./page-layout.scss";

interface PageLayoutProps {
    title: string;
}

const PageLayout: FC<PageLayoutProps> = ({ children, title }) => {
    const [darkThemeActive, setDarkThemeActive] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        setDarkThemeActive(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }, []);



    return <div className={`page ${darkThemeActive ? 'dark' : ''}`}>
        <title>{`${title} | Luke Codewalker`}</title>
        <label className="theme-toggle" htmlFor="dark-theme" title={`Switch to ${darkThemeActive ? 'light' : 'dark'} theme`}>{darkThemeActive ? '🌞' : '🌛'}
            <input type="checkbox" name="dark-theme" id="dark-theme" checked={darkThemeActive} onChange={() => setDarkThemeActive(!darkThemeActive)} />
        </label>
        {children}
    </div>
}

export default PageLayout;