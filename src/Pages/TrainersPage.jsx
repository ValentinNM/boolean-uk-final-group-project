import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function TrainersPage(props) {
  const { trainerToView } = props;
  const navigate = useNavigate();

  const { fullName, speciality, qualification, gender } = trainerToView;

  const jumpToHome = (event) => { 
    navigate("/")
  }

  return (
    <>
    <h2>Trainer's Details</h2>
      <ul className="center-style">
        <li>
          <p>
            <strong> {fullName} </strong>
            <hr />
          </p>
          <p>Speciality: {speciality}</p>
          <p>Qualification: {qualification}</p>
          <p>Gender: {gender}</p>
          <Button 
          variant="text"
          color="secondary"
          onClick={jumpToHome}
            > 🏠 🔙 
            </Button>
        </li>
      </ul>
    </>
  );
}