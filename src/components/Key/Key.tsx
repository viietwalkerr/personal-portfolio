import React, { useContext } from "react";
import "./Key.scss";
import { AppContext } from "../../App";

interface KeyProps {
    keyVal: string;
    largeButton?: boolean;
    disabled?: boolean;
}

const Key: React.FC<KeyProps> = ({
    keyVal,
    largeButton = false,
    disabled = false,
}) => {
    const {
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        onSelectLetter,
        onDelete,
        onEnter 
    } = useContext(AppContext);



    const keyModifier = largeButton ? "key--large" : disabled && "key--disabled";

    const selectLetter = () => {
        if (keyVal === "ENTER") {
            onEnter();
        } else if (keyVal === "DELETE") {
            onDelete();

        } else {       
            onSelectLetter(keyVal);
        }
    }

    return (
        <div className={`key ${keyModifier}`} onClick={selectLetter}>
            {keyVal}
        </div>
    )
}

export default Key;