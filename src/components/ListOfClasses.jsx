import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function ListOfClasses(props) {

  const {classes, setClassToProcess, setClasses } = props;
  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const jump = (event) => {
    event.preventDefault();
    navigate("/create-class");
  };

  // const handleClassToProcess = (event, oneClass) => {
  //   setClassToProcess(oneClass);
    // navigate("/classes/view/${oneClass.id}");
  // };

  const handleDelete = (event, oneClass) => {

    fetch(`${API_URL}/classes/${oneClass.id}`, { method: "DELETE" })
    .then(() => { 

      const removeDeletedClass = classes.filter((cls) => cls.id !== oneClass.id)

      setClasses([...removeDeletedClass]);
    })
  };

  return (
    <>
      <main>
        <div className="padding two-column-grid-expand__right">
          <h2> Classes</h2>
          <div>
            <Button onClick={jump}>
              <strong> ➕ </strong>
            </Button>
          </div>
        </div>
        <ul className="cards padding classes-list">
          {classes.map((oneClass, index) => {
            const {
              className,
              classType,
              classStatus,
              duration,
            } = oneClass;

            var {classStartDate } = oneClass;
            classStartDate = classStartDate.toLocaleString("en-GB");
            console.log("date test: ", classStartDate)

            return (
              <li key={index} className="border-for-li two-row-grid">
                <div>
                  <h3> <strong> {className} </strong> </h3>
                  <p>Activity: {classType}</p>
                  <p>Status: {classStatus}</p>
                  <p>Date: {classStartDate}</p>
                  <p>Duration: {duration} min</p>
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
