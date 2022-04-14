import React, { useEffect, useState } from "react";
import axios from "axios";
import PatientDelete from "./PatientDelete";
import PatientEdit from "./PatientEdit";

export default function PatientList() {
  const [getList, setGetList] = useState(true);
  const [isGetList, setIsGetList] = useState([]);
  const [selectedRow, setSelectedRow] = useState({});
  const [patient_name, setPatient_Name] = useState("");
  const [patient_surname, setPatient_Surname] = useState("");
  const [patient_age, setPatient_Age] = useState("");
  const [patient_illness, setPatient_Illness] = useState("");

  useEffect(() => {
    if (getList) {
      axios
        .get("http://127.0.0.1:8000/api/patient")
        .then(function (response) {
          setGetList(false);
          setIsGetList(response.data);
          setPatient_Name("");
          setPatient_Surname("");
          setPatient_Age("");
          setPatient_Illness("");
        })
        .catch(function (error) {});
    }
  });

  const onClickRow = (v) => {
    setSelectedRow(v);
  };

  return (
    <div className="medicine-list-wrapper">
      <div className="overlay" style={{ height: "100vh" }}></div>
      <table className="table table-default table-striped patient-list">
        <thead>
          <tr>
            <th> ID </th>
            <th> NAME </th>
            <th> SURNAME </th>
            <th> AGE </th>
            <th> ILLNESS </th>
           
          </tr>
        </thead>

        <tbody>
          {isGetList.map((v, i) => {
            if (v === selectedRow) {
              return (
                  <PatientEdit row={v} key={i} list={(e) => setGetList(e)} />
              );
            } else {
              return (
                <tr onClick={() => onClickRow(v)}>
                  <td>{v.id}</td>
                  <td>{v.patient_name}</td>
                  <td>{v.patient_surname}</td>
                  <td>{v.patient_age}</td>
                  <td>{v.patient_illness}</td>
                  <PatientDelete row={v} key={i} list={(e) => setGetList(e)} />
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
