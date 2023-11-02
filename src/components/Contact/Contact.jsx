import Loader from 'react-loaders'
import './contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useRef, useState } from 'react'

import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  // Animated Letters
  useEffect(() => {
    const letterMouseMovement = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(letterMouseMovement)
    }
  })

  // SubmitForm sending Email
  // Email Library - https://www.emailjs.com/docs/examples/reactjs/
  const sendEmail = async (e) => {
    e.preventDefault()

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID, // service ID
        import.meta.env.VITE_TEMPLATE_ID, // template ID
        refForm.current,
        import.meta.env.VITE_PUBLIC_KEY, // Public_KEY
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
              strArray={'Contact me'.split('')}
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
        <div className="info-map">
          David Lázaro,
          <br />
          Spain,
          <br />
          Calle Vitoria 178, 09007 <br />
          Burgos <br />
          <span>dlazaro7@gmail.com</span>
        </div>
        <div className="map-wrap">
          {/* Map library - https://react-leaflet.js.org/ */}
          <MapContainer
            center={[42.35165648088065, -3.6716139533494894]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.35165648088065, -3.6716139533494894]}>
              <Popup>
                David Lázaro lives here, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="cube-transition" />
    </>
  )
}

export default Contact
