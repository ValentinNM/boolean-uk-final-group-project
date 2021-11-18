import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ListOfMembers(props) {
  const { members, setMembers, setMemberToProcess } = props;

  const API_URL = process.env.REACT_APP_API_URL;

  const handleMemberToView = (event, member) => {
    console.log("handleMemberToView: ", member);
    setMemberToProcess(member);
  };

  const handleDelete = (event, member) => {

    setMemberToProcess(member)
    console.log("member : ", member);
    fetch(`${API_URL}/members/${member.id}`, { method: "DELETE" })
    .then( () => { 

      const removeDeletedMember = members.filter((m) => m.id !== member.id )

      setMembers([...removeDeletedMember]);
    })
  };

  return (
    <>
      <section>
        <h2 className="padding">List Of Members</h2>
        <ul className=" padding members-list">
          {members.map((member, index) => {
            const { userName, membershipType, membershipStatus} = member;
            return (
              <li
                key={index}
                className="border-for-li two-column-grid-expand__right"
              >
                <div className="member-details">
                  <p>
                    <strong> Username: </strong> {userName}
                  </p>
                  <p>Membership: {membershipType}</p>
                  <p>Status: {membershipStatus}</p>
                </div>
                <div className="align-end">
                  <Button
                    variant="contained"
                    onClick={(e) => handleMemberToView(e, member)}
                  >
                    <Link to="/view-member">VIEW</Link>
                  </Button>
                  <Button
                    variant="container"
                    onClick={(e) => handleDelete(e, member)}
                  >DELETE
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
