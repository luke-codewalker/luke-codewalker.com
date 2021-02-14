import React, { FC } from "react";
import { Locale } from "../../layouts/page-layout";
import "./locale-switch.scss";

export interface LocaleSwitchProps {
    locale: Locale;
    onLocaleChange: (locale: Locale) => void
}

const LocaleSwitch: FC<LocaleSwitchProps> = ({ locale, onLocaleChange }) => (
    <select className="locale-select" name="locale" id="locale" value={locale} onChange={e => onLocaleChange(e.target.value as Locale)} >
        <option value="de-DE">Deutsch</option>
        <option value="en-US">English</option>
    </select>
);

export default LocaleSwitch;