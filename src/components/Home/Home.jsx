import './home.scss'
import LogoTitle from '../../assets/images/Logo-d.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Logo from './Logo/Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const letterMouseMovement = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(letterMouseMovement)
    }
  })

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>

          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <img src={LogoTitle} alt="developer" />

          {/* Animation for 'sioux' */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'avid Lázaro'.split('')}
            idx={15}
          />
          <br />
          {/* Animation for 'web developer.' */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Web developer.'.split('')}
            idx={22}
          />
        </h1>
        <h2>David Lázaro / Frontend Developer </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
