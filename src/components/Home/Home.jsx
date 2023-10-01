import './home.scss'
import LogoTitle from '../../assets/images/logo-ssioux.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br /> I am 
        <img src={LogoTitle} alt="developer" />
        sioux
        <br />
        web developer
          </h1>
          <h2>Frontend Developer / Junior </h2>
          <Link to='/contact' className='flat-button'>CONTACT ME</Link>
       
      </div>
    </div>
  )
}

export default Home
