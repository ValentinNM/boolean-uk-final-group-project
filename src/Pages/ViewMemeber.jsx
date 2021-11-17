import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function ViewMember(props) {
  const { memberToView } = props;

  const { userName, membershipType, membershipStatus, profile } = memberToView;
  const { firstName, lastname, address } = profile;
  const { city, country, houseNumber, postcode, streetName } = address;

  return (
    <section className="all-member-details-container center-style two-column-grid-forms">
      <ul>
        <li className ="two-column-grid-expand__right">
            <div className="view-member-details">
          <div className="member-main-details">
            <h1>Member details</h1>
            <h1> Username: {userName} </h1>
            <h1> First Name: {firstName} </h1>
            <h1> Last Name: {lastname} </h1>
          </div>          
          <div className="profile">
            <h1>Membership: </h1>
            <h1>Membership: {membershipType} </h1>
            <h1>Status: {membershipStatus} </h1>
          </div>
          <div className="address">
            <h1>Address: </h1>
            <h1> Property No: {houseNumber} </h1>
            <h1> Street: {streetName} </h1>
            <h1> City: {city} </h1>
            <h1> Postcode: {postcode} </h1>
            <h1> Country: {country} </h1>
          </div>
            </div>
            <div className="member-avatar">
                <img src={profile.picture} alt="member-picture" />
                {/* change avatar */}
            </div>
          <div className="one-class-dashboard-buttons">
            <Button variant="container">
              <Link to="/edit-member">EDIT</Link>
            </Button>
            <Button variant="container"> DELETE </Button>
          </div>
          <Button variant="container">
              <Link to="/">Back To Home</Link>
            </Button>
        </li>
      </ul>
    </section>
  );
}
