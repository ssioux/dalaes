import Loader from 'react-loaders'
import './portfolio.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])
  console.log("🚀 ~ Portfolio ~ ", portfolio)
  

  useEffect(() => {
    const letterMouseMovement = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    getPortfolio()
    return () => {
      clearTimeout(letterMouseMovement)
    }
  })
 
  const getPortfolio = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'portfolio'))
     
      setPortfolio(querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
      
    } catch (error) {
      console.log(error)
    }
  }

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button
                  className="btn"
                  onClick={() => window.open(port.webUrl)}
                >
                  View
                </button>

                <button
                  className="btn"
                  onClick={() => window.open(port.codeUrl)}
                >
                  Code
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Portfolio
