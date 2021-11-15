import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ListOfMembers(props) {
  
  const handleMemberToView = (event, member) => { 
    console.log("handleMemberToView: ", member)
    props.setMemberToView(member)
  }
  
  return (
    <>
      <section>
      <h2>List Of Members</h2>
      <ul className=" padding members-list">
        {props.members.map((member, index) => {
          
          const { userName, membershipType, membershipStatus } = member;
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
              </div>
            </li>
          );
        })}
      </ul>
      </section>
    </>
  );
}