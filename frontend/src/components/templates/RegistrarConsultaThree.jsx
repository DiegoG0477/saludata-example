import InputLabel from "../atoms/InputLabel";
import NextButton from "../atoms/NextButton";
import ReturnButton from "../atoms/ReturnButton";
import { useState } from "react";
import { consultaDatos } from "../../data";
import RegistrarConsultaFour from "./RegistrarConsultaFour";

export default function RegistrarConsultaThree(props) {
  const [motivoConsulta, setMotivoConsulta] = useState("");
  const [sintomasIniciales, setSintomasIniciales] = useState("");
  const [laboratorios, setLaboratorios] = useState("");
  const [estudios, setEstudios] = useState("");
  const [terapeutica, setTerapeutica] = useState("");
  const [digestivos, setDigestivos] = useState("");
  const [respiratorio, setRespiratorio] = useState("");
  const [urinario, setUrinario] = useState("");
  const [genital, setGenital] = useState("");
  const [cardiovascular, setCardiovascular] = useState("");
  const [nervioso, setNervioso] = useState("");

  function guardarDatos() {
    consultaDatos.motivoConsulta = motivoConsulta;
    consultaDatos.sintomasIniciales = sintomasIniciales;
    consultaDatos.laboratorios = laboratorios;
    consultaDatos.estudiosPrevios = estudios;
    consultaDatos.terapeuticaAnterior = terapeutica;
    consultaDatos.digestivo = digestivos;
    consultaDatos.respiratorio = respiratorio;
    consultaDatos.urinario = urinario;
    consultaDatos.genitales = genital;
    consultaDatos.cardioVasc = cardiovascular;
    consultaDatos.nervioso = nervioso;
    console.log(consultaDatos);
  }

  return (
    <>
      <div
        class="modal fade"
        id="modalPaciente2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content modal-window-content">
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
                  text="Motivo de la Consulta"
                  holder="Ingrese el Motivo de la Consulta"
                  ancho={30}
                  metodo={setMotivoConsulta}
                />
                <InputLabel
                  text="Sintomas de iniciación"
                  holder="Ingrese los Sintomas de Iniciacion del Paciente"
                  ancho={30}
                  metodo={setSintomasIniciales}
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
                  text="Laboratorios"
                  holder="Ingrese Laboratorios Previos"
                  ancho={15}
                  metodo={setLaboratorios}
                />
                <InputLabel
                  text="Estudios Previos"
                  holder="Ingrese los Estudios Previos"
                  ancho={15}
                  metodo={setEstudios}
                />
                <InputLabel
                  text="Terapeutica Anteriormente"
                  holder="Ingrese Terapias Empleadas Anteriormente"
                  ancho={15}
                  metodo={setTerapeutica}
                />
              </div>
              <div
                style={{
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65vw",
                }}
              >
                <InputLabel
                  text="A. Digestivos"
                  holder="Ingrese"
                  ancho={20}
                  metodo={setDigestivos}
                />
                <InputLabel
                  text="A. Respiratorio"
                  holder="Ingrese"
                  ancho={20}
                  metodo={setRespiratorio}
                />
                <InputLabel
                  text="A. Urinario"
                  holder="Ingrese"
                  ancho={20}
                  metodo={setUrinario}
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
                  text="Genitales"
                  holder="Ingrese"
                  ancho={20}
                  metodo={setGenital}
                />
                <InputLabel
                  text="S. Cardio Vascular"
                  holder="Ingrese"
                  ancho={20}
                  metodo={setCardiovascular}
                />
                <InputLabel
                  text="S. Nervioso"
                  holder="Ingrese"
                  ancho={20}
                  metodo={setNervioso}
                />
              </div>
            </div>
            <div class="modal-footer">
              <ReturnButton page="#modalRegConsulta"></ReturnButton>
              <NextButton page="#modalPaciente3" accion={guardarDatos}></NextButton>
            </div>
          </div>
        </div>
      </div>
      <RegistrarConsultaFour></RegistrarConsultaFour>
    </>
  );
}
