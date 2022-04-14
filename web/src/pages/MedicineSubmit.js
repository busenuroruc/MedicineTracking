import axios from "axios";
import React, { useState } from "react";
export default function MedicineSubmit() {
  const [getList, setGetList] = useState(true);
  const [isGetList, setIsGetList] = useState([]);
  const [med_name, setMed_Name] = useState("");
  const [med_type, setMed_Type] = useState("");
  const [med_dose, setMed_Dose] = useState("");
  const [med_dose_type, setMed_Dose_Type] = useState("");

  const onClickSave = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/medicine/new", {
      med_name,
      med_type,
      med_dose,
      med_dose_type,
    });
    setIsGetList(true);
  };

  return (
    <>
      <div className="medicine-submit-wrapper">
        <div className="overlay"></div>
        <input
          value={med_name}
          onChange={(e) => setMed_Name(e.target.value)}
          placeholder="Please put your medicine name."
        />
        <input
          value={med_type}
          onChange={(e) => setMed_Type(e.target.value)}
          placeholder="Please put your medicine type. (pill, syrup...)"
        />
        <input
          value={med_dose}
          onChange={(e) => setMed_Dose(e.target.value)}
          placeholder="Please put your medicine dose(a day, week...)"
        />
        <input
          value={med_dose_type}
          onChange={(e) => setMed_Dose_Type(e.target.value)}
          placeholder="Please put your medicine dose type(capsule, liquid...)"
        />
        <button className="button" onClick={(e) => onClickSave(e)}>
          SAVE
        </button>
      </div>
    </>
  );
}
