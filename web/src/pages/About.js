import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <form className="about">
    <div className="container row fixed-top mt-5">
      <h1 className="row g-3 align-items-center mt-4">  ABOUT
       </h1>
       <br/>
      <span> İlaç Takip Sistemi MedicineTracking'e hoşgeldiniz... </span> <br></br>
      <span> Kişisel bilgilerinizi ve ilaç bilgilerinizi girerek ilacınızı kullanmayı artık unutmayacaksınız!.. </span>
    </div>
    </form>
  );
}
