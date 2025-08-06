import React, { useState } from 'react'
import BoardRow from './BoardRow'
import "../App.css"

function Board() {
  const [state, setState] = useState(Array(9).fill(null)); 
  const [isXTurn, setIsXTurn] = useState(true);

  const isWinner = ()=>{
         const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let logic  of winnerLogic){
        const [a,b,c] = logic;
        if(state[a]!==null && state[a]===state[b] && state[b]===state[c]){
            return state[a];
        }
       
        
    }
     return false;
  }
  const winner = isWinner();

  const handleClick = (index) => {
    if (state[index]) return; 
    const copyState = [...state];
    copyState[index] = isXTurn ? 'X' : 'O';
    setState(copyState);
    setIsXTurn(!isXTurn); 
  };

  const playHandler = ()=>{
    setState(Array(9).fill(null));
  }

 return (
  <div className='board'>
    {winner ? (
      <div className='result'>
        <h2>{winner} Have won the game !!</h2>
        <button onClick={playHandler}>Play Again</button>
      </div>
    ) : (
      <>
        <h1 className='title'>Tic Tac Toe</h1>
        <BoardRow startIndex={0} state={state} handleClick={handleClick} />
        <BoardRow startIndex={3} state={state} handleClick={handleClick} />
        <BoardRow startIndex={6} state={state} handleClick={handleClick} />
      </>
    )}
  </div>
);

}

export default Board;
