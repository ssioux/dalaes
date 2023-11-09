import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './error.scss'
import { faWarning } from '@fortawesome/free-solid-svg-icons'

function Error() {
  return (
    <>
      <div className="error-page">
        <FontAwesomeIcon icon={faWarning} />
        <h1> Sorry. Our developers are working on it.</h1>
      </div>
    </>
  )
}

export default Error
