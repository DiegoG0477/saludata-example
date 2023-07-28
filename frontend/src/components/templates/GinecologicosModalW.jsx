import InputLabel from "../atoms/InputLabel";
import DatePick from "../atoms/DatePick";
import ReturnButton from "../atoms/ReturnButton";
import { useState } from "react";
import { superPaciente } from "../../data";
import { insertarPaciente } from "../../data/connector";

export default function GinecologicosModalW() {
  const [g, setG] = useState("");
  const [p, setP] = useState("");
  const [a, setA] = useState("");
  const [c, setC] = useState("");
  const [menarca, setMenarca] = useState("");
  const [ciclos, setCiclos] = useState("");
  const [ivsa, setIvsa] = useState("");
  const [mpf, setMpf] = useState("");
  const [deteccion, setDeteccion] = useState("");
  const [fum, setFum] = useState("");
  const [papanicolau, setPapanicolau] = useState("");
  const [antecedentes, setAntecedentes] = useState("");


  const handleRadioChange = (event) => {
    const radioValue = event.target.value;
    setMpf(radioValue);
  };

  const handleRadioChangeCancer = (event) => {
    const radioValue = event.target.value;
    setDeteccion(radioValue);
  };

  function guardarDatos(){
    superPaciente.g = parseInt(g, 10);
    superPaciente.p = parseInt(p, 10);
    superPaciente.a = parseInt(a, 10);
    superPaciente.c = parseInt(c, 10);
    superPaciente.menarca = parseInt(menarca, 10);
    superPaciente.ciclosMenstruales = parseInt(ciclos, 10);
    superPaciente.ivsa = parseInt(ivsa, 10);
    superPaciente.mpf = mpf;
    superPaciente.deteccionCancer = deteccion;
    superPaciente.fum = fum;
    superPaciente.papanicolau = parseInt(papanicolau, 10);
    superPaciente.antecedentesPerinatales = antecedentes;
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


  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop4"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content modal-window-content">
            <div class="modal-body">
              <h4 className="modal-win-title">Datos Gineco Obstréticos</h4>
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
                <InputLabel text="G" holder="0" ancho={5} metodo={setG}/>
                <InputLabel text="P" holder="0" ancho={5} metodo={setP}/>
                <InputLabel text="A" holder="0" ancho={5} metodo={setA}/>
                <InputLabel text="C" holder="0" ancho={5} metodo={setC}/>
                <InputLabel text="Menarca" holder="0 Años" ancho={10} metodo={setMenarca}/>
                <InputLabel
                  text="Ciclos Mestruales"
                  holder="0 Dias"
                  ancho={10}
                  metodo={setCiclos}
                />
                <InputLabel text="IVSA" holder="0 Años" ancho={8} metodo={setIvsa}/>
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
                <div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold" }}
                    >
                      MPF
                    </label>
                  </div>
                  <div>
                    <div class="form-check" style={{ marginTop: "2vw" }}>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="SI"
                      onChange={handleRadioChange}
                      checked={mpf === "SI"}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        SI
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="NO"
                        onChange={handleRadioChange}
                        checked={mpf === "NO"}
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        NO
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="input-box">
                    <label
                      for="pacient-names"
                      className="form-label"
                      style={{ fontWeight: "bold" }}
                    >
                      Deteccion Oportuna de CA mama
                    </label>
                  </div>
                  <div class="form-check" style={{ marginTop: "2vw" }}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault3"
                      value="SI"
                      onChange={handleRadioChangeCancer}
                      checked={deteccion === "SI"}
                    />
                    <label class="form-check-label" for="flexRadioDefault3">
                      SI
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault4"
                      value="NO"
                      onChange={handleRadioChangeCancer}
                      checked={deteccion === "NO"}
                    />
                    <label class="form-check-label" for="flexRadioDefault4">
                      NO
                    </label>
                  </div>
                </div>
                <div className="input-box">
                  <p
                    // htmlFor="birthdate"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    FUM
                  </p>
                  <div
                    className="input-search-container"
                    style={{ height: "8vh" }}
                  >
                    <DatePick metodo={setFum}/>
                  </div>
                </div>
                <div>
                  <InputLabel text="Papanicolau" holder="0" ancho={5} metodo={setPapanicolau}/>
                </div>
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
                  text="Antecedentes Perinatales"
                  holder="Ingrese los Antecedentes Perinatales del Paciente"
                  ancho={65}
                  metodo={setAntecedentes}
                />
              </div>
            </div>
            <div class="modal-footer modal-buttons-section">
              <ReturnButton page="#staticBackdrop3" />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
