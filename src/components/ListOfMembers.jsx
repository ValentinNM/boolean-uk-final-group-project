export default function ListOfMembers(props) {
  return (
    <>
      <h2>List Of Members</h2>
      <ul>
        {props.members.map((member, index) => {
          const { userName, membershipType, membershipStatus } = member;
          return (
            <li key={index} className="border-for-li two-column-grid-expand__right">
              <div className="member-details">
                <p>Member UserName: {userName}</p>
                <p>Membership Type: {membershipType}</p>
                <p>Status: {membershipStatus}</p>
              </div>
              <div className="meber-profile">
                <button>View Profile</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
