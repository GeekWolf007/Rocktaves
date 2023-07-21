import React, { useRef, useState } from "react";
import "../Form/Form.css";

const Form = () => {
  const bandNameRef = useRef(null);
  const numberOfMembersRef = useRef(null);
  const yearOfInceptionRef = useRef(null);
  const cityBasedInRef = useRef(null);
  const contact1NameRef = useRef(null);
  const contact1PhoneRef = useRef(null);
  const contact2NameRef = useRef(null);
  const contact2PhoneRef = useRef(null);
  const contact3NameRef = useRef(null);
  const contact3PhoneRef = useRef(null);
  const venueRef = useRef(null);

  const [selectedVenue, setSelectedVenue] = useState("");

  const handleVenueChange = (event) => {
    setSelectedVenue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const requiredFields = [
      bandNameRef.current,
      numberOfMembersRef.current,
      yearOfInceptionRef.current,
      cityBasedInRef.current,
      contact1NameRef.current,
      contact1PhoneRef.current,
      contact2NameRef.current,
      contact2PhoneRef.current,
    ];
  
    const isAnyFieldEmpty = requiredFields.some((fieldRef) => !fieldRef.value);
  
    if (isAnyFieldEmpty || !selectedVenue) {
      alert("Please fill in all required fields.");
      return;
    }
  
    const numberOfMembersValue = parseInt(numberOfMembersRef.current.value);
    const yearOfInceptionValue = parseInt(yearOfInceptionRef.current.value);
    const isNumberOfMembersValid = !isNaN(numberOfMembersValue);
    const isYearOfInceptionValid = !isNaN(yearOfInceptionValue);
  
    if (!isNumberOfMembersValid || !isYearOfInceptionValid) {
      alert("Number of members and year of inception must be valid numbers.");
      return;
    }
  
    const isPhoneNumberValid = /^[\d-+()]+$/.test(
      contact1PhoneRef.current.value
    ) && /^[\d-+()]+$/.test(contact2PhoneRef.current.value);
  
    if (!isPhoneNumberValid) {
      alert("Invalid phone number format. Please use digits, dashes, and parentheses only.");
      return;
    }
  
    const formData = {
      bandName: bandNameRef.current.value,
      numberOfMembers: numberOfMembersValue,
      yearOfInception: yearOfInceptionValue,
      cityBasedIn: cityBasedInRef.current.value,
      venue: selectedVenue,
      contacts: [
        {
          name: contact1NameRef.current.value,
          phone: contact1PhoneRef.current.value,
        },
        {
          name: contact2NameRef.current.value,
          phone: contact2PhoneRef.current.value,
        },
        {
          name: contact3NameRef.current.value,
          phone: contact3PhoneRef.current.value,
        },
      ],
    };
  
    const apiUrl = "api link";
  
    console.log(formData);
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
      })
      .catch((error) => {
        console.error("Error sending data to API:", error);
      });
  };
  
  

  return (
    <React.Fragment>
      <div className="container">
        <div className="rocktaves__form">
          <h2>BAND INFO</h2>
        </div>
        <form action="" className="form">
          <input
            type="text"
            placeholder="Name of Band"
            className="form__input"
            ref={bandNameRef}
          />
          <label htmlFor="bandname" className="form__label">
            BAND NAME
          </label>

          <input
            type="text"
            placeholder="Number of Members"
            className="form__input"
            ref={numberOfMembersRef}
          />
          <label htmlFor="members" className="form__label">
            NUMBER OF MEMBERS
          </label>

          <input
            type="text"
            placeholder="Year of Inception"
            className="form__input"
            ref={yearOfInceptionRef}
          />
          <label htmlFor="inception" className="form__label">
            YEAR OF INCEPTION OF BAND
          </label>

          <input
            type="text"
            placeholder="City Based In"
            className="form__input"
            ref={cityBasedInRef}
          />
          <label htmlFor="city" className="form__label">
            CITY YOU ARE BASED IN
          </label>

          <div className="venue">
            <p className="venue__para">Venue you can contest in</p>
            <input
              type="radio"
              name="venue"
              value="DELHI"
              id="delhi"
              onChange={handleVenueChange}
              checked={selectedVenue === "DELHI"}
            />
            <label htmlFor="delhi">DELHI</label>
            <input
              type="radio"
              name="venue"
              value="BANGALORE"
              id="bangalore"
              onChange={handleVenueChange}
              checked={selectedVenue === "BANGALORE"}
            />
            <label htmlFor="bangalore">BANGALORE</label>
            <input
              type="radio"
              name="venue"
              value="CHENNAI"
              id="chennai"
              onChange={handleVenueChange}
              checked={selectedVenue === "CHENNAI"}
            />
            <label htmlFor="chennai">CHENNAI</label>
            <input
              type="radio"
              name="venue"
              value="MUMBAI"
              id="mumbai"
              onChange={handleVenueChange}
              checked={selectedVenue === "MUMBAI"}
            />
            <label htmlFor="mumbai">MUMBAI</label>
            <input
              type="radio"
              name="venue"
              value="ONLINE"
              id="online"
              onChange={handleVenueChange}
              checked={selectedVenue === "ONLINE"}
            />
            <label htmlFor="online">ONLINE</label>
          </div>
        </form>
      </div>
      <div className="container">
        <div className="rocktaves__form">
          <h2>CONTACT INFO</h2>
        </div>
        <form action="" className="form2">
          <label htmlFor="contact1">Contact 1</label><br />
          <input
            type="text"
            id="contact1"
            placeholder="Name of Contact"
            ref={contact1NameRef}
          />
          <input
            type="phone"
            placeholder="Phone Number"
            ref={contact1PhoneRef}
          /><br />
          <label htmlFor="contact2">Contact 2</label><br />
          <input
            type="text"
            id="contact2"
            placeholder="Name of Contact"
            ref={contact2NameRef}
          />
          <input
            type="phone"
            placeholder="Phone Number"
            ref={contact2PhoneRef}
          /><br />
          <label htmlFor="contact3">Contact 3 (if any)</label><br />
          <input
            type="text"
            id="contact3"
            placeholder="Name of Contact"
            ref={contact3NameRef}
          />
          <input
            type="phone"
            placeholder="Phone Number"
            ref={contact3PhoneRef}
          />
        </form>
      </div>
      <div className="buttonContainer">
        <button type="submit" className="submitBtn" onClick={handleSubmit}>
          REGISTER
        </button>
      </div>
    </React.Fragment>
  );
};

export default Form;
