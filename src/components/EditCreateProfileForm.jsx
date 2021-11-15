import { useEffect, useState } from "react";

export default function EditCreateProfileForm(props) {
  console.log("Inside props ", props);
  const { contactEdit, profile, setProfile } = props;

  const [picture, setPicture] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("Inside contact to Edit: ", contactEdit);
    if (contactEdit) {
      setPicture(contactEdit.picture);
      setFirstName(contactEdit.FirsttName);
      setLastname(contactEdit.lastname);
    }
  }, [contactEdit]);

  const handlePicture = (event) => {
    console.log("Inside handlers ", event.target.value);
    setPicture(event.target.value);
  };
  const handleFirstName = (event) => {
    console.log("Inside handlers ", event.target.value);
    setFirstName(event.target.value);
  };

  const handleLastname = (event) => {
    console.log("Inside handlers ", event.target.value);
    setLastname(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const profileToUpdate = {
      picture,
      firstName,
      lastname,
    };
    const fetchProfileToUpdate = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileToUpdate),
    };
    const profileURL = `${API_URL}/profile/${contactEdit.id}`;
    fetch(profileURL, fetchProfileToUpdate)
      .then((res) => res, json())
      .then((updatedProfile) => {
        console.log("Inside updatedProfile: ", updatedProfile);
        const updatedProfiles = profile.map((profil) => {
          if (profil.id === contactEdit.id) {
            return {
              ...updatedProfile,
            };
          } else {
            return profil;
          }
        });
        setProfile(updatedProfiles);
      });
  };

  return (
    <section>
      <h2>Edit Profile Details</h2>
      <form
        onSubmit={handleSubmit}
        className="form-stack light-shadow center form-stack"
      >
        <label htmlFor="picture">Profile Pix:</label>
        <input
          type="text"
          id="picture"
          name="picture"
          value={picture}
          onChange={handlePicture}
        />
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleFirstName}
        />
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={lastname}
          onChange={handleLastname}
        />
        <div>
          <button onClick={handleSubmit} type="submit">
            Update Profile
          </button>
        </div>
      </form>
    </section>
  );
}
