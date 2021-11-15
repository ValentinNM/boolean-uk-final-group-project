import { useEffect, useState } from "react";

export default function EditCreateAddressForm(props) {

  console.log("Inside props ", props);
  const { contactEdit, address, SetAddress } = props;
  
  const [houseNumber, setHouseNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("Inside contact to Edit: ", contactEdit);
    if (contactEdit) {
      setHouseNumber(contactEdit.houseNumber);
      setStreetName(contactEdit.streetName);
      setCity(contactEdit.city);
      setPostcode(contactEdit.postcode);
      setCountry(contactEdit.country);
    }
  }, [contactEdit]);

  const handleHouseNumber = (event) => {
    console.log("Inside handlers ", event.target.value);
    setHouseNumber(event.target.value);
  };
  const handleStreetName = (event) => {
    console.log("Inside handlers ", event.target.value);
    setStreetName(event.target.value);
  };

  const handleCity = (event) => {
    console.log("Inside handlers ", event.target.value);
    setCity(event.target.value);
  };

  const handlePostcode = (event) => {
    console.log("Inside handlers ", event.target.value);
    setPostcode(event.target.value);
  }

    const handleCountry = (event) => {
      console.log("Inside handlers ", event.target.value);
      setCountry(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();

      const addressToUpdate = {
        houseNumber,
        streetName,
        city,
        postcode,
        country,
      };
      const fetchAddressToUpdate = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addressToUpdate),
      };
      const addressUrl = `${API_URL}/address/${contactEdit.id}`;
      fetch(addressUrl, fetchAddressToUpdate)
        .then((res) => res, json())
        .then((updatedAddress) => {
          console.log("Inside updateAddres: ", updatedAddress);
          const updatedAddresses = address.map((addres) => {
            if (addres.id === contactEdit.id) {
              return {
                ...updatedAddress,
              };
            } else {
              return addres;
            }
          });
          SetAddress(updatedAddresses)
        });
   
  };
  return (
    <section>
      <h2>Edit Address Details</h2>
      <form
        onSubmit={handleSubmit}
        className="form-stack light-shadow center form-stack"
      >
        <label htmlFor="houseNumber">House Number:</label>
        <input
          type="text"
          id="houseNumber"
          name="houseNumber"
          value={houseNumber}
          onChange={handleHouseNumber}
        />
        <label htmlFor="streetName">Name of Street:</label>
        <input
          type="text"
          id="streetName"
          name="streetName"
          value={streetName}
          onChange={handleStreetName}
        />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={handleCity}
        />
        <label htmlFor="postcode">Post Code:</label>
        <input
          type="text"
          id="postcode"
          name="postcode"
          value={postcode}
          onChange={handlePostcode}
        />
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={country}
          onChange={handleCountry}
        />
      </form>
      <div>
        <button onClick={handleSubmit} type="submit">
          Update Address
        </button>
      </div>
    </section>
  );
}
