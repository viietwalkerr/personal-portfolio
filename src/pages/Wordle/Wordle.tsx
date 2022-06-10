import React, { useContext } from "react";
import "./Wordle.scss";
import Board from "../../components/Board/Board";
import Keyboard from "../../components/Keyboard/Keyboard";
import Gameover from "../../components/Gameover/Gameover";
import { AppContext } from "../../App";

const Wordle:React.FC = () => {

    const { gameOver } = useContext(AppContext);

    return (
        <div className="wordle">
            <div>
                <h1>Wordle Clone</h1>
            </div>
            <Board />
            {gameOver.gameOver ? <Gameover /> : <Keyboard />}

        </div>
    )
}

export default Wordle;