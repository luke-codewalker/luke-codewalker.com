import React, { FC, useContext } from "react";
import { LocaleContext } from "../../layouts/page-layout";
import { TranslationKeys, translations } from "../../utils/translate";
import "./theme-toggle.scss";

export interface ThemeToggleProps {
    darkThemeActive: boolean | undefined;
    onThemePreferenceToggled: () => void;
}

const ThemeToggle = ({ darkThemeActive, onThemePreferenceToggled }: ThemeToggleProps) => {
    const currentLocale = useContext(LocaleContext);

    if (typeof darkThemeActive === 'undefined') {
        // use skeleton until re-hydration finishes
        return (
            <div className="theme-toggle"></div>
        )
    }
    return (
        <label className={`theme-toggle ${darkThemeActive ? 'theme-toggle--dark' : ''}`} htmlFor="dark-theme" title={translations[darkThemeActive ? TranslationKeys.LightThemeSwitch : TranslationKeys.DarkThemeSwitch][currentLocale]}>{darkThemeActive ? '🌞' : '🌛'}
            <input type="checkbox" name="dark-theme" id="dark-theme" checked={darkThemeActive} onChange={onThemePreferenceToggled} />
        </label>
    )
}

export default ThemeToggle;