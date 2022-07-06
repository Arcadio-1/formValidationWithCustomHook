import { useState } from "react";

const BasicForm = () => {
  const [name, setName] = useState("");
  const [nameVali, setNameVali] = useState(false);
  const [nameTuched, setNametuched] = useState(false);
  let namevalidation = nameTuched && !nameVali;

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    if (name.trim() !== "") {
      setNameVali(true);
    }
  };
  const nameBlurHandler = () => {
    setNametuched(true);
    if (name.trim() !== "") {
      setNameVali(true);
    } else {
      console.log(name.trim());
      setNameVali(false);
    }
  };

  const [age, setAge] = useState("");
  const [ageVali, setAgeVali] = useState(false);
  const [ageTuched, setAgetuched] = useState(false);
  let agevalidation = ageTuched && !ageVali;

  const ageChangeHandler = (e) => {
    // console.log(e.target.value);
    setAge(e.target.value);
    if (age > 0) {
      setAgeVali(true);
    }
  };

  const ageBlurHandler = () => {
    setAgetuched(true);
    if (age > 0) {
      setAgeVali(true);
    } else {
      setAgeVali(false);
    }
  };

  const [email, setEmail] = useState("");
  const [emailVali, setEmailVali] = useState(false);
  const [emailTuched, setEmailtuched] = useState(false);
  let emailvalidation = emailTuched && !emailVali;

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    if (email.trim().includes("@")) {
      setEmailVali(true);
    }
  };
  const emailBlurHandler = () => {
    setEmailtuched(true);
    if (email.trim().includes("@")) {
      setEmailVali(true);
    } else {
      setEmailVali(false);
    }
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(nameVali, ageVali, emailVali);
    if (nameVali && ageVali && emailVali) {
      console.log("succesfull");
      setName("");
      setAge("");
      setEmail("");
      setNametuched(false);
      setAgetuched(false);
      setEmailtuched(false);
    }
  };

  return (
    <form onSubmit={SubmitHandler} className="signup">
      <div className="sec signup-name">
        <div className="sec-enter">
          <label htmlFor="name">name</label>
          <input
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={name}
            id="name"
            type="text"
          />
        </div>
        {namevalidation && <p>please enter name !</p>}
      </div>
      <div className="sec signup-age">
        <div className="sec-enter">
          <label htmlFor="age">age</label>
          <input
            onChange={ageChangeHandler}
            onBlur={ageBlurHandler}
            value={age}
            id="age"
            type="number"
          />
        </div>
        {agevalidation && <p>please enter age !</p>}
      </div>
      <div className="sec signup-email">
        <div className="sec-enter">
          <label htmlFor="email">email</label>
          <input
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={email}
            id="email"
            type="email"
          />
        </div>
        {emailvalidation && <p>please enter email !</p>}
      </div>
      <button>submit</button>
    </form>
  );
};
export default BasicForm;
