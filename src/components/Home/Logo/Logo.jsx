// scss
import './logo.scss'
// D
import LogoSioux from '../../../assets/images/Logo-d.png'

const Logo = () => {
  return (
    <div className="logo-container scale-up-left">
  
      <img
        className="solid-logo blur-in"
        src={LogoSioux}
        alt="D"
      />
    </div>
  )
}

export default Logo
