export default function ListOfTrainers(props) {
    return (
        <>
            <h2>List Of Trainers</h2>
          <ul>
            {props.trainers.map((trainer, index) => {
              const { trainerNames, speciality, qualification, gender} = trainer
              return (
                <li key = {index} className="border-for-li">
                <p>Full Names: {trainerNames}</p>
                <p>Area of Expertise: {speciality}</p>
                <p>Qualification: {qualification}</p>
                <p>Gender: {gender}</p>
                </li>
              )
            })}
          </ul>
        </>
    )
}