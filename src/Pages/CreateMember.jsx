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
    console.log("inputName: ", event.target.name);

    const inputValue = event.target.value;
    console.log("inputValue: ", event.target.value);

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
    <section className="two-column-grid-forms">
      <div className="available-classes">
        <h2>Available Classes: </h2>
        <ul>
          <li className="two-column-grid-expand__right">
            <div></div>
            <div>
              <Button variant="contained">Enroll</Button>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <Box
          onSubmit={handleSubmit}
          className=" two-column-grid-expand__right"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="of"
        >
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
          {/* might be worth making this dropdown SELECT option */}
          <TextField
            required
            onChange={handleInput}
            id="outlined-required"
            name="membershipStatus"
            label="Status"
          />
          <div>
            <h3>Profile Details:</h3>
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
          <div>
            <h3>Address Details: </h3>
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
          <div>
            <Button variant="contained" type="submit">
              ADD
            </Button>
          </div>
        </Box>
      </div>
    </section>
  );
}
