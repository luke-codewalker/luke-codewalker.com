import React, { FC, useEffect, useState } from "react";
import "./page-layout.scss";

interface PageLayoutProps {
    title: string;
}

enum Settings {
    DARK_THEME_ON = 'darkThemeOn'
}

const PageLayout: FC<PageLayoutProps> = ({ children, title }) => {
    const [darkThemeActive, setDarkThemeActive] = useState<boolean>(true);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        const savedPreference = JSON.parse(window.localStorage.getItem(Settings.DARK_THEME_ON));
        setDarkThemeActive(savedPreference ?? window.matchMedia('(prefers-color-scheme: dark)').matches);
    }, []);

    const toggleThemePreference = () => {
        setDarkThemeActive(!darkThemeActive);

        if (typeof window !== 'undefined') {
            window.localStorage.setItem(Settings.DARK_THEME_ON, JSON.stringify(!darkThemeActive));
        }
    }



    return <div className={`page ${darkThemeActive ? 'dark' : ''}`}>
        <title>{`${title} | Luke Codewalker`}</title>
        <label className="theme-toggle" htmlFor="dark-theme" title={`Switch to ${darkThemeActive ? 'light' : 'dark'} theme`}>{darkThemeActive ? '🌞' : '🌛'}
            <input type="checkbox" name="dark-theme" id="dark-theme" checked={darkThemeActive} onChange={toggleThemePreference} />
        </label>
        {children}
    </div>
}

export default PageLayout;