import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function EditMemberForm(props) {
  const { memberToProcess, members, setMembers } = props;
  console.log(" EditMemberForm memberToProcess ", memberToProcess);

  const { profile } = memberToProcess;
  const { address} = profile;
  const { houseNumber, streetName, city, postcode, country } = address;

  const [userName, setUserName] = useState("");
  const [membershipType, setMembershipType] = useState("");
  const [membershipStatus, setMembershipStatus] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [pictureToEdit, setPictureToEdit] = useState("");
  const [houseNumberToEdit, setHouseNumberToEdit] = useState(houseNumber);
  const [streetNameToEdit, setStreetNameToEdit] = useState(streetName);
  const [cityToEdit, setCityToEdit] = useState(city);
  const [postcodeToEdit, setPostcodeToEdit] = useState(postcode);
  const [countryToEdit, setCountryToEdit] = useState(country);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (memberToProcess) {
      setUserName(memberToProcess.userName);
      setMembershipType(memberToProcess.membershipType);
      setMembershipStatus(memberToProcess.membershipStatus);
      setFirstName(memberToProcess.firstName);
      setLastname( memberToProcess.lastname);
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

  const handleFirstName = (event) => {
    console.log("Inside handlers ", event.target.value);
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    console.log("Inside handlers ", event.target.value);
    setLastname(event.target.value);
  };

  const handlePicture = (event) => {
    console.log("Inside handlers ", event.target.value);
    setPictureToEdit(event.target.value);
  };

  const handleHouseNumber = (event) => {
    console.log("Inside handlers ", event.target.value);
    setHouseNumberToEdit(event.target.value);
  };

  const handleStreetName = (event) => {
    console.log("Inside handlers ", event.target.value);
    setStreetNameToEdit(event.target.value);
  };

  const handleCity = (event) => {
    console.log("Inside handlers ", event.target.value);
    setCityToEdit(event.target.value);
  };

  const handlePostcode = (event) => {
    console.log("Inside handlers ", event.target.value);
    setPostcodeToEdit(event.target.value);
  };

  const handleCountry = (event) => {
    console.log("Inside handlers ", event.target.value);
    setCountryToEdit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const memberToUpdate = {
      userName,
      membershipType,
      membershipStatus,
      profile: {
        firstName,
        lastname,
        picture: "",
        address: {
          houseNumber,
          streetName,
          city,
          postcode,
          country,
        },
      },
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
    <section  className="center-style-member-forms">
      <div className=" padding-bottom available-classes">
      <h2>Edit Member</h2>
      </div>

      <div>
        <Box
          onSubmit={handleSubmit}
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
              label="First Name"
              name="firstName"
              value={profile.firstName}
              onChange={handleFirstName}
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              name="lastname"
              value={profile.lastname}
              onChange={handleLastName}
            />
          </div>
          <div>
            <h3>Address Details: </h3>
            <TextField
              required
              id="outlined-required"
              label="House No"
              name="houseNumber"
              value={address.houseNumber}
              onChange={handleHouseNumber}
            />
            <TextField
              required
              id="outlined-required"
              label="Street"
              name="streetName"
              value={address.streetName}
              onChange={handleStreetName}
            />
            <TextField
              required
              id="outlined-required"
              label="City"
              name="city"
              value={address.city}
              onChange={handleCity}
            />
            <TextField
              required
              id="outlined-required"
              label="POSTCODE"
              name="postcode"
              value={address.postcode}
              onChange={handlePostcode}
            />
            <TextField
              required
              id="outlined-required"
              label="Country"
              name="country"
              value={address.country}
              onChange={handleCountry}
            />
          </div>
        </Box>
      </div>
      <div className="grid-gap">
        <Button
          variant="contained"
          // onClick={handleSubmit}
          type="submit"
        >
          UPDATE
        </Button>
      </div>
    </section>
  );
}
