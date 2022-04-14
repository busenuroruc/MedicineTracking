import React, { useState } from "react";
import axios from "axios";

export default function PatientSubmit() {
  const [getList, setGetList] = useState(true);
  const [isGetList, setIsGetList] = useState([]);
  const [patient_name, setPatient_Name] = useState("");
  const [patient_surname, setPatient_Surname] = useState("");
  const [patient_age, setPatient_Age] = useState("");
  const [patient_illness, setPatient_Illness] = useState("");

  const onClickSave = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/patient/new", {
      patient_name,
      patient_surname,
      patient_age,
      patient_illness,
    });
    setIsGetList(true);
    // console.log(patient_name, patient_surname, patient_age);
  };

  return (
    <>
      <div className="medicine-submit-wrapper">
        <div className="overlay"></div>
        <input
          value={patient_name}
          onChange={(e) => setPatient_Name(e.target.value)}
          placeholder="Please put your name..."
        />
        <input
          value={patient_surname}
          onChange={(e) => setPatient_Surname(e.target.value)}
          placeholder="Please put your surname..."
        />
        <input
          value={patient_age}
          onChange={(e) => setPatient_Age(e.target.value)}
          placeholder="Please put your age..."
        />
        <input
          value={patient_illness}
          onChange={(e) => setPatient_Illness(e.target.value)}
          placeholder="Please put your illness..."
        />
        <button className="button" onClick={(e) => onClickSave(e)}>
          SAVE
        </button>
      </div>
    </>
  );
}
