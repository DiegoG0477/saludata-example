import axios from "axios";
import React, { useEffect, useState } from "react";
export default function SummaryTable(props) {
    const [pacienteServicios, setPacienteServicios] = useState([]);
    const [pacienteAntecedentesNo, setPacienteAntecedentesNo] = useState([]);
    const getPacienteServicios = () => {
      axios
        .get("http://localhost:8080/api/v1/servicios/buscar/"+ props.id)
        .then((response) => {
          setPacienteServicios(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const getPacienteAntecedentesNo = () => {
      axios
        .get("http://localhost:8080/api/v1/ancedentesNoPatologicos/buscar/"+ props.id)
        .then((response) => {
          setPacienteAntecedentesNo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    useEffect(() => {
      getPacienteServicios();
      getPacienteAntecedentesNo();
    }, []);
    
    let luz="NO";
    let aguaPotable="NO";
    let drenaje="NO";
    let cocina="NO";
   
    for (let i = 0; i < pacienteServicios.length; i++) {
      if(pacienteServicios[i]=="Luz"){
        luz="SI"
      }else if(pacienteServicios[i]=="Agua Potable"){
        aguaPotable="SI"
      }else if(pacienteServicios[i]=="Drenaje"){
        drenaje="SI"
      }else if(pacienteServicios[i]=="Cocina con Leña"){
        cocina="SI"
      }
    }
    
  return (
      <table class="tablaS" style={{width:"40vw"}}>
        <thead>
          <tr>
            <th scope="col" className="left-th">
              Agua Potable
            </th>
            <th scope="col" >Luz</th>
            <th scope="col"  >
              Drenaje
            </th>
            <th scope="col" >Cocina con leña</th>
            <th scope="col" className="right-th">Zoonosis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >{aguaPotable}</td>
            <td>{luz}</td>
            <td >{drenaje}</td>
            <td>{cocina}</td>
            <td>{pacienteAntecedentesNo[0]?.[1]}</td>
          </tr>
        </tbody>
      </table>
  );
}
