import React, { createContext, ReactNode, StrictMode, useEffect, useState } from "react";
import LocaleSwitch from "../components/locale-switch/locale-switch";
import ThemeToggle from "../components/theme-toggle/theme-toggle";
import { Locale } from "../utils/translate";
import "./page-layout.scss";
import { isDarkThemeActive, Settings } from '../utils/is-dark-theme-active';
import { COLORS } from '../styles/colors';

interface PageLayoutProps {
    children: ReactNode
}

const defaultLocale: Locale = 'de-DE';
export const LocaleContext = createContext<Locale>(defaultLocale);

const PageLayout = ({ children }: PageLayoutProps) => {
    const [darkThemeActive, setDarkThemeActive] = useState<boolean | undefined>(undefined);
    const [locale, setLocale] = useState<Locale>(defaultLocale);

    useEffect(() => {
        // only change after rehydration to avoid errors
        setDarkThemeActive(isDarkThemeActive())
    }, [])

    const toggleThemePreference = () => {
        setDarkThemeActive(!darkThemeActive);

        if (typeof window !== 'undefined') {
            window.localStorage.setItem(Settings.DARK_THEME_ON, JSON.stringify(!darkThemeActive));
        }
    }

    const changeLocale = (newLocale: Locale) => {
        setLocale(newLocale);
    }

    useEffect(() => {
        const rootStyle = document.documentElement.style;
        Object.keys(COLORS.light).forEach(key => {
            rootStyle.setProperty(`--${key}-color`, darkThemeActive ? COLORS.dark[key] : COLORS.light[key])
        })
    }, [darkThemeActive])

    return (
        <StrictMode>
            <LocaleContext.Provider value={locale}>
                <div className="page">
                    <header>
                        <LocaleSwitch locale={locale} onLocaleChange={changeLocale}></LocaleSwitch>
                        <ThemeToggle darkThemeActive={darkThemeActive} onThemePreferenceToggled={toggleThemePreference}></ThemeToggle>
                    </header>
                    {children}
                </div>
            </LocaleContext.Provider>
        </StrictMode>
    )
}

export default PageLayout;