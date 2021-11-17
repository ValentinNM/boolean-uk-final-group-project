import { useEffect, useState } from "react";
import CreateClassForm from "./Pages/CreateClassForm";
import { Routes, Route } from "react-router-dom";
import CreateTrainerForm from "./Pages/CreateTrainerForm";
import ListOfClasses from "./components/ListOfClasses";
import ListOfMembers from "./components/ListOfMembers";
import ListOfTrainers from "./components/ListOfTrainers";
import CreateMembers from "./Pages/CreateMembers";
import ViewMember from "./Pages/ViewMemeber"
import EditMember from "./Pages/EditMember";
import Header from "./components/Header"
import Header from "./components/Header"
import EditClassForm from "./Pages/EditClassForm";
import HomePage from "./Pages/HomePage"
import TrainersPage from "./Pages/TrainersPage";


export default function App() {
  const [trainers, setTrainers] = useState([])
  const [classes, setClasses] = useState([])
  const [members, setMembers] = useState([])
  const [detailsToEdit, setDetailsToEdit] = useState({})
  const [contactEdit, setContactEdit] = useState(false)
  const [memberToView, setMemberToView] = useState([])
  const [trainerToView, setTrainerToView] = useState([])
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
      <Routes>
        <Route path="/" element={<HomePage trainers={trainers}
          setTrainers={setTrainers}
          classes={classes}
          members={members}
          setMemberToView={setMemberToView}
          memberToView={memberToView} 
          trainerToView={trainerToView}
          setTrainerToView={setTrainerToView}
          />} />
        <Route path="/create-class" element={<CreateClassForm classes={classes} setClasses={setClasses} />} />
        <Route path="/create-member" element={<CreateMembers />} />
        <Route path="/view-member" element={<ViewMember memberToView={memberToView} />} />
        <Route path="/edit-member" element={<EditMemberForm memberToView={memberToView} />} />
        <Route path="/classes" element={<ListOfClasses classes={classes} />} />
        <Route path="/trainers" element={<ListOfTrainers trainers={trainers} />} />
        <Route path="/create-trainer" element={<CreateTrainerForm trainers={trainers} setTrainers={setTrainers} />} />
        <Route path="/classes/:classId/editclass" element={<EditClassForm classes={classes} setClasses={setClasses} trainers={trainers} setTrainers={setTrainers} />} />
        <Route path="/members" element={<ListOfMembers members={members} setMemberToView={setMemberToView} />} />
        <Route path="/trainers-page" element={<TrainersPage trainerToView={trainerToView}/>}/>
      </Routes>
    </>
  );
}

