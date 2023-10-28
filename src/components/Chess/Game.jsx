import './game.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

function Game() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const letterMouseMovement = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(letterMouseMovement)
    }
  })

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
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Game
