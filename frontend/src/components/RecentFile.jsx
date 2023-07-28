import React, { useEffect, useState } from "react";
import "../App.css";
import DatePick from "./atoms/DatePick";
import ColumnButton from "./atoms/ColumnButton";
import "../styles/uploadFile.css";
import "../assets/uploadfile.png";
import InputLabel from "./atoms/InputLabel";
import axios from "axios";
import { Link } from "react-router-dom";
import { generarId } from "../data/connector";
function RecentFile(props) {
    const [archivos, setArchivos] = useState([]);
    const [archivo, setArchivo] = useState([]);
    const [nombre, setNombre] = useState("");
    const [apellidoMat, setApellidoMat] = useState("");
    const [apellidoPat, setApellidoPat] = useState("");
    const [fecha, setFecha] = useState("");
    const id= generarId(nombre,apellidoMat,apellidoPat,fecha);

    const getArchivos = () => {
        axios
            .get("http://localhost:8080/api/v1/archivos/ver")
            .then((response) => {
                setArchivos(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const getArchivosEspe = () => {
        axios
        .get("http://localhost:8080/api/v1/archivos/buscar/"+ id)
        .then((response) => {
          
          if (Array.isArray(response.data) && response.data.length > 0) {
            setArchivos(response.data);
            Swal.fire({
              icon: 'success',
              title: 'Se encontro el paciente',
              showConfirmButton: false,
              timer: 1500
            })
          } else {
            getArchivos();
            Swal.fire({
              icon: 'warning',
              title: 'no se encontro el paciente',
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    console.log(archivos)
    useEffect(() => {
        getArchivos();
    }, []);

    async function buscar(){
        
        if (!nombre || !apellidoPat || !apellidoMat || !fecha) {
            Swal.fire({
              icon: 'warning',
              title: 'Llene todos los campos para buscar',
              showConfirmButton: false,
              timer: 1500
            });
            return;
          }
          getArchivosEspe();
    }
    return (
        <>
            <div className="system-content">
                <h4 style={{ fontWeight: "bold" }}>{props.title}</h4>
                <h6 style={{ fontWeight: "bold" }}>{props.text}</h6>

                {/* width:"82vw" */}
                <div
                    style={{
                        marginTop: "3vh",
                        display: "flex",
                        justifyContent: "space-between",
                        width: props.ancho + "vw",
                        marginBottom: "-3vh",
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
                        width: props.ancho + "vw",
                        marginTop: "2vw",
                    }}
                >
                    <InputLabel
                        text="Apellido Materno del Paciente"
                        holder="Ingrese apellido materno del paciente"
                        ancho={props.labelAncho}
                        metodo={setApellidoMat}
                    />
                    <div style={{ marginRight: props.mover + "vw" }}>
                        <p
                            // htmlFor="birthdate"
                            className="form-label"
                            style={{ fontWeight: "bold" }}
                        >
                            Fecha de Nacimiento del Paciente
                        </p>

                        <div
                            className="input-search-container"
                            style={{ width: props.anchoPicker + "vw", height: "8vh" }}
                        >
                            <DatePick className="date" format="dd/MM/yyyy" metodo={setFecha} />
                            <button className="btn btn-primary globalButton" onClick={buscar}>Buscar</button>
                        </div>
                    </div>
                </div>

                <div className="tabla-container" style={{ maxHeight: "30vh", overflow: "auto", marginTop:"1vw"}}>
                    <table className="tablaS" style={{ width: "78vw" }}>
                        <thead>
                            <tr>
                                <th scope="col" className="left-th">
                                    Nombre Completo
                                </th>
                                <th scope="col">
                                    Nombre Archivo
                                </th>
                                <th scope="col" className="right-th">
                                    Acción
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {archivos.map((val) => (
                                <tr>
                                    <th scope="row">
                                        {val[1] + " " + val[3] + " " + val[2]}
                                    </th>
                                    <td>
                                        {val[4]}
                                    </td>
                                    <td>
                                        <div type="button" >
                                            <ColumnButton abrir="#modalVer" color={props.color} text={props.botonText}></ColumnButton>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="modal fade" id="modalVer" data-bs-backdrop="static" data-bs-keyboard="false"
                tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content modal-window-content">
                        <div className="modal-body">
                            <div className="modal-body">
                                <img
                                    src={archivos[0]?.[5]}
                                    alt="Imagen del archivo"
                                    style={{ maxWidth: "100%" }}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default RecentFile;