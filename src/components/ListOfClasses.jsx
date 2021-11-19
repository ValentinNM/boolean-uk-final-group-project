import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function ListOfClasses(classes) {

const [classTypes, setClassTypes] = useState("")

console.log("Inside ListOfClasses App State:", classTypes)

  const {classes, setClassToProcess, setClasses } = props;
  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();


    const handleClassFilter = (event) => {
    
  console.log("Inside handleClassFilter: ", event.target.value);
  setClassTypes(event.target.value)
      }

  return (
    <>
      <h2 className="padding-left"> List Of Classes</h2>
      <form className="filter-form">
              <label htmlFor="filter-by-classType">
                <h3>Activity</h3>
              </label>
              <select
                name="fiter-by-activity"
                id="filter-by-activity"
                onChange={handleClassFilter}
                value={classTypes}
              >
                <option selected value="">
                  ...Select Activity...
                </option>
                <option value="cardio">Cardio</option>
                <option value="biking">Biking</option>
                <option value="boxing">Boxing</option>
                <option value="zumba">Zumba</option>
                <option value="yoga">Yoga</option>
                <option value="running">Running</option>
              </select>
            </form>
      <main className="">
      
        <ul className="cards padding classes-list">
          {classes.filter((classe) => {
     if (classTypes === classe.classType || classTypes ==="") {
     return true;
     } else {
       return false;
     }
    })
    .map((oneClass, index) => {
            return (
              
            
              <li key={index} className="border-for-li two-row-grid">
                <div>
                  <h3>
                    <strong> {oneClass.className} </strong>
                  </h3>
                  <p>Activity: {oneClass.classType}</p>
                  <p>Status: {oneClass.classStatus}</p>
                  <p>Data: {oneClass.classStartDate}</p>
                  <p>Duration: {oneClass.duration} min</p>
                </div>
                <div className="one-class-dashboard-buttons">
                  {/* <Button
                    variant="outlined"
                    onClick={(e) => handleClassToProcess(e, oneClass)}
                  >
                    View
                  </Button> */}
                  <Button
                    variant="outlined"
                    onClick={() =>
                      navigate(`/classes/${oneClass.id}/editclass`)
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    color="error"
                    variant="text"
                    onClick={(e) => handleDelete(e, oneClass)}
                  >
                    🗑 
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}