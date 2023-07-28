import InputLabel from "../atoms/InputLabel";
import ReturnButton from "../atoms/ReturnButton";
import { useState } from "react";
import { consultaDatos } from "../../data";
import { insertarConsulta } from "../../data/connector";


export default function RegistrarConsultaFive() {
  const [extremidadesPelvicas, setExtremidadesPelvicas] = useState("");
  const [extremidadesToraxicas, setExtremidadesToraxicas] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [plan, setPlan] = useState("");

  function guardarDatos () {
    consultaDatos.extPelvicas = extremidadesPelvicas;
    consultaDatos.extToraxicas = extremidadesToraxicas;
    consultaDatos.diagnostico = diagnostico;
    consultaDatos.plan = plan;
  }

  function guardarConsulta() {
    guardarDatos();
    console.log("en la vista 5 el objeto consulta es con el id: " + consultaDatos.idPaciente);
    insertarConsulta(consultaDatos);
  }

  return (
    <div
      class="modal fade"
      id="modalPaciente4"
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
                text="Extremidades Pelvicas"
                holder="Ingrese"
                ancho={30}
                metodo={setExtremidadesPelvicas}
              />
              <InputLabel
                text="Extremidades Toraxicas"
                holder="Ingrese"
                ancho={30}
                metodo={setExtremidadesToraxicas}
              />
            </div>
            <div>
              <InputLabel text="Diagnostico" holder="Ingrese" ancho={65} metodo={setDiagnostico} />
            </div>
            <div>
              <InputLabel text="Plan" holder="Ingrese" ancho={65} metodo={setPlan} />
            </div>
          </div>
          <div class="modal-footer">
            <ReturnButton page="#modalPaciente3"/>
            <button
                type="button"
                class="btn"
                style={{fontSize: "1.1rem", fontWeight: "bolder", color:"aliceblue", background:"#268D56", borderWidth:"0px", borderRadius:"10px", height:"40px", boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}
                data-bs-target=""
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                onClick={guardarConsulta}
              >
                Registrar Consulta
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
