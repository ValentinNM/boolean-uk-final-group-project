import { useEffect, useState } from "react";
import CreateClassForm from "./components/CreateClassForm";
import CreateTrainerForm from "./components/CreateTrainerForm";
import ListOfClasses from "./components/ListOfClasses";
import ListOfMembers from "./components/ListOfMembers";
import ListOfTrainers from "./components/ListOfTrainers";
import Header from "./components/Header"

export default function App() {
  const [trainers, setTrainers] = useState([])
  const [classes, setClasses] = useState([])
  const [members, setMembers] = useState([])

  const API_URL = process.env.REACT_APP_API_URL;

  console.log("Inside App State: ", {
    trainers,
    classes,
    members
  })

  useEffect (() => {
    fetch(`${API_URL}/classes`)
    .then((res) => res.json())
    .then((classData) => {
      setClasses(classData);
      console.log("Inside Classes Get Fetch: ", classData)
    });
  }, [])

    useEffect (() => {
    fetch(`${API_URL}/members`)
    .then((res) => res.json())
    .then((memberData) => {
      setMembers(memberData);
      console.log("Inside Member Get Fetch: ", memberData)
    });
  }, [])

    useEffect (() => {
    fetch(`${API_URL}/trainers`)
    .then((res) => res.json())
    .then((trainerData) => {
      setTrainers(trainerData);
      console.log("Inside Trainer Get Fetch: ", trainerData)
    });
  }, [])

  return (
    <div className="grid-container">
      <header className="header">
        < Header/>
      </header>

      <aside className="left-aside">
        <ListOfTrainers trainers={trainers} />
        <CreateTrainerForm trainers={trainers} setTrainers={setTrainers} />
      </aside>

      <main className="main">
        <ListOfClasses classes={classes} />
        <CreateClassForm classes={classes} setClasses={setClasses} />
      </main>

      <aside className="right-aside">
        <ListOfMembers members={members} />
      </aside>

    </div>
  );
}

