import './game.scss'

import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import { Chessboard } from 'react-chessboard'
import { Chess } from 'chess.js'
import { calculateBestMove, initGame } from 'chess-ai'

function Game() {
  

  const [letterClass, setLetterClass] = useState('text-animate')
  // new Game
  const chess = new Chess()

  const [game, setGame] = useState(chess)

  // TODO: when the game is over alert the user
  useEffect(() => {
    initGame(game, 1) // From 0 - 2 ai-level
  })

  //Let's perform a function on the game state

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g }
      modify(update)
      return update
    })
  }
  //Movement of computer
  function makeRandomMove() {
    const possibleMove = game.moves()

    //exit if the game is over

    if (
      game.game_over() ||
      game.in_draw() ||
      possibleMove.length === 0 ||
      game.in_checkmate()
    ) {
      alert('Game is over')
    }
 
    //select ai move
    const aiMove = calculateBestMove()

    //play random move
    safeGameMutate((game) => {
      game.move(aiMove)
    })
  }

  //Perform an action when a piece is droped by a user

  function onDrop(source, target) {
    let move = null
    safeGameMutate((game) => {
      move = game.move({
        from: source,
        to: target,
        promotion: 'q',
      })
    })

    if (game.in_check()) {
      console.log('inCHECK, onDropFunction') // TODO: function for change the color of the king
    }
    //illegal move
    if (move == null) return false
    //valid move
    setTimeout(makeRandomMove, 200)
    return true
  }

  return (

    // className={`${letterClass} _${i + idx}`}
    <>
      <div className="container chess-page">
        <div className="board">
          <div className="bordered">
            <Chessboard
              position={game.fen()}
              onPieceDrop={onDrop}
              boardWidth={800}
            />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Game
