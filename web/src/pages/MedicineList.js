import axios from "axios";
import React, { useEffect, useState } from "react";
export default function MedicineList() {
    const [getList, setGetList] = useState(true);
    const [isGetList, setIsGetList] = useState([]);
    const [med_name, setMed_Name] = useState("");
    const [med_type, setMed_Type] = useState("");
    const [med_dose, setMed_Dose] = useState("");
    const [med_dose_type, setMed_Dose_Type] = useState("");

    useEffect(() => {
      if (getList) {
        axios
          .get("http://127.0.0.1:8000/api/medicine")
          .then(function (response) {
            setGetList(false);
            setIsGetList(response.data);
            setMed_Name("");
            setMed_Type("");
            setMed_Dose("");
            setMed_Dose_Type("");
          })
          .catch(function (error) {});
      }
    }, []);

    return (
      <div className="medicine-list-wrapper">
        <div className="overlay" style={{ height: "100vh" }}></div>
        <table className="table table-default table-striped medicine-list">
          <thead>
            <tr>
              <th> ID </th>
              <th> NAME </th>
              <th> TYPE </th>
              <th> DOSE </th>
              <th> DOSE TYPE </th>
            </tr>
          </thead>
          <tbody>
            {isGetList.map((v, i) => (
              <tr key={i}>
                <td>{v.id}</td>
                <td>{v.med_name}</td>
                <td>{v.med_type}</td>
                <td>{v.med_dose}</td>
                <td>{v.med_dose_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
