import axios from "axios";
import React, { useState } from "react";

export default function PatientEdit(props) {
  const { row, list, index } = props;
  const [patient_name, setPatient_Name] = useState(row.patient_name);
  const [patient_surname, setPatient_Surname] = useState(row.patient_surname);
  const [patient_age, setPatient_Age] = useState(row.patient_age);
  const [patient_illness, setPatient_Illness] = useState(row.patient_illness);

  const onClickEdit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/patient/update/" + row.id, {
      patient_name,
      patient_surname,
      patient_age,
      patient_illness,
    });
    list(true);
  };

  return (
    <tr key={index}>
      <td>{row.id}</td>
      <td>
        <input
          onChange={(e) => setPatient_Name(e.target.value)}
          value={patient_name}
          type="text"
        ></input>
        <input
          onChange={(e) => setPatient_Surname(e.target.value)}
          value={patient_surname}
          type="text"
        ></input>
        <input
          onChange={(e) => setPatient_Age(e.target.value)}
          value={patient_age}
          type="text"
        ></input>
        <input
          onChange={(e) => setPatient_Illness(e.target.value)}
          value={patient_illness}
          type="text"
        ></input>
        <button
          onClick={onClickEdit}
          style={{ backgroundColor: "#f8f9fa", color: "#d63384" }}
        >
          EDIT
        </button>
      </td>
    </tr>
  );
}
