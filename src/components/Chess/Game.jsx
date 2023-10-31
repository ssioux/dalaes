import './game.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Chessboard } from 'react-chessboard'
import { Chess } from 'chess.js'
import { calculateBestMove, initGame } from 'chess-ai'
import { useMediaQuery } from 'react-responsive'

function Game() {
  
  // mQuery for chess
  const isPhone = useMediaQuery({
    query: '(max-width: 1200px)',
  })
  // ai-skill (0-2)
  const [aiSkill, setAiSkill] = useState(0)

  // inCheck Alert
  const [inCheckAlert, setInCheckAlert] = useState('bordered')
  // new Game
  const chess = new Chess()
  const [game, setGame] = useState(chess)
  console.log("second", game)

  useEffect(() => {
    initGame(game, aiSkill) // From 0 - 2 ai-level
  }, [game, aiSkill])

  // Dificulty
  const easy = () => {
    setAiSkill(0)
    game.reset()
  }

  const medium = () => {
    setAiSkill(1)
    game.reset()
  }

  const hard = () => {
    setAiSkill(2)
    game.reset()
  }
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
    // 1. Draw
    if (game.in_draw() || possibleMove.length === 0 || game.in_stalemate()) {
      alert('Draw')
    }
    // 2. Check Mate
    if (game.in_checkmate()) {
      alert('Check Mate')
    }
    // 3. Game Over
    if (game.game_over()) {
      alert('Game Over')
    }
    //select ai move
    const aiMove = calculateBestMove()

    //play random move
    safeGameMutate((game) => {
      game.move(aiMove)
    })

    // onCheck?
    game.in_check() ? setInCheckAlert('onCheck') : setInCheckAlert('bordered')

    // 1. Draw
    if (game.in_draw() || possibleMove.length === 0) {
      alert('Draw')
    }
    // 2. Check Mate
    if (game.in_checkmate()) {
      alert('Check Mate')
    }
    // 3. Game Over
    if (game.game_over()) {
      alert('Game Over')
      window.location.reload(false)
    }
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

    return true
  }

  return (
    <>
      <div className="container chess-page">
        <div className="board">
          <div className="btn-group">
            {isPhone ? <p>LvL</p> : <p>Difficulty:</p>}
            <button
              onClick={easy}
              className={isPhone ? 'chess-btn-phone' : 'chess-btn'}
            >
              Easy
            </button>
            <button
              onClick={medium}
              className={isPhone ? 'chess-btn-phone' : 'chess-btn'}
            >
              Medium
            </button>
            <button
              onClick={hard}
              className={isPhone ? 'chess-btn-phone' : 'chess-btn'}
            >
              Hard
            </button>
          </div>

          <div className={`${inCheckAlert}`}>
            <Chessboard
              customDropSquareStyle={{
                boxShadow: 'inset 0 0 1px 6px rgba(255, 215, 0, 0.73)',
              }}
              customBoardStyle={{
                borderRadius: '5px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5 ',
              }}
              customDarkSquareStyle={{ backgroundColor: '#104d6e' }}
              position={game.fen()}
              onPieceDrop={onDrop}
              boardWidth={isPhone ? 333 : 800}
              customArrowColor={'rgb(255,170,0)'}
            />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Game
