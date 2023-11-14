import { useEffect, useRef, useState } from 'react'
import { auth, storage, db } from '../../firebase'

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, getDocs } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
// Components
import DashboardList from './DashboardList'
import Edit from './Edit'
import { useNavigate } from 'react-router-dom'
// TODO: setIsFecthing Data
const DashBoardForm = () => {
  const navigate = useNavigate()
  const form = useRef()
  const [portfolioList, setportfolioList] = useState([])
  const [projectToEdit, setProjectToEdit] = useState({name: "select project to edit", webUrl: "", codeUrl: "", description: "", image: ""})
  const [project, setProject] = useState()

  const submitPortfolio = async (e) => {
    e.preventDefault()

    const name = form.current[0]?.value
    const description = form.current[1]?.value
    const webUrl = form.current[2]?.value
    const codeUrl = form.current[3]?.value
    const image = form.current[4]?.files[0]

    // * upload image to firebaseStorage
    try {
      // 1 - Location where the picture is gonna be saved
      const storageRef = ref(storage, `portfolio/${image.name}`) // 1- storage, 2-image-name-URL || 1 {the ref}, 2 {file it-self}
      // 2 - uploading the picture to firebase storage
      const snapShot = await uploadBytes(storageRef, image)
      // 3 - picture Url
      const downloadUrl = await getDownloadURL(snapShot.ref)
      // 4 - new doc
      const proyect = {
        name,
        description,
        webUrl,
        codeUrl,
        image: downloadUrl,
      }
      // 5 - Add the doc to firebase
      await addDoc(collection(db, 'portfolio'), proyect) // 1-database, 2-collection_name, 3-portfolio itself to add
      // 6 - page reload if everything is done
      window.location.reload(false)
    } catch (error) {
      alert('Failed to add portfolio')
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const portfolioData = await getDocs(collection(db, 'portfolio'))

      setportfolioList(
        portfolioData.docs.map((eachProject) => ({
          ...eachProject.data(),
          id: eachProject.id,
        }))
      )
    } catch (error) {
      navigate('/error')
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard-form">
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
      <DashboardList
        portfolioList={portfolioList}
        getData={getData}
        setProjectToEdit={setProjectToEdit}
        setProject={setProject}
      />
      <Edit projectToEdit={projectToEdit} project={project} />
    </div>
  )
}

export default DashBoardForm
