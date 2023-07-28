import InputLabel from "../atoms/InputLabel";
import { useState } from "react";
import "../../styles/atoms.css";
import NextButton from "../atoms/NextButton";
import ReturnButton from "../atoms/ReturnButton";
import PatologicosModalW from "./PatologicosModalW";
import { superPaciente } from "../../data";

export default function AntecedentesModalW(props) {
  const [selectedOption, setSelectedOption] = useState("Estado Civil");

  const [heredosFam, setHeredosFam] = useState("");
  const [originario, setOriginario] = useState("");
  const [residente, setResidente] = useState("");
  const [lenguaIndig, setLenguaIndig] = useState("");
  const [habitaCasa, setHabitaCasa] = useState("");
  const [numHabitantes, setNumHabitantes] = useState("");
  const [numCuartos, setNumCuartos] = useState("");
  const [materialConstr, setMaterialConstr] = useState("");
  const [servicios, setServicios] = useState([]);
  const [escolaridad, setEscolaridad] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [comidaDia, setComidaDia] = useState("");
  const [ingestaAgua, setIngestaAgua] = useState("");
  const [acepTransfusion, setAcepTransfusion] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      // Si el checkbox se selecciona, agrega su valor al arreglo de servicios
      setServicios((prevServicios) => [...prevServicios, checkboxValue]);
    } else {
      // Si el checkbox se deselecciona, remueve su valor del arreglo de servicios
      setServicios((prevServicios) =>
        prevServicios.filter((value) => value !== checkboxValue)
      );
    }
  };

  const handleRadioChange = (event) => {
    const radioValue = event.target.value;
    setAcepTransfusion(radioValue);
  };

  function guardarDatos() {
    superPaciente.originario = originario;
    superPaciente.residente = residente;
    superPaciente.lenguaIndigena = lenguaIndig;
    superPaciente.heredosFamiliares = heredosFam;
    superPaciente.habitaCasa = habitaCasa;
    superPaciente.habitantes = parseInt(numHabitantes, 10);
    superPaciente.habitaciones = parseInt(numCuartos, 10);
    console.log(numHabitantes + numCuartos);
    console.log(servicios);
    superPaciente.construccionMaterial = materialConstr;
    superPaciente.servicios = servicios;
    superPaciente.escolaridad = escolaridad;
    superPaciente.ocupacion = ocupacion;
    superPaciente.comidasDiarias = parseInt(comidaDia, 10);
    superPaciente.ingestaAgua = parseFloat(ingestaAgua, 10);
    superPaciente.transfusionSangre = acepTransfusion;
    superPaciente.estadoCivil = estadoCivil;
  }

  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content modal-window-content">
            <div class="modal-body">
              <h4 className="modal-win-title">Antecedentes No Patológicos</h4>
              <h6 className="modal-win-title">
                Por favor, ingrese los datos pertinentes del nuevo paciente
              </h6>
              <div
                style={{
                  marginTop: "2vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                  marginLeft: "1vw",
                }}
              >
                <InputLabel
                  text="Heredos Familiares"
                  holder="Ingrese los Heredos Familiares del Paciente"
                  ancho={70}
                  metodo={setHeredosFam}
                />
              </div>
              <div
                style={{
                  marginTop: "0vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "70vw",
                  marginLeft: "1vw",
                }}
              >
                <InputLabel
                  text="Originario"
                  holder="Ingrese Donde Nacio el Paciente"
                  ancho={15}
                  metodo={setOriginario}
                />
                <InputLabel
                  text="Residente"
                  holder="Ingrese Donde vive Actualmente"
                  ancho={15}
                  metodo={setResidente}
                />
                <InputLabel
                  text="Lengua Indígena"
                  holder="Ingrese la Legua Indigena"
                  ancho={15}
                  metodo={setLenguaIndig}
                />
                <InputLabel
                  text="Habita en Casa"
                  holder="Ingrese el Habita de Casa"
                  ancho={15}
                  metodo={setHabitaCasa}
                />
              </div>
              <div
                style={{
                  marginTop: "1vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "70vw",
                  marginLeft: "1vw",
                }}
              >
                <InputLabel
                  text="No. Habitants"
                  holder="0"
                  ancho={5}
                  metodo={setNumHabitantes}
                />
                <InputLabel
                  text="No. Cuartos"
                  holder="0"
                  ancho={5}
                  metodo={setNumCuartos}
                />
                <InputLabel
                  text="Construida"
                  holder="Ingrese el Tipo de Material"
                  ancho={13}
                  metodo={setMaterialConstr}
                />

                <div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Agua Potable"
                      id="flexCheckDefault"
                      onChange={handleCheckboxChange}
                    />
                    <label class="form-check-label" htmlFor="flexCheckDefault">
                      Agua Potable
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Luz"
                      id="flexCheckDefault1"
                      onChange={handleCheckboxChange}
                    />
                    <label class="form-check-label" for="flexCheckDefault1">
                      Luz
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Drenaje"
                      id="flexCheckDefault2"
                      onChange={handleCheckboxChange}
                    />
                    <label class="form-check-label" for="flexCheckDefault2">
                      Drenaje
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Cocina con Leña"
                      id="flexCheckDefault3"
                      onChange={handleCheckboxChange}
                    />
                    <label class="form-check-label" for="flexCheckDefault3">
                      Cocina con Leña
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Zoonosis"
                      id="flexCheckDefault4"
                      onChange={handleCheckboxChange}
                    />
                    <label class="form-check-label" for="flexCheckDefault4">
                      Zoonosis
                    </label>
                  </div>
                </div>
                <InputLabel
                  text="Escolaridad"
                  holder="Ingrese la Escolaridad"
                  ancho={14}
                  metodo={setEscolaridad}
                />
                {/* <InputLabel
                  text="Religion"
                  holder="Ingrese la Religion"
                  ancho={10}
                /> */}
              </div>
              <div
                style={{
                  marginTop: "1vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                  marginLeft: "1vw",
                }}
              >
                <InputLabel
                  text="Ocupacion"
                  holder="Ingrese la Ocupacion"
                  ancho={12}
                  metodo={setOcupacion}
                />
                <InputLabel
                  text="Comidas Diarias"
                  holder="0"
                  ancho={5}
                  metodo={setComidaDia}
                />
                <InputLabel
                  text="Ingesta de agua"
                  holder="0 L"
                  ancho={5}
                  metodo={setIngestaAgua}
                />

                <div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold" }}
                    >
                      Acepta Transfusion
                    </label>
                  </div>
                  <div class="form-check" style={{ marginTop: "2vw" }}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      value="SI"
                      onChange={handleRadioChange}
                      checked={acepTransfusion === "SI"}
                    />
                    <label class="form-check-label" for="flexRadioDefault4">
                      SI
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault5"
                      value="NO"
                      onChange={handleRadioChange}
                      checked={acepTransfusion === "NO"}
                    />
                    <label class="form-check-label" for="flexRadioDefault5">
                      NO
                    </label>
                  </div>
                </div>
                <div class="dropdown" style={{ marginTop: "2vw" }}>
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
                          handleOptionClick("Casado/a");
                          setEstadoCivil("Casado/a");
                        }}
                      >
                        Casado/a
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        onClick={() => {
                          handleOptionClick("Soltero/a");
                          setEstadoCivil("Soltero/a");
                        }}
                      >
                        Soltero/a
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        onClick={() => {
                          handleOptionClick("Viudo/a");
                          setEstadoCivil("Viudo/a");
                        }}
                      >
                        Viudo/a
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        onClick={() => {
                          handleOptionClick("Divorciado/a");
                          setEstadoCivil("Divorciado/a");
                        }}
                      >
                        Divorciado/a
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        onClick={() => {
                          handleOptionClick("Separado/a");
                          setEstadoCivil("Separado/a");
                        }}
                      >
                        Separado/a
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        onClick={() => {
                          handleOptionClick("Concubinato");
                          setEstadoCivil("Concubinato");
                        }}
                      >
                        Concubinato
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="modal-footer modal-buttons-section">
              <ReturnButton page="#staticBackdrop" />
              <NextButton page="#staticBackdrop3" accion={guardarDatos} />
            </div>
          </div>
        </div>
      </div>

      <PatologicosModalW sexo={props.sexo} />
    </>
  );
}
