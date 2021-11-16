import { useEffect, useState } from "react";
import CreateClassForm from "./Pages/CreateClassForm";
import { Routes, Route } from "react-router-dom";
import CreateTrainerForm from "./Pages/CreateTrainerForm";
import ListOfClasses from "./components/ListOfClasses";
import ListOfMembers from "./components/ListOfMembers";
import ListOfTrainers from "./components/ListOfTrainers";
import CreateMembers from "./Pages/CreateMembers";
import ViewMember from "./Pages/ViewMemeber"
import EditMember from "./Pages/EditMemberForm";
import Header from "./components/Header"
import EditClassForm from "./Pages/EditClassForm";


export default function App() {
  const [trainers, setTrainers] = useState([])
  const [classes, setClasses] = useState([])
  const [members, setMembers] = useState([])
  const [detailsToEdit, setDetailsToEdit] = useState({})
  const [contactEdit, setContactEdit] = useState(false)
  const [memberToView, setMemberToView] = useState([])
  const [profile,setProfile ] = useState([]) 
  const [address,setAddress ] = useState([])


  const API_URL = process.env.REACT_APP_API_URL;

  console.log("Inside App State: ", {
    trainers,
    classes,
    members,
    detailsToEdit,
    contactEdit
  })

  useEffect(() => {
    fetch(`${API_URL}/classes`)
      .then((res) => res.json())
      .then((classData) => {
        setClasses(classData);
        console.log("Inside Classes Get Fetch: ", classData)
      });
  }, [])

  useEffect(() => {
    fetch(`${API_URL}/members`)
      .then((res) => res.json())
      .then((memberData) => {
        setMembers(memberData);
        console.log("Inside Member Get Fetch: ", memberData)
      });
  }, [])

  useEffect(() => {
    fetch(`${API_URL}/trainers`)
      .then((res) => res.json())
      .then((trainerData) => {
        setTrainers(trainerData);
        console.log("Inside Trainer Get Fetch: ", trainerData)
      });
  }, [])

  useEffect (() => {
    fetch(`${API_URL}/address`)
    .then((res) => res.json())
    .then((addressData) => {
      setAddress(addressData);
      console.log("Inside Trainer Get Fetch: ", addressData)
    });
  }, [])

  useEffect (() => {
    fetch(`${API_URL}/profile`)
    .then((res) => res.json())
    .then((profileData) => {
      setProfile(profileData);
      console.log("Inside Trainer Get Fetch: ", profileData)
    });
  }, [])

  return (
    <div className="grid-container">
      <header className="header">
        < Header />
      </header>

      <aside className="left-aside">
        <ListOfTrainers trainers={trainers} />
        <CreateTrainerForm trainers={trainers} setTrainers={setTrainers} />

      </aside>
      <main className="main">
        <Routes>
        {/* <ListOfClasses classes={classes} /> */}
        {/* <Route path="/create-member" element={<CreateMembers />} /> */}
        <Route path="/create-member" element={<CreateMembers API_URL ={API_URL }  />} />
      </Routes>
      </main>


      <aside className="right-aside">
        <ListOfMembers members={members} setMemberToView={setMemberToView} />
        {/* <ViewMember memberToView={memberToView} /> */}

      </aside>

      {/* <Routes>
        <Route path="/" />
        <Route path="/create-class" element={<CreateClassForm classes={classes} setClasses={setClasses} />} />
        <Route path="/view-member" element={<ViewMember memberToView={memberToView} />} />
        <Route path="/edit-member" element={<EditMember memberToView={memberToView} />} />
        <Route path="/classes" element={<ListOfClasses classes={classes} />} />
        <Route path="/trainers" element={<ListOfTrainers trainers={trainers} />} />
        <Route path="/create-trainer" element={<CreateTrainerForm trainers={trainers} setTrainers={setTrainers} />} />
        <Route path="/classes/:classId/editclass" element={<EditClassForm classes={classes} setClasses={setClasses} trainers={trainers} setTrainers={setTrainers} />} />
        <Route path="/members" element={<ListOfMembers members={members} setMemberToView={setMemberToView} />} />
      </Routes> */}


    </div>
  );
}

