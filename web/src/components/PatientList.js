// import axios from "axios";
// import {useState} from "react";

// export default function PatientList(props){
//     const patients = props.patients;
//     // const [getList, setGetList] = useState(true);
//     // const [selectedRow, setSelectedRow] = useState();
//     // const [patient_name, setPatient_Name] = useState("");
//     // const [patient_surname, setPatient_Surname] = useState("");
//     // const [patient_age, setPatient_Age] = useState("");
//     // const [patient_illness, setPatient_Illness] = useState("");
    
    
//     const listItems = patients.map((patient)=>
//       <li> PATIENTS </li>
//     );
//     return(
//       <u1> {listItems} </u1>
//     );

//     // const onClickSave=()=>{
//     //  axios.post("http://127.0.0.1:8000/api/patient/new", {
//     //       patient_name,
//     //       patient_surname,
//     //       patient_age,
//     //       patient_illness,
//     //     });
//     // }

//     // const onClickRow=(v)=>{
//     //   setSelectedRow(v);
//     // }

//     // return (
//     //   <form>
//     //     <div className="App">
//     //       <input
//     //         onChange={(e) => setPatient_Name(e.target.value)}
//     //         value={patient_name}
//     //         placeholder="İsminizi giriniz..."
//     //       />
//     //       <br />
//     //       <input
//     //         onChange={(e) => setPatient_Surname(e.target.value)}
//     //         value={patient_surname}
//     //         placeholder="Soyisminizi giriniz..."
//     //       />
//     //       <br />
//     //       <input
//     //         onChange={(e) => setPatient_Age(e.target.value)}
//     //         value={patient_age}
//     //         placeholder="Yaşınızı giriniz..."
//     //       />
//     //       <br />
//     //       <input
//     //         onChange={(e) => setPatient_Illness(e.target.value)}
//     //         value={patient_illness}
//     //         placeholder="Hastalığınızı giriniz..."
//     //       />
//     //       <br />
//     //       {/* <button onClick={(e) => onClickSave(e)}>SAVE</button> */}

//     //       <table className={"table table-striped table-hover"}>
//     //         <thead>
//     //           <tr>
//     //             <th> ID </th>
//     //             <th> NAME </th>
//     //             <th> SURNAME </th>
//     //             <th> AGE </th>
//     //             <th> ILLNESS </th>
//     //           </tr>
//     //         </thead>

//             {/* <tbody>
//                 {getList.map((v,i)=>{
//                     if(v === selectedRow){
//                         return(
//                             <PatientList row={v} key={i} list={(e)=> setGetList(e)} />
//                         );
//                     }
//                     else{
//                       return (
//                         <tr onClick={() => onClickRow(v)}>
//                           <td>{v.id}</td>
//                           <td>{v.patient_name}</td>
//                           <td>{v.patient_surname}</td>
//                           <td>{v.patient_age}</td>
//                           <td>{v.patient_illness}</td>
//                         </tr>
//                       ); 
//                     }
//                 })}
//             </tbody> */}
//       //     </table>
//       //   </div>
//       // </form>
//     // );







// }