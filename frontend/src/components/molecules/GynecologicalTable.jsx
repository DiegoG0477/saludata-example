import React, { useEffect, useState } from "react";
import axios from "axios";
export default function GynecologicalTable(props) {
  const [pacienteGinecoLetras,setPacienteGinecoLetras]= useState([]);
  const getPacienteGinecoLetras = () => {
    axios
      .get("http://localhost:8080/api/v1/ginecoLetras/buscar/"+ props.id)
      .then((response) => {
        setPacienteGinecoLetras(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPacienteGinecoLetras();
  }, []);
    return (
        <table class="tablaS" style={{width:"40vw"}}>
          <thead>
            <tr>
              <th scope="col" className="left-th">
                G
              </th>
              <th scope="col" >P</th>
              <th scope="col"  >
                A
              </th>
              <th scope="col" className="right-th">C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >{pacienteGinecoLetras[0]?.[0]}</td>
              <td>{pacienteGinecoLetras[0]?.[1]}</td>
              <td >{pacienteGinecoLetras[0]?.[2]}</td>
              <td>{pacienteGinecoLetras[0]?.[3]}</td>
            </tr>
          </tbody>
        </table>
    );
  }
  