import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListOfClasses(props) {
  const { classes } = props;

  const [classTypes, setClassTypes] = useState("");

  console.log("Inside ListOfClasses App State:", classTypes);

  const API_URL = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  const handleClassFilter = (event) => {
    console.log("Inside handleClassFilter: ", event.target.value);
    setClassTypes(event.target.value);
  };

  return (
    <>
      <h2 className="padding-left"> List Of Classes</h2>
      <form className="filter-form">
      <div className="two-column-grid-expand__right">
      <h3>Class Activity</h3>
        <select
          name="fiter-by-activity"
          id="filter-by-activity"
          onChange={handleClassFilter}
          value={classTypes}
        >
           {
            classes.map((classe, index) => {
    return (
      <option key={index} value={classe.classType}>Class Type 🔎 {classe.classType}</option>
    )})
          }
        </select>
        </div>
      </form>
      <main className="">
        <ul className="cards padding classes-list">
          {props.classes
            .filter((classe) => {
              if (classTypes === classe.classType || classTypes === "") {
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
                    <Button variant="outlined">View</Button>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        navigate(`/classes/${oneClass.id}/editclass`)
                      }
                    >
                      Edit
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
