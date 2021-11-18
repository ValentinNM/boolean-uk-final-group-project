import ListOfTrainers from "../components/ListOfTrainers"
import CreateTrainerForm from "../Pages/CreateTrainerForm"
import ListOfClasses from "../components/ListOfClasses"
import ListOfMembers from "../components/ListOfMembers"

export default function HomePage(props) {

    const { trainers, setTrainers, classes, members, setMemberToProcess, memberToProcess, setMembers, setTrainerToView } = props

    return (
        <>
            <div className="grid-container">

                <aside className="left-aside">
                    <ListOfTrainers trainers={trainers}  setTrainerToView={setTrainerToView}/>
                    <CreateTrainerForm trainers={trainers} setTrainers={setTrainers} />
                </aside>

                <main className="main">
                    <ListOfClasses classes={classes} />
                </main>

                <aside className="right-aside">
                    <ListOfMembers members={members} memberToProcess={memberToProcess} setMembers={setMembers} setMemberToProcess={setMemberToProcess} />
                </aside>
            </div>
        </>
    )
}