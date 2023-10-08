import { useRef } from 'react'
import { auth } from '../../firebase'

const DashBoardForm = () => {
  const form = useRef()
  console.log("🚀 ~ file: DashBoardForm.jsx:6 ~ DashBoardForm ~ form:", form)

  const submitPortfolio = (e) => {
    e.preventDefault()

    const name = form.current[0]?.value
    const descrption = form.current[1]?.value
    const webUrl = form.current[2]?.value
    const codeUrl = form.current[3]?.value
    const image = form.current[4]?.files[0]

    console.log(name, descrption, webUrl, codeUrl, image)

  }

  return (
    <div className="dashboard">
      <form ref={form} onSubmit={submitPortfolio}>
        <p>
          <input type="text" placeholder="Name" />
        </p>
        <p>
          <textarea placeholder="Description" />
        </p>
        <p>
          <input type="text" placeholder="Web-Url" />
        </p>
        <p>
          <input type="text" placeholder="Code-Url" />
        </p>

        <p>
          <input type="file" placeholder="Image" />
        </p>
        <button type="submit">Submit</button>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </form>
    </div>
  )
}

export default DashBoardForm
