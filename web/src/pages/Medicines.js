import React from "react";
import { Link } from "react-router-dom";

export default function Medicines() {
  return (
    <form className="medicines">
      <div className="container-fluid fixed-top mt-5">
        <h1 className="row g-3 align-items-center mt-4 "> MEDICINES </h1>
        <Link to="/medicine-submit">
          <button>MedicineSubmit</button>
        </Link>
        <Link to="/medicine-list">
          <button>MedicineList</button>
        </Link>
      </div>
    </form>
  );
}
