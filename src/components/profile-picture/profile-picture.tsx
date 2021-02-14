import React, { FC, useContext } from "react";
import { LocaleContext } from "../../layouts/page-layout";
import { TranslationKeys, translations } from "../../utils/translate";
import StatusBadge from "../status-badge/status-badge";
import "./profile-picture.scss";

const ProfilePicture: FC = () => {
    const currentLocale = useContext(LocaleContext);
    return (
        <div className="profile-picture-wrapper">
            <picture className="profile-picture">
                <source media="(min-width: 720px)" srcSet="images/profile_l.JPG" />
                <source media="(min-width: 420px)" srcSet="images/profile_m.JPG" />
                <img src="images/profile_s.JPG" alt={translations[TranslationKeys.ProfilePicture][currentLocale]} title={translations[TranslationKeys.ProfilePicture][currentLocale]} />
            </picture>
            <StatusBadge></StatusBadge>
        </div>
    )
}

export default ProfilePicture;