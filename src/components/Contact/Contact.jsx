import Loader from 'react-loaders'
import './contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useRef, useState } from 'react'

import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  // Animated Letters
  useEffect(() => {
    const letterMouseMovement = () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }
    return letterMouseMovement()
  }, [])

  // SubmitForm sending Email
  const sendEmail = async (e) => {
    e.preventDefault()

    try {
      await emailjs.sendForm(
        'service_ti8mvdo', // service ID
        'template_mjdwt5g', // template ID
        refForm.current,
        'WXBFbAxr_Eyb2T4QL' // Public_KEY
      )
      alert('Message successfully sent!')
      window.location.reload(false)
    } catch (error) {
      alert('Failed to send the message, please try again')
    }
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in companies that can give me the opportunity to
            improve my skills. However, if you have any other requests or
            questions, do not hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
