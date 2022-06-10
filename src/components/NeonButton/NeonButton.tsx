import React, { ReactNode } from "react";
import "./NeonButton.scss";

interface NeonButtonProps {
    label: string;
    onClick: () => void;
};

const NeonButton: React.FC<NeonButtonProps> = ({
    label,
    onClick,
}) => {

    return (
        <div className="neonbutton" onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {label}
            {/* <span>
                {children}
            </span> */}
        </div>
    )
}

export default NeonButton;
