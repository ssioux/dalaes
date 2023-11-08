import './home.scss'
import LogoTitle from '../../assets/images/David-rem.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Home = () => {
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
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Hi,'.split('')}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={`i'm`.split('')}
            idx={15}
          />
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
        <h2>Frontend Developer </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
  
     
    </div>
  )
}

export default Home
