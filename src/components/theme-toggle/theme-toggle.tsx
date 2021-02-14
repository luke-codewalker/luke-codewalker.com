import React, { FC } from "react";
import "./theme-toggle.scss";

export interface ThemeToggleProps {
    darkThemeActive: boolean;
    onThemePreferenceToggled: () => void;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ darkThemeActive, onThemePreferenceToggled }) => (
    <label className={`theme-toggle ${darkThemeActive ? 'theme-toggle--dark' : ''}`} htmlFor="dark-theme" title={`Switch to ${darkThemeActive ? 'light' : 'dark'} theme`}>{darkThemeActive ? '🌞' : '🌛'}
        <input type="checkbox" name="dark-theme" id="dark-theme" checked={darkThemeActive} onChange={onThemePreferenceToggled} />
    </label>
)

export default ThemeToggle;