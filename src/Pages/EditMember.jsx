import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function EditMember(props) {

  const { memberToView, members, setMembers } = props;

  const API_URL = process.env.REACT_APP_API_URL;

  const [memberToEdit, setMemberToEdit] = useState({
    userName: "",
    membershipType: "",
    membershipStatus: "",
    picture: "smth",
    firstName: "",
    lastname: "",
    houseNumber: 0,
    streetName: "",
    city: "",
    postcode: "",
    country: "",
  })

  return (
    <section className="two-column-grid-forms">
      <div className="available-classes">
        <h2>Available Classes: </h2>
        <ul>
              <li className="two-column-grid-expand__right">
                <div>
                  {/* <h3>Class: {} </h3> */}
                </div>
                <div>
                  <Button variant="contained">Enroll</Button>
                </div>
              </li>
        </ul>
      </div>
      <div>
        <Box
          // onSubmit={handleSubmit}
          className=" two-column-grid-expand__right"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="of"
        >
          <TextField
            // onChange={}
            type="text"
            required
            id="outlined-required"
            label="Username"
            // defaultValue={}
            // value={}
          />
          <TextField
            required
            // onChange={}
            id="outlined-required"
            label="Memberships"
            // defaultValue={}
            // value={}
          />
          {/* might be worth making this dropdown SELECT option */}
          <TextField
            required
            // onChange={}
            id="outlined-required"
            label="Status"
            // defaultValue={}
            // value={}
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