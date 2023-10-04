import Loader from 'react-loaders'
import './contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone"></div>
        <h1>
          
        <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
        </h1>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
