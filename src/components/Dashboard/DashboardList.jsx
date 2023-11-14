import { deleteDoc, doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase'

export default function DashboardList({
  portfolioList,
  getData,
  setProjectToEdit,
  setProject,
}) {
  const navigate = useNavigate()

  const deleteProject = async (id) => {
    try {
      const eachProject = doc(db, 'portfolio', id)
      await deleteDoc(eachProject)
      getData()
    } catch (error) {
      navigate('/error')
    }
  }

  const idSelector = async (id) => {
    try {
      const project = doc(db, 'portfolio', id)

      const projectById = await getDoc(project)

      setProjectToEdit(projectById.data())
      setProject(project)
    } catch (error) {
      navigate('/error')
    }
  }

  return (
    <div className="dashboard-list">
      {portfolioList.map((eachProject) => {
        return (
          <div style={{ display: 'flex' }} key={eachProject.id}>
            <h3>{eachProject.name}</h3>
            <button onClick={() => idSelector(eachProject.id)}>edit</button>
            <button onClick={() => deleteProject(eachProject.id)}>del</button>
          </div>
        )
      })}
    </div>
  )
}
