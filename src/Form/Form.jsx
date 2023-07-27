import React, { useRef, useState } from "react";
import "../Form/Form.css";

const Form = ({handleGoBack}) => {
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
  const emailRef = useRef(null);

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
  
    const isPhoneNumberValid =
    /^\d{10}$/.test(contact1PhoneRef.current.value) &&
    /^\d{10}$/.test(contact2PhoneRef.current.value);
  
    if (!isPhoneNumberValid) {
      alert("Invalid phone number format. Please use 10 digits.");
      return;
    }
    const emailValue = emailRef.current.value;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    if (!isEmailValid) {
      alert("Invalid email address format.");
      return;
    }
  
    const formData = {
      name: bandNameRef.current.value,
      number_of_members: numberOfMembersValue,
      music_since: JSON.stringify(yearOfInceptionValue),
      city: cityBasedInRef.current.value,
      venue: selectedVenue,
      phone: contact1PhoneRef.current.value,
      phone2: contact2PhoneRef.current.value,
      phone3: contact3PhoneRef.current.value,
      name1: contact1NameRef.current.value,
      name2: contact2NameRef.current.value,
      name3: contact3NameRef.current.value,
      email_address: emailRef.current.value,
    };
  
    const apiUrl = "https://bits-oasis.org/2023/main/preregistrations/RoctavesOnlineReg/";
  
    console.log(formData);
    console.log(JSON.stringify(formData))
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
        if(data["status"] == 1){
          alert("Your registration is complete!")
        }else{
          alert("There was some error! Please try again")
        }
      })
      .catch((error) => {
        console.error("Error sending data to API:", error);
      });
  };


  return (
    <div className="form_body">
            {/* <div className="btnBack">Back</div> */}
      <div className="formContainer">
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
            placeholder="Your Email"
            className="form__input"
            ref={emailRef}
          />
          <label htmlFor="members" className="form__label">
            Your Email
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
            <div className="inner_venue">
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
              value="KOLKATA"
              id="kolkata"
              onChange={handleVenueChange}
              checked={selectedVenue === "KOLKATA"}
            />
            <label htmlFor="kolkata">KOLKATA</label>
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
          </div>
        </form>
      </div>
      <div className="container">
        <div className="rocktaves__form">
          <h2>CONTACT INFO</h2>
        </div>
        <form action="" className="form2">
          <label htmlFor="contact1">Contact 1</label>
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
          />
          <label htmlFor="contact2">Contact 2</label>
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
          <label htmlFor="contact3">Contact 3 (if any)</label>
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
        <button className="submitBtn" onClick={handleGoBack}>
          BACK
        </button>
        <button type="submit" className="submitBtn" onClick={handleSubmit}>
          REGISTER
        </button>
      </div>
      </div>
    </div>
  );
};

export default Form;
