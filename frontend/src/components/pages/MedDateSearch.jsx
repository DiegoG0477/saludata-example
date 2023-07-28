import Title from "../atoms/Title";
import "../../styles/organisms.css";
import "../../styles/atoms.css";
import InputLabel from "../atoms/InputLabel";
import DatePick from "../atoms/DatePick";
import ColumnButton from "../atoms/ColumnButton";
import "../../App.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { generarId } from "../../data/connector";

export default function MedDateSearch(props) {
  const [consultas, setConsultas] = useState([]);

  const [nombre, setNombre] = useState("");
  const [apellidoMat, setApellidoMat] = useState("");
  const [apellidoPat, setApellidoPat] = useState("");
  const [fechaNaci, setFechaNaci] = useState("");
  const [fecha, setFecha] = useState("");
  const id= generarId(nombre,apellidoMat,apellidoPat,fechaNaci);
  
    const getConsultas =  () => {
      axios
      .get("http://localhost:8080/api/v1/consultas/tabla")
      .then((response) => {
        setConsultas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };

    useEffect(() => {
    getConsultas();
  }, []);

  const getConsultaEspe = () => {
    axios
    .get("http://localhost:8080/api/v1/consultas/buscarEspe/"+ id +"?fecha="+simplificarFechaEntrada(fecha))
    .then((response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setConsultas(response.data); 
          Swal.fire({
            icon: 'success',
            title: 'Se encontro el paciente',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          getConsultas();
          Swal.fire({
            icon: 'warning',
            title: 'no se encotro el paciente',
            showConfirmButton: false,
            timer: 1500
          });
        }
    })
    .catch((error) => {
      console.log(error);
    });
};
function buscar(){
  if (!nombre || !apellidoPat || !apellidoMat || !fecha || !fechaNaci) {
    Swal.fire({
      icon: 'warning',
      title: 'Llene todos los campos para buscar',
      showConfirmButton: false,
      timer: 1500
    });
    return;
  }
  getConsultaEspe();
}
  function simplificarFecha(fechaCompleta) {
    const fecha = new Date(fechaCompleta);
    const dia = fecha.getDate() +1;
    const mes = fecha.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
    const año = fecha.getFullYear();

    // Formatear la fecha como 'dd/mm/yyyy' o 'mm/dd/yyyy' (dependiendo de tu preferencia)
    const fechaSimplificada = `${dia < 10 ? "0" : ""}${dia}/${
      mes < 10 ? "0" : ""
    }${mes}/${año}`;

    return fechaSimplificada;
  }
  function simplificarFechaEntrada(fechaCompleta) {
    const fecha = new Date(fechaCompleta);
    const dia = fecha.getDate() ;
    const mes = fecha.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
    const año = fecha.getFullYear();

    // Formatear la fecha como 'dd/mm/yyyy' o 'mm/dd/yyyy' (dependiendo de tu preferencia)
    const fechaSimplificada = `${dia < 10 ? "0" : ""}${año}/${
      mes < 10 ? "0" : ""
    }${mes}/${dia}`;

    return fechaSimplificada;
  }
    return (
      <>
    <div className="system-content">
      <Title text="Historial de Consultas" />
      <h6 style={{ fontWeight: "bold" }}>
        Ingrese los datos de la consulta a buscar
      </h6>

      <div
        style={{
          marginTop: "3vh",
          display: "flex",
          justifyContent: "space-between",
          width: props.ancho + "vw",
          marginBottom: "-3vh"
        }}
      >
        <InputLabel
          text="Nombres del Paciente"
          holder="Ingrese el nombre(s) del paciente"
          ancho={props.labelAncho}
          metodo={setNombre}
        />
        <InputLabel
          text="Apellido Paterno Paciente"
          holder="Ingrese apellido paterno del paciente"
          ancho={props.labelAncho}
          metodo={setApellidoPat}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "78vw",
          marginTop: "2vw"
        }}
      >
        <InputLabel
            text="Apellido Materno del Paciente"
            holder="Ingrese apellido materno del paciente"
            ancho={props.labelAncho}
            metodo={setApellidoMat}
          />
        {/* Contenido para el formulario de búsqueda de fecha */}
          <div style={{
          display: "flex",
          justifyContent: "space-between",
          width: "33vw",
          marginRight:"3vw"
          }}>
            <div style={{ width:"13vw"}}>
              <p className="form-label" style={{ fontWeight: "bold" }}>
                Fecha de Nacimiento
              </p>
              <div className="input-search-container" style={{ width: props.anchoPicker + "vw", height: "8vh"}}>
                <DatePick className="date" format="dd/MM/yyyy" metodo={setFechaNaci}/>
              </div>
            </div>
            <div style={{width:"13vw" }}>
              <p className="form-label" style={{ fontWeight: "bold" }}>
              Fecha de Consulta
              </p>
              <div className="input-search-container" style={{ width: props.anchoPicker + "vw", height: "8vh"}}>
                <DatePick className="date" format="dd/MM/yyyy" metodo={setFecha}/>
              </div>
            </div>
          </div>
        
      </div>

      <button className="btn btn-primary globalButton" 
      style={{marginTop:"0.2vw", height:"3vw",marginLeft:"42vw", width:"36vw"}} onClick={buscar}>Buscar</button>


      <div className="tabla-container" style={{ maxHeight: "30vh", overflow: "auto", marginTop:"1vw"}}>
        <table className="tablaS" style={{ width: "78vw" }}>
          <thead>
            <tr>
              <th scope="col" className="left-th">
                Nombre Completo
              </th>
              <th scope="col">Fecha</th>
              <th scope="col">Motivo de Consulta</th>
              <th scope="col" className="right-th">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {
              consultas.map((consulta, index) => (
                <tr key={index}>
                  <th  scope="row">
                    {consulta[0]+" "+consulta[1]+" " +consulta[2]}
                    </th>
                  <td>{simplificarFecha(consulta[4])}</td>
                  <td>{consulta[5]}</td>
                  <td>
                  <div type="button">
                      <Link to={`/file-summary/${consulta[3]}/${consulta[4]}`}>
                        <ColumnButton
                          color={props.color}
                          text={props.botonText}
                        ></ColumnButton>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>


      </> 
      );

}
        
                        
                

                  
              
          
   
              

