import Loader from 'react-loaders'
import './portfolio.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'

const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const letterMouseMovement = () => {
           setTimeout(()=> {
       setLetterClass('text-animate-hover')
     }, 3000)
    }
    return (
     letterMouseMovement()
        )
   }, [])
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">

          <AnimatedLetters 
          letterClass={letterClass}
          strArray={"Portfolio".split("")}
            idx={15}
          
          />
        </h1>
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default Portfolio
