import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditClassForm(props) {
    const { classes, setClasses, trainers, setTrainers } = props

    const { classId } = useParams();
    const foundClass = classes.find((classe) => {
        // console.log({ classe });
        // console.log({ id: classe.id })
        // console.log(classe.id === parseInt(classId))
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
    const [fullName, setFullName] = useState(classToEdit.trainer.fullName);
    const [speciality, setSpeciality] = useState(classToEdit.trainer.speciality);
    const [qualification, setQualification] = useState(classToEdit.trainer.qualification);
    const [gender, setGender] = useState(classToEdit.trainer.gender);

    // useEffect(() => {
    //     console.log("Inside class to edit: ", classToEdit)
    //     if (classToEdit) {
    //         setClassName(classToEdit.className)
    //         setClassType(classToEdit.classType)
    //         setClassStatus(classToEdit.classStatus)
    //         setClassStartDate(classToEdit.setClassStartDate)
    //         setDuration(classToEdit.duration)
    //         setFullName(classToEdit.fullName)
    //         setSpeciality(classToEdit.speciality)
    //         setQualification(classToEdit.qualification)
    //         setGender(classToEdit.gender)
    //     }
    // }, [classToEdit])

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
                <label htmlFor="">Speciality: </label>
                <input
                    onChange={handleSpeciality}
                    id=""
                    name=""
                    type="text"
                    value={speciality}
                />
                <label htmlFor="">Qualification: </label>
                <input
                    onChange={handleQualification}
                    id=""
                    name=""
                    type="text"
                    value={qualification}
                />
                <label htmlFor="">Gender: </label>
                <input
                    onChange={handleGender}
                    id=""
                    name=""
                    type="text"
                    value={gender}
                />
                <button type="submit">
                    Edit Class
        </button>
            </form>
        </>
    )
}