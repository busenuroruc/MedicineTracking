import React from "react";
import { Link } from "react-router-dom";

export default function Patients() {
  return (
    <form className="patients">
      <div className="container-fluid fixed-top mt-5">
        <h1 className="row g-3 align-items-center mt-4"> PATIENTS </h1>
        <Link to="/patient-submit">
          <button>PatientSubmit</button>
        </Link>
        <Link to="/patient-list">
          <button>PatientList</button>
        </Link>
      </div>
    </form>
  );
}
