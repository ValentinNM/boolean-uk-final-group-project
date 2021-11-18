import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ListOfMembers(props) {
  const { members, setMembers, setMemberToProcess } = props;

  const API_URL = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  const jump = (event) => {
    event.preventDefault();
    navigate("/create-member");
  };

  const handleMemberToView = (event, member) => {
    setMemberToProcess(member);
    navigate("/view-member")
  };

  const handleDelete = (event, member) => {

    setMemberToProcess(member)
    console.log("member : ", member);
    fetch(`${API_URL}/members/${member.id}`, { method: "DELETE" })
    .then(() => { 

      const removeDeletedMember = members.filter((m) => m.id !== member.id )

      setMembers([...removeDeletedMember]);
    })
  };

  return (
    <>
      <section>
        <div className="padding two-column-grid-expand__right">
          <h2 className=""> Members </h2>
          <div>
          <Button onClick={jump} >
            <strong> ➕ </strong>
          </Button>
          </div>
          </div>
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
                    variant="text"
                    // variant="outlined"
                    // color="secondary"
                    onClick={(e) => handleMemberToView(e, member)}
                  > VIEW
                  </Button>
                  <Button
                    color="error"
                    // variant="text"
                    variant="outlined"
                    onClick={(e) => handleDelete(e, member)}
                  > 🗑 
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
