import InputLabel from "../atoms/InputLabel";
import NextButton from "../atoms/NextButton";
import ReturnButton from "../atoms/ReturnButton";
import { useState } from "react";
import { consultaDatos } from "../../data";
import RegistrarConsultaFive from "./RegistrarConsultaFive";

export default function RegistrarConsultaFour() {
  const [sEndocrino, setSEndocrino] = useState("");
  const [sLocomotor, setSLocomotor] = useState("");
  const [sintomasGenerales, setSintomasGenerales] = useState("");
  const [inspeccionGeneral, setInspeccionGeneral] = useState("");
  const [cabeza, setCabeza] = useState("");
  const [torax, setTorax] = useState("");
  const [abdomen, setAbdomen] = useState("");
  const [sistGenitales, setSistGenitales] = useState("");

  function guardarDatos() {
    consultaDatos.endocrino = sEndocrino;
    consultaDatos.locomotor = sLocomotor;
    consultaDatos.sintomasGenerales = sintomasGenerales;
    consultaDatos.inspeccionGeneral = inspeccionGeneral;
    consultaDatos.cabeza = cabeza;
    consultaDatos.torax = torax;
    consultaDatos.abdomen = abdomen;
    consultaDatos.sistGenitales = sistGenitales;
  }

  return (
    <>
      <div
        class="modal fade"
        id="modalPaciente3"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content  modal-window-content">
            <div class="modal-body">
              <h4 className="modal-win-title">Registrar Consulta</h4>
              <h6 className="modal-win-title">
                Por favor, rellene los campos de informacion
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
                  text="S. Endocrino"
                  holder="Ingrese"
                  ancho={20}
                  metodo={setSEndocrino}
                />
                <InputLabel
                  text="S. Locomotor"
                  holder="Ingrese"
                  ancho={20}
                  metodo={setSLocomotor}
                />
                <InputLabel
                  text="Sintomas Generales"
                  holder="Ingrese"
                  ancho={20}
                  metodo={setSintomasGenerales}
                />
              </div>
              <div
                style={{
                  marginTop: "0vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel
                  text="Inspreccion General"
                  holder="Ingrese"
                  ancho={65}
                  metodo={setInspeccionGeneral}
                />
              </div>
              <div
                style={{
                  marginTop: "0vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel
                  text="Cabeza"
                  holder="Ingrese"
                  ancho={30}
                  metodo={setCabeza}
                />
                <InputLabel
                  text="Torax"
                  holder="Ingrese"
                  ancho={30}
                  metodo={setTorax}
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
                  text="Abdomen"
                  holder="Ingrese"
                  ancho={30}
                  metodo={setAbdomen}
                />
                <InputLabel
                  text="Genitales"
                  holder="Ingrese"
                  ancho={30}
                  metodo={setSistGenitales}
                />
              </div>
            </div>
            <div class="modal-footer">
              <ReturnButton page="#modalPaciente2" />
              <NextButton page="#modalPaciente4" accion={guardarDatos} />
            </div>
          </div>
        </div>
      </div>
      <RegistrarConsultaFive></RegistrarConsultaFive>
    </>
  );
}
