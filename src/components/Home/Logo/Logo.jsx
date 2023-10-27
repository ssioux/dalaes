// scss
import './logo.scss'
import 'animate.css';
// D
import LogoSioux from '../../../assets/images/Logo-d.png'

const Logo = () => {
  return (
    <div className="logo-container">
  
      <img
        className="solid-logo"
        src={LogoSioux}
        alt="D"
      />
    </div>
  )
}

export default Logo
