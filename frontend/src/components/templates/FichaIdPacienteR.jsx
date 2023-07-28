import InputLabel from "../atoms/InputLabel";
import DatePick from "../atoms/DatePick";
import "../../styles/atoms.css";
import "../../styles/organisms.css";
import { useState } from "react";
import NextButton from "../atoms/NextButton";
import { superPaciente } from "../../data";
import AntecedentesModalW from "./AntecedentesModalW";

export default function FichaIdPacienteR() {
  const [selectedOption, setSelectedOption] = useState("Sexo");
  const [nombre, setNombre] = useState("");
  const [apellidoP, setApellidoP] = useState("");
  const [apellidoM, setApellidoM] = useState("");
  const [calle, setCalle] = useState("");
  const [colonia, setColonia] = useState("");
  const [cp, setCp] = useState("");
  const [numCasa, setNumCasa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fechaNacim, setFechaNacim] = useState("");
  const [religion, setReligion] = useState("");
  const [sexo, setSexo] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  function guardarDatos() {
    superPaciente.nombre = nombre;
    superPaciente.apellidoPat = apellidoP;
    superPaciente.apellidoMat = apellidoM;
    superPaciente.calle = calle;
    superPaciente.colonia = colonia;
    superPaciente.cp = parseInt(cp, 10);
    superPaciente.numeroCasa = parseInt(numCasa, 10);
    superPaciente.telefono = parseInt(telefono, 10);
    superPaciente.fechaNacimiento = fechaNacim;
    superPaciente.religion = religion;
    superPaciente.sexo = sexo;

  }

  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content modal-window-content">
            <div class="modal-body">
              <h4 className="modal-win-title">Ficha de identificacion</h4>
              <h6 className="modal-win-title">
                Por favor, ingrese los datos pertinentes del nuevo paciente
              </h6>
              <div
                style={{
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel
                  text="Nombre(s) del Paciente"
                  holder="Ingrese el nombre(s) del paciente"
                  ancho={20}
                  metodo={setNombre}
                />
                <InputLabel
                  text="Apellido Paterno"
                  holder="Ingrese el apellido del paciente"
                  ancho={20}
                  metodo={setApellidoP}
                />
                <InputLabel
                  text="Apellidos Materno"
                  holder="Ingrese el apellido del paciente"
                  metodo={setApellidoM}
                  ancho={20}
                />
              </div>

              <div
                style={{
                  marginTop: "1vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel
                  text="Calle"
                  holder="Ingrese la Calle"
                  ancho={15}
                  metodo={setCalle}
                />
                <InputLabel
                  text="Colonia"
                  holder="Ingrese la Colonia"
                  ancho={15}
                  metodo={setColonia}
                />
                <InputLabel
                  text="Codigo Postal"
                  holder="Ingrese el Codigo Postal"
                  ancho={15}
                  metodo={setCp}
                />
                <InputLabel
                  text="Numero de Casa"
                  holder="Ingrese el Numero de Casa"
                  ancho={15}
                  metodo={setNumCasa}
                />
              </div>
              <div
                style={{
                  marginTop: "1vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel
                  text="Numero de Telefono"
                  holder="Ingrese el Numero de Telefono"
                  ancho={18}
                  metodo={setTelefono}
                />
                <div className="input-box">
                  <p
                    // htmlFor="birthdate"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Fecha de Nacimiento del Paciente
                  </p>
                  <div
                    className="input-search-container"
                    style={{ height: "8vh" }}
                  >
                    <DatePick fecha={fechaNacim} metodo={setFechaNacim}/>
                  </div>
                </div>
                <InputLabel
                  text="Religion"
                  holder="Ingrese la Religion"
                  ancho={12}
                  metodo={setReligion}
                />
                <div
                  style={{
                    marginTop: "35px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "5.9vw",
                  }}
                >
                  <div>
                    <div class="dropdown">
                      <button
                        class="btn collapse-button dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {selectedOption}
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <button
                            class="dropdown-item"
                            onClick={() => {
                              handleOptionClick("Masculino");
                              setSexo("M");
                            }}
                          >
                            Masculino
                          </button>
                        </li>
                        <li>
                          <button
                            class="dropdown-item"
                            onClick={() => {
                              handleOptionClick("Femenino");
                              setSexo("F");
                            }}
                          >
                            Femenino
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer modal-buttons-section">
              <button
                type="button"
                class="btn globalButton-red"
                data-bs-dismiss="modal"
                // onClick={() => handleOptionClick("Sexo")}
              >
                Cerrar
              </button>
              <NextButton page="#staticBackdrop2" accion = {guardarDatos}/>
            </div>
          </div>
        </div>
      </div>

      <AntecedentesModalW sexo={sexo}/>
    </>
  );
}
