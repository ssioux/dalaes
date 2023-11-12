
import { useEffect, useState } from 'react'


function Edit({projectToEdit}) {
  const {image, webUrl, codeUrl, description, name} = projectToEdit
 
  const [nameInput, setNameInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [webUrlInput, setWebUrlInput] = useState("")
  const [codeUrlInput, setCodeUrlInput] = useState("")
  const [imageInput, setImageInput] = useState("")

  

  const updateProject = () => {
    // TODO: Connect to data base for update one portfolio
  }

  return (
    <div className="dashboard-edit">
      <form onSubmit={updateProject}>
        <p>
          <input type="text" placeholder={name} onChange={(e) => setNameInput(e.target.value)} value={nameInput}/>
        </p>
        <p>
          <textarea placeholder={description} onChange={(e) => setDescriptionInput(e.target.value)} value={descriptionInput} />
        </p>
        <p>
          <input type="text" placeholder={webUrl} onChange={(e) => setWebUrlInput(e.target.value)} value={webUrlInput} />
        </p>
        <p>
          <input type="text" placeholder={codeUrl} onChange={(e) => setCodeUrlInput(e.target.value)} value={codeUrlInput} />
        </p>

        <p>
          <input type="file" placeholder="Image" />
        </p>
        <button type="submit">Edit</button>
      </form>
    </div>
  )
}

export default Edit
