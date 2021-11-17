import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
export default function TrainersPage(props) {
  const { trainerToView } = props;

  const { fullName, speciality, qualification, gender } = trainerToView;

  return (
    <>
    <h2>Trainer's Details</h2>
      <ul className="center-style">
        <li>
          <p>
            <strong>Name :</strong> {fullName}
          </p>
          <p>Speciality: {speciality}</p>
          <p>Qualification: {qualification}</p>
          <p>Gender: {gender}</p>
          <Button variant="container">
              <Link to="/">Back To Home</Link>
            </Button>
        </li>
      </ul>
    </>
  );
}