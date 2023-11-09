import { useRef } from 'react'
import { auth, storage, db } from '../../firebase'

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore'

const DashBoardForm = () => {
  const form = useRef()

  const submitPortfolio = async (e) => {
    e.preventDefault()

    const name = form.current[0]?.value
    const description = form.current[1]?.value
    const webUrl = form.current[2]?.value
    const codeUrl = form.current[3]?.value
    const image = form.current[4]?.files[0]

    // * upload image to firebaseStorage
    try {
      const storageRef = ref(storage, `portfolio/${image.name}`) // 1- storage, 2-image-name-URL
      // 1 {the ref}, 2 {file it-self}

      const snapShot = await uploadBytes(storageRef, image)

      const downloadUrl = await getDownloadURL(snapShot.ref)
      savePortfolio({
        name,
        description,
        webUrl,
        codeUrl,
        image: downloadUrl,
      })
    } catch (error) {
      console.log(error)
    }

   
    const savePortfolio = async (portfolio) => {
      try {
        await addDoc(collection(db, 'portfolio'), portfolio) // 1-database, 2-collection_name, 3-portfolio itself to add
        window.location.reload(false)
      } catch (error) {
        alert('Failed to add portfolio')
      }
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
