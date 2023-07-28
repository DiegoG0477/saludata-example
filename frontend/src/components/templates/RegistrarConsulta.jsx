import Card from "../Card";
import addPacient from "../../assets/pacient.png";
import SaveIcon from "@mui/icons-material/Save.js";
import consulta from "../../assets/consulta.png";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd.js";
import ConsultaFromPatient from "./ConsultaFromPatient";

export default function RegistrarConsulta() {
  return (
    <>
      <div
        className="modal fade"
        id="modalConsulta"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content modal-window-content">
            <div className="modal-body" style={{ paddingBottom: "8vh" }}>
              <h4 className="modal-win-title">Registrar Consulta</h4>
              <h6 className="modal-win-title">
                Por favor, elija el origen del paciente al que está
                diagnosticando
              </h6>

              <div className="two-inputs-div">
                <Card
                  title="Nuevo Paciente"
                  img={addPacient}
                  buttonText={"Añadir"}
                  icon={
                    <SaveIcon
                      style={{ fontSize: "1.4rem", marginTop: "-5px" }}
                    ></SaveIcon>
                  }
                  num={1}
                  buttonAttributes={{
                    "data-bs-dismiss": "modal",
                  }}
                ></Card>
                <Card
                  title="Paciente del Registro"
                  img={consulta}
                  buttonText="Registrar"
                  data-bs-dismiss="modal"
                  icon={
                    <BookmarkAddIcon
                      style={{ fontSize: "1.4rem", marginTop: "-5px" }}
                    ></BookmarkAddIcon>
                  }
                  num={6}
                ></Card>
              </div>
            </div>

            <div class="modal-footer modal-buttons-section">
              <button
                type="button"
                class="btn globalButton-red"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
