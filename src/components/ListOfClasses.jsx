import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"

export default function ListOfClasses(props) {

  const { classToEdit, classes, setClasses } = props

  const API_URL = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  return (
    <>
      {/* <header className="header">
        < Header />
      </header> */}
      <main className="">
        <h2 className="padding-left"> List Of Classes</h2>
        <ul className="cards padding classes-list">

          {props.classes.map((oneClass, index) => {
            const {
              className,
              classType,
              classStatus,
              classStartDate,
              duration,
            } = oneClass;
            return (
              // centre-card  => calss to replace&EDIT for the centre cards
              <li key={index} className="border-for-li two-row-grid">
                <div>
                  <h3> <strong> {className} </strong> </h3>
                  <p>Activity: {classType}</p>
                  <p>Status: {classStatus}</p>
                  <p>Data: {classStartDate}</p>
                  <p>Duration: {duration} min</p>
                </div>
                <div className="one-class-dashboard-buttons">
                  <Button variant="outlined" >View</Button>
                  <Button variant="outlined" onClick={() => navigate(`/classes/${oneClass.id}/editclass`)}>Edit</Button>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}