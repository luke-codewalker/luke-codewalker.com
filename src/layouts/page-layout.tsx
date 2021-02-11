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
        <div className="theme-toggle">
            <label htmlFor="dark-theme">{darkThemeActive ? 'Dark' : 'Light'} Theme
                <input type="checkbox" name="dark-theme" id="dark-theme" checked={darkThemeActive} onChange={() => setDarkThemeActive(!darkThemeActive)} />
            </label>
        </div>
        {children}
    </div>
}

export default PageLayout;