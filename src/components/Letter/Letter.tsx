import React, { useContext, useEffect } from "react";
import "./Letter.scss";
import { AppContext } from "../../App";

interface LetterProps {
    letterPos: any;
    attemptVal: any;
}

const Letter: React.FC<LetterProps> = ({
    letterPos,
    attemptVal,
}) => {

    const { board, correctWord, currAttempt, setDisabledLetters } = useContext(AppContext)
    const letter = board[attemptVal][letterPos];

    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

    const letterModifier = 
        currAttempt.attempt > attemptVal &&
            (correct ? "letter--correct"
            : almost ? "letter--almost"
            : "letter--error")
    
    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            console.log(letter);
            setDisabledLetters((prev: any) => [...prev, letter]);
        }
    }, [currAttempt.attempt])

    return (
        <div className={`letter ${letterModifier}`}>
            {letter}
        </div>
    )
}

export default Letter;