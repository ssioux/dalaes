import './game.scss'

import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import { Chessboard } from 'react-chessboard'
import { Chess } from 'chess.js'
import { calculateBestMove, initGame } from 'chess-ai'
import { faL } from '@fortawesome/free-solid-svg-icons'

function Game() {
  // inCheck Alert
  const [inCheckAlert, setInCheckAlert] = useState('bordered')
  // new Game
  const chess = new Chess()
  const [game, setGame] = useState(chess)

  // TODO: Pieces in danger?

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

    // exit if the game is over

    if (
      game.game_over() ||
      game.in_draw() ||
      possibleMove.length === 0 ||
      game.in_checkmate()
    ) {
      alert('Check Mate, You Win')
      window.location.reload(false)
    }

    //select ai move
    const aiMove = calculateBestMove()

    //play random move
    safeGameMutate((game) => {
      game.move(aiMove)
    })
    setInCheckAlert('bordered')
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

    // 1. illegal move
    if (move == null) return false
    // 2. move for ai
    setTimeout(makeRandomMove, 200)

    // 3. after the ai-movement, the rest of the checks
    setTimeout(() => {
      game.in_check() && setInCheckAlert('onCheck')

      const possibleMove = game.moves()
      // 4. Draw
      if (game.in_draw() || possibleMove.length === 0) {
        alert('Draw')
      }
      // 5. Check Mate
      if (game.in_checkmate()) {
        alert('Check Mate, You Lose')
        window.location.reload(false)
      }
      // 6. Game Over
      if (game.game_over()) {
        alert('Game Over')
        window.location.reload(false)
      }
    }, 500)

    return true
  }

  return (
    <>
      <div className="container chess-page">
        <div className="board">
          <div className={`${inCheckAlert}`}>
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
