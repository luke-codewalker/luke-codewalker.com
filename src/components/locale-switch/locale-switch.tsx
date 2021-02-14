import React, { FC } from "react";
import { Locale, TranslationKeys, translations } from "../../utils/translate";
import "./locale-switch.scss";

export interface LocaleSwitchProps {
    locale: Locale;
    onLocaleChange: (locale: Locale) => void
}

const LocaleSwitch: FC<LocaleSwitchProps> = ({ locale, onLocaleChange }) => {
    const localeToSwitchTo: Locale = locale === 'de-DE' ? 'en-US' : 'de-DE';
    const localeLabel = locale === 'de-DE' ? ' English?' : 'Deutsch?';
    return (
        <button className="locale-switch" title={translations[TranslationKeys.LocaleSwitch][localeToSwitchTo]} onClick={() => onLocaleChange(localeToSwitchTo)}>
            {
                localeLabel
            }
        </button>

    )
};

export default LocaleSwitch;