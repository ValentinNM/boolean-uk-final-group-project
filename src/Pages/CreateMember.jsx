import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function CreateMember(props) {
  const { members, setMembers } = props;

  const API_URL = process.env.REACT_APP_API_URL;

  const [memberToCreate, setMemberToCreate] = useState({
    userName: "",
    membershipType: "",
    membershipStatus: ""
  });
const [profileToCreate, setProfileToCreate] = useState({
  picture: "smth",
  firstName: "",
  lastname: ""
})
const [addressToCreate, setAddressToCreate] = useState({
    houseNumber: 0,
    streetName: "",
    city: "",
    postcode: "",
    country: "",
})

  const handleSubmit = (event) => {
    console.log("Submiting form");
    event.preventDefault();

    const newMember = {
      ...memberToCreate,
      profile: {
        ...profileToCreate,
        address: {
          ...addressToCreate
        }
      }
      }

    console.log("newMember on handleSubmit: ", newMember);

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMember),
    };

    fetch(`${API_URL}/members/add`, fetchOptions)
      .then((res) => res.json())
      .then((newAddedMemeber) => {
        console.log("newAddedMemeber inside fetch: ", newAddedMemeber);
        setMembers([...members, newAddedMemeber])
      });
  };

  const handleInput = (event) => {
    const inputName = event.target.name;

    const inputValue = event.target.value;

    setMemberToCreate({
      ...memberToCreate,
      [inputName]: inputValue,
    });

    setProfileToCreate({
      ...profileToCreate,
      [inputName]: event.target.value,
    })

    setAddressToCreate({
      ...addressToCreate,
      [inputName]: event.target.value,
    })
  };

  return (
    <section className="center-style-member-forms">
      <div className=" padding-bottom available-classes">
        <h2> Enroll member </h2>
      </div>
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="of"
        >
          <div className="two-column-grid-expand__right">
          <div className="two-combined">
           <h3>Required *</h3>
          <TextField
            onChange={handleInput}
            type="text"
            name="userName"
            required
            id="outlined-required"
            label="Username"
          />
          <TextField
            required
            onChange={handleInput}
            id="outlined-required"
            name="membershipType"
            label="Memebership Type"
          />
          <TextField
            required
            onChange={handleInput}
            id="outlined-required"
            name="membershipStatus"
            label="Status"
          />
            <h3>Profile: </h3>
            <TextField
              required
              onChange={handleInput}
              id="outlined-required"
              name="firstName"
              label="First Name"
              />
            <TextField
              required
              onChange={handleInput}
              id="outlined-required"
              name="lastname"
              label="Last Name"
              />
            </div>
            <div className="address">
            <h3>Address: </h3>
            <TextField
              required
              onChange={handleInput}
              id="outlined-required"
              name="houseNumber"
              label="House No"
            />
            <TextField
              required
              onChange={handleInput}
              id="outlined-required"
              name="street"
              label="Street"
            />
            <TextField
              required
              onChange={handleInput}
              id="outlined-required"
              name="city"
              label="City"
            />
            <TextField
              required
              onChange={handleInput}
              id="outlined-required"
              name="postcode"
              label="POSTCODE"
            />
            <TextField
              required
              onChange={handleInput}
              id="outlined-required"
              name="country"
              label="Country"
            />
          </div>
          </div>
          <div className="align-end">
            <Button variant="contained" type="submit">
              ADD
            </Button>
          </div>
        </Box>
    </section>
  );
}
