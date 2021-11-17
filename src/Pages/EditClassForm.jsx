import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
        // .then(() => {
        //     const updatedClass = classes.filter((classe) => classe.id !== id)

        //     setClasses(...updatedClass)
        navigate(`/classes`)
        // });
    };

    return (
        <>
            <h2>Edit Class</h2>
            <form onSubmit={handleSubmit} className="form-stack light-shadow center form-stack">
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
                <button type="submit">
                    Edit Class
        </button>
                <button onClick={handleDelete}>Delete Class</button>
            </form>
        </>
    )
}