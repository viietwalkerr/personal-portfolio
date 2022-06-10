import React, { useContext, createContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Wordle from './pages/Wordle/Wordle';
import { boardDefault, generateWordSet } from './Words';
import About from './pages/About/About';


export const AppContext: any = createContext({board: boardDefault});

function App() {

  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});
  const [wordSet, setWordSet] = useState<any>(new Set());
  const [correctWord, setCorrectWord] = useState<any>("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState<any>({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    })
  }, [])

  const onSelectLetter = (keyVal: string) => {
    if (currAttempt.letterPos > 4) return;
      const currBoard = [...board];
      currBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
      setBoard(currBoard);
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1 })
  }

  const onDelete = () => {
    const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
      setBoard(newBoard);
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1});
  }

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({
        attempt: currAttempt.attempt + 1,
        letterPos: 0
      });
    } else {
      alert("Word not found!");
    }

    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessWord: true});
      return;
    }

    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }

  }
  return (
    <div className="App">

      {/* <header className="App-header">
      </header> */}
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          setDisabledLetters,
          disabledLetters,
          gameOver,
          correctWord,
        }}
      >
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/wordle' element={<Wordle />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
