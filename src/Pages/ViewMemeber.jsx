import { useState } from "react";
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
        <li>
          <div className="member-main-details">
            <h3>Username: {userName} </h3>
            <h3>Membership: {membershipType} </h3>
            <h3>Status: {membershipStatus} </h3>
          </div>
          <div className="profile">
            <h3> First Name: {firstName} </h3>
            <h3> Last Name: {lastname} </h3>
          </div>
          <div className="address">
            <h3> Property No: {houseNumber} </h3>
            <h3> Street: {streetName} </h3>
            <h3> City: {city} </h3>
            <h3> Postcode: {postcode} </h3>
            <h3> Country: {country} </h3>
          </div>
          <div>
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
