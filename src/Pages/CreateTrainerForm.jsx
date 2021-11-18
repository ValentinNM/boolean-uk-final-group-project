import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function CreateTrainerForm(props) {
  const { trainers, setTrainers } = props;

  const [fullName, setFullName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [qualification, setQualification] = useState("");
  const [gender, setGender] = useState("");

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
    event.preventDefault();

    const trainerToCreate = {
      fullName,
      speciality,
      qualification,
      gender,
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
        const trainerToAdd = {
          ...newtrainer,
        };
        setTrainers([...trainers, trainerToAdd]);
      });
  };

  return (
    <>
      <section className=" padding-sides add-trainer padding two-row-grid">
        <div>
          <Box
            onSubmit={handleSubmit}
            className=" two-column-grid-expand__right"
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0, width: "20ch" },
            }}
            noValidate
            autoComplete="of"
          >
            <TextField
              onChange={handleFullName}
              type="text"
              required
              id="outlined-required"
              label="Full Name"
              defaultValue={fullName}
            />
            <TextField
              required
              onChange={handleSpeciality}
              id="outlined-required"
              label="Speciality"
              defaultValue={speciality}
            />
            <TextField
              required
              onChange={handleQualification}
              id="outlined-required"
              label="Qualification"
              defaultValue={qualification}
            />
            <TextField
              required
              onChange={handleGender}
              id="outlined-required"
              label="Gender"
              defaultValue={gender}
            />
          </Box>
        </div>
        <div className="grid-gap">
          <Button variant="outlined" onClick={handleSubmit} type="submit">
            ADD TRAINER
          </Button>
        </div>
      </section>
    </>
  );
}
