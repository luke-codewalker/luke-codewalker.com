import React, { FC, useContext } from "react";
import { LocaleContext } from "../../layouts/page-layout";
import { TranslationKeys, translations } from "../../utils/translate";
import "./theme-toggle.scss";

export interface ThemeToggleProps {
    darkThemeActive: boolean;
    onThemePreferenceToggled: () => void;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ darkThemeActive, onThemePreferenceToggled }) => {
    const currentLocale = useContext(LocaleContext);
    return (
        <label className={`theme-toggle ${darkThemeActive ? 'theme-toggle--dark' : ''}`} htmlFor="dark-theme" title={translations[darkThemeActive ? TranslationKeys.LighThemeSwitch : TranslationKeys.DarkThemeSwitch][currentLocale]}>{darkThemeActive ? '🌞' : '🌛'}
            <input type="checkbox" name="dark-theme" id="dark-theme" checked={darkThemeActive} onChange={onThemePreferenceToggled} />
        </label>
    )
}

export default ThemeToggle;