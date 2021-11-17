import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ListOfMembers(props) {

  const {members, setMembers, setMemberToView, API_URL} = props; 

  const handleMemberToView = (event, member) => { 
    console.log("handleMemberToView: ", member)
    setMemberToView(member)
  }

  const handleDelete = (event, id, member) => { 
    fetch(`${API_URL}/members/${id}`, {method: "DELETE"})
    // .then((res) => res.json())
    // .then(deletedMember => {
    //   setMembers(...members)
    // })
    setMembers(...members)
  }
  
  return (
    <>
      <section>
      <h2>List Of Members</h2>
      <ul className=" padding members-list">
        {members.map((member, index) => {
          
          const { id, userName, membershipType, membershipStatus } = member;
          return (
            <li key={index} className="border-for-li two-column-grid-expand__right">
              <div className="member-details">
                <p> <strong> Username: </strong> {userName}</p> 
                <p>Membership: {membershipType}</p>
                <p>Status: {membershipStatus}</p>
              </div>
              <div className="align-end">
                <Button variant="contained" onClick={(e) => handleMemberToView(e, member) }>
                  <Link to="/view-member">
                  VIEW
                  </Link>
                </Button>
                <Button variant="contained" onClick={(e) => handleMemberToView(e, member) }>
                  <Link to="/edit-member">
                  Edit
                  </Link>
                </Button>
                <Button variant="contained" id={id}
                onClick={(e)=> handleDelete(e, id)}
                >
                  Delete
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