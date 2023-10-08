import { useRef } from 'react'
import { auth, storage } from '../../firebase'

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

const DashBoardForm = () => {
  const form = useRef()

  const submitPortfolio = async (e) => {
    e.preventDefault()

    const name = form.current[0]?.value
    const descrption = form.current[1]?.value
    const webUrl = form.current[2]?.value
    const codeUrl = form.current[3]?.value
    const image = form.current[4]?.files[0]


    const storageRef = ref(storage, `portfolio/${image.name}`) // 1- storage, 2-image-name-URL
    // 1 {the ref}, 2 {file it-self}
    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            savePortfolio({
              name,
              descrption,
              webUrl,
              codeUrl,
              image: downloadUrl,
            })
          },
          (error) => {
            console.log(error);
            savePortfolio({
              name,
              descrption,
              webUrl,
              codeUrl,
              image: null,
            })
          }
        )
      },
      (error) => {
        console.log(error);
        savePortfolio({
          name,
          descrption,
          webUrl,
          codeUrl,
          image: null,
        })
      }
    )

    const savePortfolio = (portfolio) => {
      console.log(portfolio)
    }
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
