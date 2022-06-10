import React, { useContext } from "react";
import { AppContext } from "../../App";
import "./Gameover.scss";

const Gameover: React.FC = () => {

    const { gameOver, setGameOver, correctWord, currAttempt } = useContext(AppContext);

    return (
        <div className="gameover">
            <h3>
                {gameOver.guessedWord ? "You Correctly guessed" : "You Failed"}
            </h3>
            <h1>Correct: {correctWord}</h1>
            {gameOver.guessedWord && (<h3> You guessed in {currAttempt.attempt} attempts!</h3>)}
        </div>
    )
}

export default Gameover;