
import { useEffect } from 'react'


function Edit({projectToEdit}) {
  console.log("🚀 ~ file: Edit.jsx:6 ~ Edit ~ projectToEdit:", projectToEdit)
  
  
  useEffect(() => {
    
      
    
  }, [])



  return (
    <div className="dashboard-edit">
      <form>
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
        <button type="submit">Edit</button>
      </form>
    </div>
  )
}

export default Edit
