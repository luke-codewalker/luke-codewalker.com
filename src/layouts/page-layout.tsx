import React, { createContext, FC, useEffect, useState } from "react";
import "./page-layout.scss";

interface PageLayoutProps {
    title: string;
}

enum Settings {
    DARK_THEME_ON = 'darkThemeOn'
}

export type Locale = 'de-DE' | 'en-US';

export const LocaleContext = createContext<Locale>('de-DE');

const PageLayout: FC<PageLayoutProps> = ({ children, title }) => {
    const [darkThemeActive, setDarkThemeActive] = useState<boolean>(true);
    const [locale, setLocale] = useState<Locale>('de-DE');

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
        <LocaleContext.Provider value={locale}>
            <title>{`${title} | Luke Codewalker`}</title>
            <button onClick={() => setLocale(locale === 'de-DE' ? 'en-US' : 'de-DE')}>toggle locale</button>

            <label className="theme-toggle" htmlFor="dark-theme" title={`Switch to ${darkThemeActive ? 'light' : 'dark'} theme`}>{darkThemeActive ? '🌞' : '🌛'}
                <input type="checkbox" name="dark-theme" id="dark-theme" checked={darkThemeActive} onChange={toggleThemePreference} />
            </label>
            {children}
        </LocaleContext.Provider>
    </div>
}

export default PageLayout;