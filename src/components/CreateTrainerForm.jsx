import { useState } from "react";
export default function CreateTrainerForm(props) {
    const { trainers, setTrainers } = props

    const [ fullName, setFullName] = useState("")
    const [ speciality, setSpeciality] = useState("")
    const [ qualification, setQualification] = useState("")
    const [gender, setGender] = useState("")

    const handleFullName = (event) => {
        console.log("Inside handlerFullName ", event.target.value);
        setFullName(event.target.value);
      };
      const handleSpeciality = (event) => {
        console.log("Inside handlerSpeciality ", event.target.value);
        setSpeciality(event.target.value);
      };
      const handleQualification = (event) => {
        console.log("Inside handlerQualification ", event.target.value);
        setQualification(event.target.value);
      }; 
      const handleGender = (event) => {
        console.log("Inside handlerGender ", event.target.value);
        setGender(event.target.value);
      };
      const handleSubmit = (event) => {
          event.preventDefault()

          const trainerToCreate = {
            fullName,
            speciality,
            qualification,
            gender
          };
      
          const fetchTrainer = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(trainerToCreate),
          };
          fetch("http://localhost:3030/trainers", fetchTrainer)
            .then((res) => res.json())
            .then((newtrainer) => {
              // console.log("trainer POST request: ", newtrainer);
              const trainerToAdd = {
                ...newtrainer,
              };
              setTrainers([...trainers, trainerToAdd]);
            });
            // console.log("Inside handle submit: ", handleSubmit);
      }

    return(
        <>
<h2>Add New Trainer</h2>
<form onSubmit={handleSubmit} className="form-stack light-shadow center form-stack">
    <label htmlFor="fullName"> Full Names: </label>
    <input
        onChange={handleFullName}
        id="fullName"
        name="fullName"
        type="text"
        value={fullName}
      />
      <label htmlFor="speciality"> Speciality: </label>
      <input
        onChange={handleSpeciality}
        id="speciality-input"
        name="speciality-input"
        type="text"
        value={speciality}
      />
      <label htmlFor="qualification"> Qualification: </label>
      <input
        onChange={handleQualification}
        id="model-qualification"
        name="model-qualification"
        type="text"
        value={qualification}
      />
          <label htmlFor="gender"> Gender: </label>
      <input
        onChange={handleGender}
        id="model-gender"
        name="model-gender"
        type="text"
        value={gender}
      />
      <button onClick={handleSubmit} type="submit">
          Add Trainer
        </button>
</form>
        </>
    )
}