import { useState } from "react";
import { useParams } from "react-router-dom";

export default function EditClassForm(props) {
    const { classes, setClasses, trainers, setTrainers } = props

    const { classId } = useParams();
    const foundClass = classes.find((classe) => {
        console.log({ classe });
        console.log({ id: classe.id })
        console.log(classe.id === parseInt(classId))
        return classe.id === parseInt(classId)
    })

    console.log("classes", classes)

    const [className, setClassName] = useState("")
    const [classType, setClassType] = useState("")
    const [classStatus, setClassStatus] = useState("")
    const [classStartDate, setClassStartDate] = useState(new Date().toDateString())
    const [duration, setDuration] = useState("")
    const [fullName, setFullName] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [qualification, setQualification] = useState("");
    const [gender, setGender] = useState("");

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
    const handleFullName = (event) => {
        event.preventDefault()
        setFullName(event.target.value)
    }

    const handleSpeciality = (event) => {
        event.preventDefault()
        setSpeciality(event.target.value)
    }

    const handleQualification = (event) => {
        event.preventDefault()
        setQualification(event.target.value)
    }

    const handleGender = (event) => {
        event.preventDefault()
        setGender(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const date = new Date(classStartDate)

        const classToUpdate = {
            className,
            classType,
            classStatus,
            classStartDate: date,
            duration,
            trainer: {
                fullName,
                speciality,
                qualification,
                gender,
            }
        }

        const fetchOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(classToUpdate)
        };

        fetch(`http://localhost:3030/classes${classId}`, fetchOptions)
            .then((res) => res.json())
            .then((classToUpdate) => {
                console.log("Updated class", classToUpdate);

                const updatedClass = classes.map((classe) => {
                    if (classToUpdate.data.id === classe.id) {
                        return classToUpdate.data;
                    } else {
                        return classe
                    }
                });

                setClasses(updatedClass)
            })
    }


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
                <label htmlFor="">Trainer's full name: </label>
                <input
                    onChange={handleFullName}
                    id=""
                    name=""
                    type="text"
                    value={fullName}
                />
                <label htmlFor="">Type: </label>
                <input
                    onChange={handleSpeciality}
                    id=""
                    name=""
                    type="text"
                    value={speciality}
                />
                <label htmlFor="">Status: </label>
                <input
                    onChange={handleQualification}
                    id=""
                    name=""
                    type="text"
                    value={qualification}
                />
                <label htmlFor="">Duration (minutes): </label>
                <input
                    onChange={handleGender}
                    id=""
                    name=""
                    type="number"
                    value={gender}
                />
                <button type="submit">
                    Edit Class
        </button>
            </form>
        </>
    )
}