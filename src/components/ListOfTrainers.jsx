import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ListOfTrainers(props) {

  const {trainers, setTrainerToView} = props;

  const navigate = useNavigate();

  const handleTrainerToView = (event, trainer) => { 
    console.log("handleTrainerToView: ", trainer);
    setTrainerToView(trainer);

    navigate("/trainers-page")
  } 

  return (
    <>
      <h2 className="padding" > Trainers </h2>
      <ul className="padding trainers-list ">
        {trainers.map((trainer, index) => {
              const { fullName, speciality, qualification, gender} = trainer
              return (
                <li key = {index} className="border-for-li two-column-grid-expand__right ">
                 <div>
                <p> <strong>Name :</strong> {fullName}</p>
                <p>Speciality: {speciality}</p>
                <p>Qualification: {qualification}</p>
                <p>Gender: {gender}</p>
                </div>
                <div>
                <Button variant="contained"
                    onClick={(e) => handleTrainerToView(e, trainer)}
                    // <Link to="/trainers-page">
                      >VIEW 
                </Button>
                </div>
                </li>
              )
            })}
      </ul>
    </>
  )
}