import React, { createContext, FC, useEffect, useState } from "react";
import ThemeToggle from "../components/theme-toggle/theme-toggle";
import "./page-layout.scss";

interface PageLayoutProps {
    title: string;
}

enum Settings {
    DARK_THEME_ON = 'darkThemeOn',
    LOCALE = 'locale',
}

export type Locale = 'de-DE' | 'en-US';

const defaultLocale: Locale = 'de-DE';
export const LocaleContext = createContext<Locale>(defaultLocale);

const PageLayout: FC<PageLayoutProps> = ({ children, title }) => {
    const [darkThemeActive, setDarkThemeActive] = useState<boolean>(true);
    const [locale, setLocale] = useState<Locale>(defaultLocale);

    useEffect(() => {
        let initialTheme = false;
        if (typeof window !== 'undefined') {
            const savedThemePreference = JSON.parse(window.localStorage.getItem(Settings.DARK_THEME_ON));
            if (savedThemePreference !== null) {
                initialTheme = savedThemePreference;
            } else {
                initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            }
        };
        setDarkThemeActive(initialTheme);
    }, []);

    const toggleThemePreference = () => {
        setDarkThemeActive(!darkThemeActive);

        if (typeof window !== 'undefined') {
            window.localStorage.setItem(Settings.DARK_THEME_ON, JSON.stringify(!darkThemeActive));
        }
    }

    const changeLocale = e => {
        const newLocale: Locale = e.target.value;
        setLocale(newLocale);
    }

    return (
        <LocaleContext.Provider value={locale}>
            <div className={`page ${darkThemeActive ? 'dark' : ''}`}>
                <title>{`${title} | Luke Codewalker`}</title>
                <header>
                    <select className="locale-select" name="locale" id="locale" value={locale} onChange={changeLocale} >
                        <option value="de-DE">Deutsch</option>
                        <option value="en-US">English</option>
                    </select>

                    <ThemeToggle darkThemeActive={darkThemeActive} onThemePreferenceToggled={toggleThemePreference}></ThemeToggle>
                </header>
                {children}
            </div>
        </LocaleContext.Provider>
    )
}

export default PageLayout;