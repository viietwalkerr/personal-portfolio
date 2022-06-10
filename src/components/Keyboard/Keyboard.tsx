import React, { useCallback, useContext, useEffect } from "react";
import "./Keyboard.scss";
import Key from "../Key/Key";
import { AppContext } from "../../App";

const Keyboard: React.FC = () => {

    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    let row = 0;
    let column = 0;

    const {
        board, 
        onEnter,
        onDelete,
        onSelectLetter,
        currAttempt,
        disabledLetters,
    } = useContext(AppContext);

    const handleKeyboard = useCallback((event: KeyboardEvent) => {
        if (event.key === "Enter") {
            onEnter();
        } else if (event.key === "Backspace") {
            onDelete();
        } else {
            keys1.forEach((key) => {
                if (event.key.toUpperCase() === key) {
                    onSelectLetter(key);
                }
            });
            keys2.forEach((key) => {
                if (event.key.toUpperCase() === key) {
                    onSelectLetter(key);
                }
            });
            keys3.forEach((key) => {
                if (event.key.toUpperCase() === key) {
                    onSelectLetter(key);
                }
            })
        }
    }, [currAttempt]);


    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);

        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        }
    }, [handleKeyboard])

    return (
        <div className="keyboard" onKeyDown={() =>handleKeyboard}>
            <div className="line1">
                {keys1.map((key) => {
                    return <Key keyVal={key} disabled={disabledLetters.includes(key)}/>
                })}
            </div>
            <div className="line2">
                {keys2.map((key) => {
                    return <Key keyVal={key} disabled={disabledLetters.includes(key)}/>
                })}
            </div>
            <div className="line3">
                <Key keyVal={"ENTER"} largeButton/>
                {keys3.map((key) => {
                    return <Key keyVal={key}/>
                })}
                <Key keyVal={"DELETE"} largeButton/>
            </div>



        </div>
    )
}

export default Keyboard;