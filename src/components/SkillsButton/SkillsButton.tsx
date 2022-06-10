import React, { ReactNode } from "react";
import "./SkillsButton.scss";
import * as faIcons from "react-icons/fa";

interface SkillsButtonProps {
    label?: string;
    icon: ReactNode;
};

const SkillsButton: React.FC<SkillsButtonProps> = ({
    label,
    icon
}) => {

    return (
        <div className="skillsbutton">
            <div className="icon">
                {icon}
            </div>
            <div className="label">
                {label}
            </div>

        </div>
    )
}

export default SkillsButton;