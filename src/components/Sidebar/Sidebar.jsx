import { Link } from 'react-router-dom'
import './index.scss'


const Sidebar = () => {
  return <div className='nav-bar'>
    <Link className='logo' to='/'>
        {/* <img src={Logo} alt='logo'/> */}
    </Link>
  </div>
}

export default Sidebar
