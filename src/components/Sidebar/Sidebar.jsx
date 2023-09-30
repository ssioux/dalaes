import { Link } from 'react-router-dom'
import './sidebar.scss'
import LogoSsioux from '../../assets/images/logo-ssioux.png'
import LogoSsiouxSubtitle from '../../assets/images/logo-ssioux-sub.png'

const Sidebar = () => {
  return <div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={LogoSsioux} alt='logo'/>
        <img className="sub-logo" src={LogoSsiouxSubtitle} alt="Ssioux" />
    </Link>
  </div>
}

export default Sidebar
