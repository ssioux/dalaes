import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NotFound() {
  return (
    <>
      <div className="error-page">
        <FontAwesomeIcon icon={faQuestionCircle}/>
        <h1>Page not found, are you lost? </h1>
      </div>
    </>
  )
}

export default NotFound
