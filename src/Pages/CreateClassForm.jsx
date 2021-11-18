import { useState } from "react";
import Header from "../components/Header"
import {useNavigate} from "react-router-dom"

export default function CreateClassForm(props) {
    const { classes, setClasses } = props

    const navigate = useNavigate()
    console.log("classes", classes)

    const [className, setClassName] = useState("")
    const [classType, setClassType] = useState("")
    const [classStatus, setClassStatus] = useState("")
    const [classStartDate, setClassStartDate] = useState(new Date().toDateString())
    const [duration, setDuration] = useState("")

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
        console.log("class start date", event.target.value)
        setClassStartDate(event.target.value)
    }

    const handleDuration = (event) => {
        event.preventDefault()
        setDuration(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const date = new Date(classStartDate)
        const pastDuration = parseInt(duration);

        const classToCreate = {
            className,
            classType,
            classStatus,
            classStartDate: date.toISOString(),
            duration: pastDuration
        }

        console.log("classtocreate", classToCreate)

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(classToCreate)
        }
        fetch("http://localhost:3030/classes", fetchOptions)
            .then((res) => res.json())
            .then((newClass) => {
                const classToAdd = {
                    ...newClass
                }
                console.log("New class", newClass)
                setClasses([...classes, classToAdd])
                navigate(`/classes`)
            })
    }

    return (
        <>
            <h2>Create New Class</h2>
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
                    Add Class
        </button>
            </form>
        </>
    )
}