import { updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Edit({ projectToEdit, project }) {
  const navigate = useNavigate()

  const { image, webUrl, codeUrl, description, name } = projectToEdit


  const [nameInput, setNameInput] = useState("")
  
  const [descriptionInput, setDescriptionInput] = useState("")
 
  const [webUrlInput, setWebUrlInput] = useState("")

  const [codeUrlInput, setCodeUrlInput] = useState("")

  // const [imageInput, setImageInput] = useState(image)

  const updateProject = async (e) => {
    e.preventDefault()
    const inputData = {
      name: nameInput,
      description: descriptionInput,
      webUrl: webUrlInput,
      codeUrl: codeUrlInput,
      image: image,
    }
    try {
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

        {/* <p>
          <input
            type="file"
            placeholder={image}
            onChange={(e) => setImageInput(e.target.value)}
            value={imageInput}
          />
        </p> */}
        <button type="submit" onClick={updateProject}>
          Edit
        </button>
      </form>
    </div>
  )
}

export default Edit
