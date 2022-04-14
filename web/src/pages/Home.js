import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> HOME </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item" >
              <Link className="nav-link active" aria-current="page" to="about"  > About </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="patients"> Patients </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="medicines"> Medicines </Link>
            </li>
          </ul>
          <form className="d-flex">
          </form>
        </div>
      </div>
    </nav>
    
    // <div className="fixed-top m-2">
    //     <h1> HOME </h1>
    //     <Link className={"mx-5 text-decoration-none link-danger"} to="about"> ABOUT </Link>
    //     <Link className={"mx-5 text-decoration-none link-danger"} to="patients"> PATIENTS </Link>
    //     <Link className={"mx-5 text-decoration-none link-danger"} to="medicines"> MEDICINES </Link>
    //   </div>
  );
}
