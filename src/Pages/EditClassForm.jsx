import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function EditClassForm(props) {
    const { classes, setClasses, trainers, setTrainers } = props

    const { classId } = useParams();
    const foundClass = classes.find((classe) => {
      
        return classe.id === parseInt(classId)
    })

    const API_URL = process.env.REACT_APP_API_URL;

    const navigate = useNavigate();

    console.log("classes", classes)

    const [classToEdit, setClassToEdit] = useState(foundClass)
    const [className, setClassName] = useState(classToEdit.className)
    const [classType, setClassType] = useState(classToEdit.classType)
    const [classStatus, setClassStatus] = useState(classToEdit.classStatus)
    const [classStartDate, setClassStartDate] = useState(new Date().toDateString())
    const [duration, setDuration] = useState(classToEdit.duration)
    
    const handleClassName = (event) => {
        event.preventDefault()
        setClassName(event.target.value)
    }

    const handleClassType = (event) => {
        event.preventDefault()
        setClassType(event.target.value)
    }

    const handleClassStatus = (event) => {
        event.preventDefault()
        setClassStatus(event.target.value)
    }

    const handleClassStartDate = (event) => {
        event.preventDefault()
        setClassStartDate(event.target.value)
    }

    const handleDuration = (event) => {
        event.preventDefault()
        setDuration(event.target.value)
    }
  
    const handleSubmit = (event) => {
        event.preventDefault()

        const date = new Date(classStartDate)

        const classToUpdate = {
            className,
            classType,
            classStatus,
            classStartDate: date,
            duration
        }

        const fetchOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(classToUpdate)
        };

        fetch(`${API_URL}/classes/${classId}`, fetchOptions)
            .then((res) => res.json())
            .then((classToUpdate) => {
                console.log("Updated class", classToUpdate);

                // const updatedClass = classes.map(classe => classToUpdate.id === classe.id ? classToUpdate : classe);  // ternary way
                const updatedClass = classes.map((classe) => {
                    if (classToUpdate.id === classe.id) {
                        return classToUpdate;
                    } else {
                        return classe
                    }
                });

                setClasses(updatedClass)
                navigate(`/classes`)
            })
    }

    const handleDelete = (event) => {

        fetch(`${API_URL}/classes/${classToEdit.id}`, { method: "DELETE" })
        // .then((res) => res.json())
        .then(() => {
            const updatedClasses = classes.filter((oneClass) => oneClass.id !== classToEdit.id)

            setClasses([...updatedClasses])
        navigate(`/classes`)
        });
    };

    return (
        <section className="center-style-member-forms">
            <div className="padding-bottom available-classes">
            <h2>Edit Class</h2>
            </div>

            <div>
        <Box
        onSubmit={handleSubmit} className="form-stack"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="of"
        >
          <TextField
            name="className"
            label="Name"
            onChange={handleClassName}
            type="text"
            value={className}
            />
            <TextField
            name="classType"
            label="Type"
            onChange={handleClassType}
            type="text"
            value={classType}
            />
            <TextField
            type="text"
            name="classStatus"
            label="Status"
            onChange={handleClassStatus}
            value={classStatus}
            />
            <TextField
            name="classStartDate"
            label="Start Date"
            onChange={handleClassStartDate}
            type="datetime-local"
            value={classStartDate}
            />
            <TextField
            name="classStatus"
            label="Duration"
            onChange={handleDuration}
            type="number"
            value={duration}
            />
         </Box>
            </div>
          <div className="align-buttons-end">
          <Button 
                variant="outlined"
                type="submit">
                    Update
        </Button>
                <Button
                type="text"
                color="secondary"
                onClick={handleDelete}> 🗑 </Button>
      
          </div>

            {/* <form onSubmit={handleSubmit} className="form-stack">
                <label htmlFor="">Class Name: </label>
                <input
                    onChange={handleClassName}
                    id=""
                    name=""
                    type="text"
                    value={className}
                />
                <label htmlFor="">Type: </label>
                <input
                    onChange={handleClassType}
                    id=""
                    name=""
                    type="text"
                    value={classType}
                />
                <label htmlFor="">Status: </label>
                <input
                    onChange={handleClassStatus}
                    id=""
                    name=""
                    type="text"
                    value={classStatus}
                />
                <label htmlFor="">Date: </label>
                <input
                    onChange={handleClassStartDate}
                    id=""
                    name=""
                    type="datetime-local"
                    value={classStartDate}
                />
                <label htmlFor="">Duration (minutes): </label>
                <input
                    onChange={handleDuration}
                    id=""
                    name=""
                    type="number"
                    value={duration}
                />
                <button 
                variant="outlined"
                type="submit">
                    Update
        </button>
                <button
                type="text"
                color="secondary"
                onClick={handleDelete}> 🗑 </button>
            </form> */}
            </section>
    )
}