import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function EditMemberForm(props) {
  console.log("Inside props ", props);
  const { memberToProcess, members, setMembers } = props;

  const [userName, setUserName] = useState("");
  const [membershipType, setMembershipType] = useState("");
  const [membershipStatus, setMembershipStatus] = useState("");

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("Inside contact to Edit: ", memberToProcess);
    if (memberToProcess) {
      setUserName(memberToProcess.userName);
      setMembershipType(memberToProcess.membershipType);
      setMembershipStatus(memberToProcess.membershipStatus);
    }
  }, [memberToProcess]);

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
    const memberUrl = `${API_URL}/members/${memberToProcess.id}`;
    fetch(memberUrl, fetchMemberToUpdate)
      .then((res) => res, JSON())
      .then((updatedMember) => {
        console.log("INside updated member: ", updatedMember);

        const membershipUpdate = members.map((member) => {
          if (member.id === memberToProcess.id) {
            return {
              ...updatedMember,
            };
          } else {
            return member;
          }
        });
        setMembers(membershipUpdate);
      });
  };

  return (
    <section>
      <h2>Edit Member Only</h2>
      <div>
      <Box
        onSubmit={handleSubmit}
        className="form-stack light-shadow center form-stack"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="of"
    >
      <TextField
       type="text"
          id="userName"
          name="userName"
          value={userName}
          onChange={handleUserName}
       label="Username"
      />
      <TextField
     type="text"
id="membershipType"
name="membershipType"
value={membershipType}
onChange={handleMembershipType}
      />
      <TextField
type="text"
id="membershipStatus"
name="membershipStatus"
value={membershipStatus}
onChange={handleMembershipStatus}
      />
      <div>
        <h3>Profile Details:</h3>
      <TextField
        required
        // onChange={}
        id="outlined-required"
        label="First Name"
        // defaultValue={}
        // value={}
        />
      <TextField
        required
        // onChange={}
        id="outlined-required"
        label="Last Name"
        // defaultValue={}
        // value={}
        />
      </div>
      <div>
          <h3>Address Details: </h3>
      <TextField
        required
        // onChange={}
        id="outlined-required"
        label="House No"
        // defaultValue={}
        // value={}
        />
      <TextField
        required
        // onChange={}
        id="outlined-required"
        label="Street"
        // defaultValue={}
        // value={}
        />
      <TextField
        required
        // onChange={}
        id="outlined-required"
        label="City"
        // defaultValue={}
        // value={}
        />
      <TextField
        required
        // onChange={}
        id="outlined-required"
        label="POSTCODE"
        // defaultValue={}
        // value={}
        />
      <TextField
        required
        // onChange={}
        id="outlined-required"
        label="Country"
        // defaultValue={}
        // value={}
        />
    </div>
    </Box>
  </div>
  <div className="grid-gap">
    <Button variant="contained"
    // onClick={handleSubmit}
    type="submit">
      UPDATE
    </Button>
  </div>
    </section>
  );
}