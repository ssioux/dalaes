import './game.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import {Chessboard} from 'react-chessboard'
import {Chess} from 'chess.js'
import { calculateBestMove, initGame } from "chess-ai";

function Game() {

  const [letterClass, setLetterClass] = useState('text-animate')
  


  const [game, setGame] = useState(new Chess());

  useEffect(() => {

    initGame(game, 1);
    const letterMouseMovement = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(letterMouseMovement)
    }
  })

  //Let's perform a function on the game state 
   
  function safeGameMutate(modify){
    setGame((g)=>{
      const update = {...g}
      modify(update)
      return update;
    })
  }
  //Movement of computer
  function makeRandomMove(){
    const possibleMove = game.moves();
  
    //exit if the game is over 
  
    if(game.game_over() || game.in_draw() || possibleMove.length === 0) return;
    //select random move
  
    // const randomIndex = Math.floor(Math.random() * possibleMove.length);
   
   //play random move 
   safeGameMutate((game)=>{
    game.move(calculateBestMove());
   })
  }
  
  //Perform an action when a piece is droped by a user
   
  function onDrop(source,target){
    let move = null;
    safeGameMutate((game)=>{
      move = game.move({
        from:source,
        to: target,
        promotion:'q'
      })
  })
   //illegal move 
   if(move== null) return false
   //valid move 
   setTimeout(makeRandomMove, 200);
   return true;
  }



  return (
    <>
      <div className="container chess-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Chess'.split('')}
            idx={15}
          />
        </h1>

        <div className="board">
      <Chessboard 
      position={game.fen()}
      onPieceDrop ={onDrop}
      />
    </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Game
