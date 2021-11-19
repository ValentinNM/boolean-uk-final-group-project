import ListOfTrainers from "../components/ListOfTrainers"
import CreateTrainerForm from "../Pages/CreateTrainerForm"
import ListOfClasses from "../components/ListOfClasses"
import ListOfMembers from "../components/ListOfMembers"
import { useNavigate } from "react-router-dom";
import FilterClassByType from "./FilterClassByType";

export default function HomePage(props) {

    const { trainers,
        setTrainers,
        classes,
        members,
        setMemberToProcess,
        memberToProcess,
        setMembers,
        setTrainerToView,
        setClassToProcess,
        setClasses,
    } = props

    const navigate = useNavigate();

    return (
        <>
            <div className="grid-container">

                <aside className="left-aside">
                    <ListOfTrainers trainers={trainers}  setTrainerToView={setTrainerToView}/>
                    <CreateTrainerForm trainers={trainers} setTrainers={setTrainers} />
                </aside>

                <main className="main">
                    <ListOfClasses classes={classes} setClassToProcess={setClassToProcess} setClasses={setClasses} />
                </main>

                <aside className="right-aside">
                    <ListOfMembers members={members} memberToProcess={memberToProcess} setMembers={setMembers} setMemberToProcess={setMemberToProcess} />
                    <FilterClassByType classes={classes} setClasses={setClasses} />
                </aside>
            </div>
        </>
    )
}