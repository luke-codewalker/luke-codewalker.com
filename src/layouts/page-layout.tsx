import React, { createContext, FC, useEffect, useState } from "react";
import "./page-layout.scss";

interface PageLayoutProps {
    title: string;
}

enum Settings {
    DARK_THEME_ON = 'darkThemeOn',
    LOCALE = 'locale',
}

export type Locale = 'de-DE' | 'en-US';

const initialLocale: Locale = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem(Settings.LOCALE)) : 'en-US';
export const LocaleContext = createContext<Locale>(initialLocale);

let initialTheme = false;
if (typeof window !== 'undefined') {
    const savedThemePreference = JSON.parse(window.localStorage.getItem(Settings.DARK_THEME_ON));
    if (savedThemePreference !== null) {
        initialTheme = savedThemePreference;
    } else {
        initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
};

const PageLayout: FC<PageLayoutProps> = ({ children, title }) => {
    const [darkThemeActive, setDarkThemeActive] = useState<boolean>(initialTheme);
    const [locale, setLocale] = useState<Locale>(initialLocale);

    const toggleThemePreference = () => {
        setDarkThemeActive(!darkThemeActive);

        if (typeof window !== 'undefined') {
            window.localStorage.setItem(Settings.DARK_THEME_ON, JSON.stringify(!darkThemeActive));
        }
    }

    const changeLocale = e => {
        const newLocale = e.target.value;
        setLocale(newLocale);

        if (typeof window !== 'undefined') {
            window.localStorage.setItem(Settings.LOCALE, JSON.stringify(newLocale));
        }
    }

    return <div className={`page ${darkThemeActive ? 'dark' : ''}`}>
        <LocaleContext.Provider value={locale}>
            <title>{`${title} | Luke Codewalker`}</title>
            <header>
                <select className="locale-select" name="locale" id="locale" value={locale} onChange={changeLocale} >
                    <option value="en-US">English</option>
                    <option value="de-DE">Deutsch</option>
                </select>

                <label className="theme-toggle" htmlFor="dark-theme" title={`Switch to ${darkThemeActive ? 'light' : 'dark'} theme`}>{darkThemeActive ? '🌞' : '🌛'}
                    <input type="checkbox" name="dark-theme" id="dark-theme" checked={darkThemeActive} onChange={toggleThemePreference} />
                </label>
            </header>
            {children}
        </LocaleContext.Provider>
    </div>
}

export default PageLayout;