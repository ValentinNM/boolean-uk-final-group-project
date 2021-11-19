import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ViewMember(props) {

  const { memberToProcess, setMembers, members } = props;
  
  const API_URL = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  
  const { memberId } = useParams();

  const foundMember = members.find((member) => {
    
      return member.id === parseInt(memberId)
    })
    console.log("foundmember: ", foundMember)

    const jumpToEditMember = () => {
      navigate(`members/edit/${memberId}`);
    };

  const { userName, membershipType, membershipStatus, profile, id, classes } = memberToProcess;
  const { firstName, lastname, address } = profile;
  const { city, country, houseNumber, postcode, streetName } = address;


  const handleDelete = (event) => {
    fetch(`${API_URL}/members/${id}`,({ method: "DELETE" }))
    .then((res) => res.json())
    .then( () => { 

      const removeDeletedMember = members.filter((m) => m.id !== id )

      setMembers([...removeDeletedMember]);

      navigate("/");
    })
  }

  return (
    <section className="all-member-details-container center-style two-column-grid-forms">
      <h3>Member Details</h3>
      <ul>
        <li className ="two-column-grid-expand__right">
            <div className="view-member-details">
          <div className="member-main-details">
            <h3>Member details</h3>
            <h4> Username: {userName} </h4>
            <h4> First Name: {firstName} </h4>
            <h4> Last Name: {lastname} </h4>
          </div>          
          <div className="profile">
            <h4>Membership: </h4>
            <h4>Membership: {membershipType} </h4>
            <h4>Status: {membershipStatus} </h4>
          </div>
          <div className="address">
            <h4>Address: </h4>
            <h4> Property No: {houseNumber} </h4>
            <h4> Street: {streetName} </h4>
            <h4> City: {city} </h4>
            <h4> Postcode: {postcode} </h4>
            <h4> Country: {country} </h4>
          </div>
            </div>
            <div className="member-avatar">
                <img src={profile.picture} alt="member-avatar"/>
            </div>
          <div className="one-class-dashboard-buttons">
            <Button variant="outlined"
              onClick={jumpToEditMember}
            >
                EDIT
            </Button>
            <Button variant="text"
            color="secondary"
            onClick={handleDelete}
            >
               🗑
               </Button>
          </div>
        </li>
      </ul>
    </section>
  );
}
