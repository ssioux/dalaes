import { deleteDoc, doc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { db } from "../../firebase"

export default function DashboardList({ portfolioList, getData }) {
  const navigate = useNavigate()

  const deleteProject = async (id) => {

    try {
      const eachProject = doc(db, 'portfolio', id)
      await deleteDoc(eachProject)
      getData()
    } catch (error) {
      console.log(error)
      navigate("/error")
    }
  }
  return (
    <div className="dashboard-list">
      {portfolioList.map((eachProject) => {
        return (
          <div style={{display: "flex"}} key={eachProject.id}>
            <h3 >{eachProject.name}</h3>

            <button onClick={() => deleteProject(eachProject.id)}>x</button>
          </div>
        )
      })}
    </div>
  )
}
