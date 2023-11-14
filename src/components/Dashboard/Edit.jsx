import { updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { storage } from '../../firebase'

function Edit({ projectToEdit, project }) {
  
  const navigate = useNavigate()

  const { image, webUrl, codeUrl, description, name } = projectToEdit


  const [nameInput, setNameInput] = useState(name)

  const [descriptionInput, setDescriptionInput] = useState(description)

  const [webUrlInput, setWebUrlInput] = useState(webUrl)

  const [codeUrlInput, setCodeUrlInput] = useState(codeUrl)
  const [imageInput, setImageInput] = useState(image)


  const updateProject = async (e) => {
    e.preventDefault()


    try {

      // 1 - Location where the picture is gonna be saved
      const storageRef = ref(storage, `portfolio/${imageInput.name}`) // 1- storage, 2-image-name-URL || 1 {the ref}, 2 {file it-self}
      // 2 - uploading the picture to firebase storage
      const snapShot = await uploadBytes(storageRef, image)
      // 3 - picture Url
      const downloadUrl = await getDownloadURL(snapShot.ref)

      const inputData = {
        name: nameInput,
        description: descriptionInput,
        webUrl: webUrlInput,
        codeUrl: codeUrlInput,
        image: downloadUrl,
      }
      // project getDoc from props + inputs object to update
      await updateDoc(project, inputData)
      window.location.reload(false)
    } catch (error) {
      navigate('/error')
    }
  }

  useEffect(() => {
    loadData()
  }, [name, description, webUrl, codeUrl, image])

  const loadData = () => {
    setCodeUrlInput(codeUrl)
    setDescriptionInput(description)
    setNameInput(name)
    setWebUrlInput(webUrl)
    setImageInput(image)
  }
  return (
    <div className="dashboard-edit">
      <form>
        <p>
          <input
            type="text"
            placeholder={name}
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
          />
        </p>
        <p>
          <textarea
            placeholder={description}
            onChange={(e) => setDescriptionInput(e.target.value)}
            value={descriptionInput}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder={webUrl}
            onChange={(e) => setWebUrlInput(e.target.value)}
            value={webUrlInput}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder={codeUrl}
            onChange={(e) => setCodeUrlInput(e.target.value)}
            value={codeUrlInput}
          />
        </p>

        <p>
          <input
            type="file"
            placeholder={image}
            onChange={(e) => setImageInput(e.target.files[0])}
          />
        </p>
        <button type="submit" onClick={updateProject}>
          Edit
        </button>
      </form>
    </div>
  )
}

export default Edit
