import InputLabel from "../atoms/InputLabel";
import { useState, useEffect } from "react";
import "../../styles/atoms.css";
import NextButton from "../atoms/NextButton";
import ReturnButton from "../atoms/ReturnButton";
import { superPaciente } from "../../data";
import { insertarPaciente } from "../../data/connector";

export default function PatologicosModalW(props) {
  const [selectedOption, setSelectedOption] = useState("Tipo de Sangre");
  const [alergias, setAlergias] = useState("");
  const [enfermedadCronica, setEnfermedadCronica] = useState("");
  const [traumatismo, setTraumatismo] = useState("");
  const [cirujias, setCirujias] = useState("");
  const [hospitalizaciones, setHospitalizaciones] = useState("");
  const [covid19, setCovid19] = useState("");
  const [tipoSangre, setTipoSangre] = useState("");

  const sexo = props.sexo;

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  
  function guardarDatos() {
    superPaciente.alergias = alergias;
    superPaciente.enfermedadesCronicas = enfermedadCronica;
    superPaciente.traumatismo = traumatismo;
    superPaciente.cirujias = cirujias;
    superPaciente.hospitalizaciones = hospitalizaciones;
    superPaciente.covid19 = covid19;
    superPaciente.tipoSangre = tipoSangre;
  }

  function guardarPaciente(){
    guardarDatos();
    console.log(superPaciente);
    insertarPaciente(superPaciente);


    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'El paciente esta siendo guardado'
    })
  }


  function renderizar(){
    console.log(props.sexo);
    if(sexo === "F"){
      return(
        <NextButton page="#staticBackdrop4" accion={guardarDatos} />
      )
    } else if(sexo === "M"){
      return(
        <button
        type="button"
        class="btn"
        style={{fontSize: "1.1rem", fontWeight: "bolder", color:"aliceblue", background:"#268D56", borderWidth:"0px", borderRadius:"10px", height:"40px", boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}
        data-bs-target=""
        data-bs-toggle="modal"
        data-bs-dismiss="modal"
        onClick={guardarPaciente}
      >
        Agregar Paciente
      </button>
      )
    }
  }

  
  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop3"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content modal-window-content">
            <div class="modal-body">
              <h4 className="modal-win-title">Antecedentes Patológicos</h4>
              <h6 className="modal-win-title">
                Por favor, ingrese los datos pertinentes del nuevo paciente
              </h6>
              <div
                style={{
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                  marginLeft: "1vw",
                }}
              >
                <InputLabel
                  text="Alergias"
                  holder="Ingrese las Alergias"
                  ancho={65}
                  metodo = {setAlergias}
                />
              </div>
              <div
                style={{
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                  marginLeft: "1vw",
                }}
              >
                <InputLabel
                  text="Enfermedades Cronicas"
                  holder="Ingrese las Enfermedades Cronicas"
                  ancho={20}
                  metodo = {setEnfermedadCronica}
                />
                <InputLabel
                  text="Traumatismo"
                  holder="Ingrese los Traumatismos"
                  ancho={20}
                  metodo={setTraumatismo}
                />
                <InputLabel text="Cirujias" holder="0" ancho={5} metodo={setCirujias} />
                <InputLabel text="Hospitalizaciones" holder="0" ancho={5} metodo={setHospitalizaciones} />
              </div>
              <div
                style={{
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "25vw",
                  marginLeft: "1vw",
                }}
              >
                <InputLabel text="Covid-19" holder="0" ancho={5} metodo={setCovid19} />
                <div>
                  <div class="dropdown" style={{ marginTop: "2.5vw" }}>
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
                          onClick={() => {handleOptionClick("O+"); setTipoSangre("O+")}}
                        >
                          O+
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => {handleOptionClick("O-"); setTipoSangre("O-")}}
                        >
                          O-
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => {handleOptionClick("A+"); setTipoSangre("A+")}}
                        >
                          A+
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => {handleOptionClick("A-"); setTipoSangre("A-")}}
                        >
                          A-
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => {handleOptionClick("B+"); setTipoSangre("B+")}}
                        >
                          B+
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => {handleOptionClick("B-"); setTipoSangre("B-")}}
                        >
                          B-
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => {handleOptionClick("AB+"); setTipoSangre("AB+")}}
                        >
                          AB+
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => {handleOptionClick("AB-"); setTipoSangre("AB-")}}
                        >
                          AB-
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer modal-buttons-section">
              <ReturnButton page="#staticBackdrop2" />
          {renderizar()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
