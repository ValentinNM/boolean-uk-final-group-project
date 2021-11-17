import { useEffect, useState } from "react";
import CreateClassForm from "./Pages/CreateClassForm";
import { Routes, Route } from "react-router-dom";
import CreateTrainerForm from "./Pages/CreateTrainerForm";
import ListOfClasses from "./components/ListOfClasses";
import ListOfMembers from "./components/ListOfMembers";
import ListOfTrainers from "./components/ListOfTrainers";
import CreateMembers from "./Pages/CreateMembers";
import ViewMember from "./Pages/ViewMemeber"
import EditMemberForm from "./Pages/EditMemberForm";
import Header from "./components/Header"
import EditClassForm from "./Pages/EditClassForm";
import HomePage from "./Pages/HomePage"


export default function App() {
  const [trainers, setTrainers] = useState([])
  const [classes, setClasses] = useState([])
  const [members, setMembers] = useState([])
  const [detailsToEdit, setDetailsToEdit] = useState({})
  const [contactEdit, setContactEdit] = useState(false)
  const [memberToView, setMemberToView] = useState([])
  const [profile, setProfile] = useState([])
  const [address, setAddress] = useState([])


  const API_URL = process.env.REACT_APP_API_URL;

  console.log("Inside App State: ", {
    trainers,
    classes,
    members,
    detailsToEdit,
    contactEdit
  })

  function fetchClasses() {
    fetch(`${API_URL}/classes`)
      .then((res) => res.json())
      .then((classData) => {
        setClasses(classData);
        console.log("Inside Classes Get Fetch: ", classData)
      });
  }

  function fetchMembers() {
    fetch(`${API_URL}/members`)
      .then((res) => res.json())
      .then((memberData) => {
        setMembers(memberData);
        console.log("Inside Member Get Fetch: ", memberData)
      });
  }

  function fetchTrainers() {
    fetch(`${API_URL}/trainers`)
      .then((res) => res.json())
      .then((trainerData) => {
        setTrainers(trainerData);
        console.log("Inside Trainer Get Fetch: ", trainerData)
      });
  }

  function fetchAddress() {
    fetch(`${API_URL}/address`)
      .then((res) => res.json())
      .then((addressData) => {
        setAddress(addressData);
        console.log("Inside Trainer Get Fetch: ", addressData)
      });
  }

  function fetchProfile() {
    fetch(`${API_URL}/profile`)
      .then((res) => res.json())
      .then((profileData) => {
        setProfile(profileData);
        console.log("Inside Trainer Get Fetch: ", profileData)
      });
  }

  useEffect(() => {
    fetchClasses();
    fetchMembers();
    fetchTrainers();
    fetchAddress();
    fetchProfile()
  }, [])

  return (
    <>
      <header className="header">
        < Header />
      </header>
<<<<<<< HEAD
  <Routes>
    <Route path="/" element={<HomePage trainers={trainers}
      setTrainers={setTrainers}
      classes={classes}
      members={members}
      setMemberToView={setMemberToView}
      memberToView={memberToView} />} />
=======

      <aside className="left-aside">
      <ListOfTrainers trainers={trainers} />
      <CreateTrainerForm trainers={trainers} setTrainers={setTrainers} />

    </aside>
    <main className="main">
      <ListOfClasses classes={classes} />

    </main>


    <aside className="right-aside">
      <ListOfMembers members={members} setMemberToView={setMemberToView} />
      <EditMemberForm members={members} />

    </aside>

    {/* <Routes>
        <Route path="/" />
>>>>>>> 468f341e2f343d7c10540f94ce65f1c62231c737
        <Route path="/create-class" element={<CreateClassForm classes={classes} setClasses={setClasses} />} />
        <Route path="/create-member" element={<CreateMembers />} />
        <Route path="/view-member" element={<ViewMember memberToView={memberToView} />} />
        <Route path="/edit-member" element={<EditMember memberToView={memberToView} />} />
        <Route path="/classes" element={<ListOfClasses classes={classes} />} />
        <Route path="/trainers" element={<ListOfTrainers trainers={trainers} />} />
        <Route path="/create-trainer" element={<CreateTrainerForm trainers={trainers} setTrainers={setTrainers} />} />
        <Route path="/classes/:classId/editclass" element={<EditClassForm classes={classes} setClasses={setClasses} trainers={trainers} setTrainers={setTrainers} />} />
        <Route path="/members" element={<ListOfMembers members={members} setMemberToView={setMemberToView} />} />
      </Routes>
    </>
  );
}

