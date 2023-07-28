import "../styles/uploadFile.css"
import React, { useState } from "react";
import {DatePicker} from "@mui/x-date-pickers";
import ColumnButton from "./atoms/ColumnButton.jsx";

function MedicalFileSearch() {
    return (
        <>
            <div className="system-content">
                <h4 style={{ fontWeight: "bold" }}>Registro de Pacientes</h4>
                <h6 style={{ fontWeight: "bold" }}>
                    Ingrese los datos de un paciente y la fecha del expedeiente clínico a buscar.
                </h6>

                {/* width:"82vw" */}
                <div
                    style={{
                        marginTop: "3vh",
                        display: "flex",
                        justifyContent: "space-between",
                        width: "78vw",
                        marginBottom: "-3vh",
                    }}
                >
                    <div>
                        <label
                            for="pacient-names"
                            className="form-label"
                            style={{ fontWeight: "bold" }}
                        >
                            Nombre(s) del Paciente
                        </label>
                        <input
                            type="text"
                            className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                            id="pacients-names"
                            placeholder="Ingrese el nombre(s) del paciente"
                            style={{ width: "36vw", height: "8vh" }}
                        />
                    </div>

                    <div>
                        <label
                            for="pacient-lastnames"
                            className="form-label"
                            style={{ fontWeight: "bold" }}
                        >
                            Apellidos del Paciente
                        </label>
                        <input
                            type="text"
                            className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                            id="pacients-lastnames"
                            placeholder="Ingrese los apellidos del paciente"
                            style={{ width: "36vw", height: "8vh" }}
                        />
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "78vw",
                    }}
                >
                    <div>
                        <label
                            for="pacient-lastnames"
                            className="form-label"
                            style={{ fontWeight: "bold" }}
                        >
                            Apellidos del Paciente
                        </label>
                        <input
                            type="text"
                            className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                            id="pacients-lastnames"
                            placeholder="Ingrese los apellidos del paciente"
                            style={{ width: "36vw", height: "8vh" }}
                        />
                    </div>

                    <div>
                        <p
                            // htmlFor="birthdate"
                            className="form-label"
                            style={{ fontWeight: "bold" }}
                        >
                            Fecha de creacion del expediente clínico
                        </p>

                        {/* <DatePicker style={{ width: "36vw", height: "8vh" }}/> */}

                        {/* defaultValue={("2022-04-17")} */}
                        <div className="input-search-container" style={{ width: "36vw", height: "8vh"}}>
                            <DatePicker />
                            <button className="btn btn-primary globalButton">Buscar</button>
                        </div>
                    </div>
                </div>

                <div>
                    <table class="tablaS" >
                        <thead>
                        <tr>
                            <th scope="col" className="left-th">Nombre Completo</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Fecha de creacion</th>
                            <th scope="col" className="right-th">Acción</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Ejemplo Persona</th>
                            <td>06/02/2023</td>
                            <td>24 Años</td>
                            <td>
                                <ColumnButton text="Ver expediente" color="#248087"/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>dssdak</td>
                            <td>Ojfjfo</td>
                            <td>@mui</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default MedicalFileSearch;
