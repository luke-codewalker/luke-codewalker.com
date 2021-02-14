export type Locale = 'de-DE' | 'en-US';

export enum TranslationKeys {
    LighThemeSwitch,
    DarkThemeSwitch,
    LocaleSwitch,
    ProfilePicture
}

export type Translations = {
    [key in TranslationKeys]: {
        [locale in Locale]: string;
    }
}

export const translations: Translations = {
    [TranslationKeys.LighThemeSwitch]: {
        'de-DE': 'Helles Theme einstellen',
        'en-US': 'Switch to light theme'
    },
    [TranslationKeys.DarkThemeSwitch]: {
        'de-DE': 'Dunkles Theme einstellen',
        'en-US': 'Switch to dark theme'
    },
    [TranslationKeys.LocaleSwitch]: {
        'en-US': 'Display site in English',
        'de-DE': 'Seite auf Deutsch anzeigen'
    },
    [TranslationKeys.ProfilePicture]: {
        'de-DE': 'Profilbild von Luke Codewalker: Schwarz-Weiß-Bild eines lachenden jungen Manns mit Locken.',
        'en-US': 'Profile picture of Luke Codewalker: black and white photo of a smiling young man with curls.'
    }
}