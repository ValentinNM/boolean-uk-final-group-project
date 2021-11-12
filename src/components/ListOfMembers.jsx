import * as React from 'react';
import Button from '@mui/material/Button';

export default function ListOfMembers(props) {
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
                <Button variant="contained">VIEW</Button>
              </div>
            </li>
          );
        })}
      </ul>
      </section>
    </>
  );
}
