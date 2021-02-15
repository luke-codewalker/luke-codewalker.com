import React, { createContext, FC, useEffect, useState } from "react";
import LocaleSwitch from "../components/locale-switch/locale-switch";
import ThemeToggle from "../components/theme-toggle/theme-toggle";
import { Locale } from "../utils/translate";
import "./page-layout.scss";

interface PageLayoutProps {
    title: string;
}

enum Settings {
    DARK_THEME_ON = 'darkThemeOn',
}

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

    const changeLocale = (newLocale: Locale) => {
        setLocale(newLocale);
    }

    // nee a reference to body tag for safe area styling and
    // haven't found a better way to access it with e.g. a ref in Gatsby context
    if (typeof document !== 'undefined') {
        if (darkThemeActive) {
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
        }
    }

    return (
        <LocaleContext.Provider value={locale}>
            <div className="page">
                <title>{`${title} | Luke Codewalker`}</title>
                <header>
                    <LocaleSwitch locale={locale} onLocaleChange={changeLocale}></LocaleSwitch>
                    <ThemeToggle darkThemeActive={darkThemeActive} onThemePreferenceToggled={toggleThemePreference}></ThemeToggle>
                </header>
                {children}
            </div>
        </LocaleContext.Provider>
    )
}

export default PageLayout;