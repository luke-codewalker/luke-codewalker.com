import React, { FC } from "react";
import { Locale } from "../../layouts/page-layout";
import "./locale-switch.scss";

export interface LocaleSwitchProps {
    locale: Locale;
    onLocaleChange: (locale: Locale) => void
}

const LocaleSwitch: FC<LocaleSwitchProps> = ({ locale, onLocaleChange }) => {
    const localeToSwitchTo: Locale = locale === 'de-DE' ? 'en-US' : 'de-DE';
    const localeLabel = locale === 'de-DE' ? ' English?' : 'Deutsch?';
    return (
        <button className="locale-switch" onClick={() => onLocaleChange(localeToSwitchTo)}>
            {
                localeLabel
            }
        </button>

    )
};

export default LocaleSwitch;