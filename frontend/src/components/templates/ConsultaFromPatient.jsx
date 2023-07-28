import PacientSearch from "../PacientSearch";
import "../../styles/atoms.css";
import "../../styles/organisms.css";

export default function ConsultaFromPatient() {
  return (
    <div
      className="modal fade"
      id="modalRegistrarConsById"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content modal-window-content">
          <div className="modal-body">
            <PacientSearch
              title="Registrar Consulta"
              text="Seleccione el paciente a registrar la consulta."
              ancho={63}
              labelAncho={30}
              color="#248087"
              botonText="Registrar Consulta"
              anchoPicker={35}
              modal={true}
              mover={3}
              registroConsulta={true}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" className="btn btn-primary">
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
