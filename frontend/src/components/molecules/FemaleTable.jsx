import React, { useEffect, useState } from "react";
import axios from "axios";
export default function FemaleTable({id}) {
  const [pacienteGineco,setPacienteGineco]= useState([]);
  const getPacienteGineco = () => {
    axios
      .get("http://localhost:8080/api/v1/gineco/buscar/"+ id)
      .then((response) => {
        setPacienteGineco(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPacienteGineco();
  }, []);
    return (
        <table class="tablaS" style={{width:"60vw"}}>
          <thead>
            <tr>
              <th scope="col" className="left-th">
                MPF
              </th>
              <th scope="col" >Detección Oportuna de CA de mama</th>
              <th scope="col"  >
                FUM
              </th>
              <th scope="col" className="right-th">Papanicolau</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >{pacienteGineco[0]?.[5]}</td>
              <td>{pacienteGineco[0]?.[3]}</td>
              <td >{pacienteGineco[0]?.[6]}</td>
              <td>{pacienteGineco[0]?.[2]}</td>
            </tr>
          </tbody>
        </table>
    );
  }
  