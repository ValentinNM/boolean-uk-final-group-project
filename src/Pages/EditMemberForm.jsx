import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function EditMemberForm(props) {
  console.log("Inside props ", props);
  const { contactEdit, members, SetMembers } = props;

  const [userName, setUserName] = useState("");
  const [membershipType, setMembershipType] = useState("");
  const [membershipStatus, setMembershipStatus] = useState("");

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("Inside contact to Edit: ", contactEdit);
    if (contactEdit) {
      setUserName(contactEdit.userName);
      setMembershipType(contactEdit.membershipType);
      setMembershipStatus(contactEdit.membershipStatus);
    }
  }, [contactEdit]);

  const handleUserName = (event) => {
    console.log("Inside handlers ", event.target.value);
    setUserName(event.target.value);
  };

  const handleMembershipType = (event) => {
    console.log("Inside handlers ", event.target.value);
    setMembershipType(event.target.value);
  };

  const handleMembershipStatus = (event) => {
    console.log("Inside handlers ", event.target.value);
    setMembershipStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const memberToUpdate = {
      userName,
      membershipType,
      membershipStatus,
    };
    const fetchMemberToUpdate = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(memberToUpdate),
    };
    const memberUrl = `${API_URL}/members/${contactEdit.id}`;
    fetch(memberUrl, fetchMemberToUpdate)
      .then((res) => res, JSON())
      .then((updatedMember) => {
        console.log("INside updated member: ", updatedMember);

        const membershipUpdate = members.msp((member) => {
          if (member.id === contactEdit.id) {
            return {
              ...updatedMember,
            };
          } else {
            return member;
          }
        });
        SetMembers(membershipUpdate);
      });
  };

  return (
    <section>
      <h2>Edit Member Only</h2>
      <form
        onSubmit={handleSubmit}
        className="form-stack light-shadow center form-stack"
      >
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={userName}
          onChange={handleUserName}
        />
        <label htmlFor="membershipType">Membership Type:</label>
        <input
          type="text"
          id="membershipType"
          name="membershipType"
          value={membershipType}
          onChange={handleMembershipType}
        />
        <label htmlFor="membershipStatus">Member Status:</label>
        <input
          type="text"
          id="membershipStatus"
          name="membershipStatus"
          value={membershipStatus}
          onChange={handleMembershipStatus}
        />
      </form>
      <div>
        <button onClick={handleSubmit} type="submit">
          Update Member
        </button>
      </div>
    </section>
  );
}
// <section className="two-column-grid-forms">
//   <div className="available-classes">
//     <h2>Available Classes: </h2>
//     <ul>
//       {/* {props.map((oneClass, index) => {
//         const {} = props; */}

//         {/* return ( */}
//           <li className="two-column-grid-expand__right">
//             <div>
//               {/* <h3>Class: {} </h3> */}
//             </div>
//             <div>
//               <Button variant="contained">Enroll</Button>
//             </div>
//           </li>
//         {/* ); */}
//       {/* })} */}
//     </ul>
//   </div>
//   <div>
//     <Box
//       // onSubmit={handleSubmit}
//       className=" two-column-grid-expand__right"
//       component="form"
//       sx={{
//         "& .MuiTextField-root": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="of"
//     >
//       <TextField
//         // onChange={}
//         type="text"
//         required
//         id="outlined-required"
//         label="Username"
//         // defaultValue={}
//         // value={}
//       />
//       <TextField
//         required
//         // onChange={}
//         id="outlined-required"
//         label="Memberships"
//         // defaultValue={}
//         // value={}
//       />
//       {/* might be worth making this dropdown SELECT option */}
//       <TextField
//         required
//         // onChange={}
//         id="outlined-required"
//         label="Status"
//         // defaultValue={}
//         // value={}
//       />
//       <div>
//         <h3>Profile Details:</h3>
//       <TextField
//         required
//         // onChange={}
//         id="outlined-required"
//         label="First Name"
//         // defaultValue={}
//         // value={}
//         />
//       <TextField
//         required
//         // onChange={}
//         id="outlined-required"
//         label="Last Name"
//         // defaultValue={}
//         // value={}
//         />
//       </div>
//       <div>
//           <h3>Address Details: </h3>
//       <TextField
//         required
//         // onChange={}
//         id="outlined-required"
//         label="House No"
//         // defaultValue={}
//         // value={}
//         />
//       <TextField
//         required
//         // onChange={}
//         id="outlined-required"
//         label="Street"
//         // defaultValue={}
//         // value={}
//         />
//       <TextField
//         required
//         // onChange={}
//         id="outlined-required"
//         label="City"
//         // defaultValue={}
//         // value={}
//         />
//       <TextField
//         required
//         // onChange={}
//         id="outlined-required"
//         label="POSTCODE"
//         // defaultValue={}
//         // value={}
//         />
//       <TextField
//         required
//         // onChange={}
//         id="outlined-required"
//         label="Country"
//         // defaultValue={}
//         // value={}
//         />
//     </div>
//     </Box>
//   </div>
//   <div className="grid-gap">
//     <Button variant="contained"
//     // onClick={handleSubmit}
//     type="submit">
//       UPDATE
//     </Button>
//   </div>
// </section>
