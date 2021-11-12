import Button from '@mui/material/Button';

export default function ListOfTrainers(props) {
    return (
        <>
            <h2>List Of Trainers</h2>
          <ul className="padding trainers-list ">
            {props.trainers.map((trainer, index) => {
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
                <Button variant="contained">VIEW</Button>
                </div>
                </li>
              )
            })}
          </ul>
        </>
    )
}