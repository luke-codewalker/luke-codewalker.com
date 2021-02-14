import React, { FC } from "react";
import StatusBadge from "../status-badge/status-badge";
import "./profile-picture.scss";

const ProfilePicture: FC = () => {
    return (
        <div className="profile-picture-wrapper">
            <picture className="profile-picture">
                <source media="(min-width: 720px)" srcSet="images/profile_l.JPG" />
                <source media="(min-width: 420px)" srcSet="images/profile_m.JPG" />
                <img src="images/profile_s.JPG" alt="Profile Picture of Luke Codewalker" />
            </picture>
            <StatusBadge></StatusBadge>
        </div>
    )
}

export default ProfilePicture;