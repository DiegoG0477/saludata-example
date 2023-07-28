import "../../styles/organisms.css";
import "../../styles/atoms.css";
import PacientSearch from "../PacientSearch";
import { useState, useEffect } from "react";
import "../../styles/atoms.css";
import NextButton from "../atoms/NextButton";
import ReturnButton from "../atoms/ReturnButton";
import FichaIdPacienteR from "./FichaIdPacienteR";
import AntecedentesModalW from "./AntecedentesModalW";
import PatologicosModalW from "./PatologicosModalW";
import GinecologicosModalW from "./GinecologicosModalW";
import RegistrarConsulta from "./RegistrarConsulta";
import RegistrarConsultaTwo from "./RegistrarConsultaTwo";
import RegistrarConsultaThree from "./RegistrarConsultaThree";
import RegistrarConsultaFour from "./RegistrarConsultaFour";
import RegistrarConsultaFive from "./RegistrarConsultaFive";
import ConsultaFromPatient from "./ConsultaFromPatient";
import { superPaciente } from "../../data";
import InputLabel from "../atoms/InputLabel";

export default function ModalsWindows() {
  return (
    <>
      {/* ----------- Modal de Paciente ------------ */}

      <FichaIdPacienteR />
      <GinecologicosModalW></GinecologicosModalW>
      

      {/* ----------- Modal de Consulta ------------ */}
      <RegistrarConsulta></RegistrarConsulta>
      <RegistrarConsultaTwo></RegistrarConsultaTwo>
      <ConsultaFromPatient></ConsultaFromPatient>
      {/* <RegistrarConsultaThree></RegistrarConsultaThree> */}
      {/* <RegistrarConsultaFour></RegistrarConsultaFour> */}
      {/* <RegistrarConsultaFive></RegistrarConsultaFive> */}

      {/* ----------- Modal de Eliminar Paciente ------------ */}

      <div
        class="modal fade"
        id="modalEliminar"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content modal-window-content">
            <div class="modal-body">
              <PacientSearch
                title="Ficha de Eliminar Paciente"
                text="Ingrese los datos para hacer una busqueda y seleccione la acción."
                ancho={63}
                labelAncho={30}
                color="#BE2C35"
                botonText="Eliminar"
                anchoPicker={35}
                modal={true}
                mover={3}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" class="btn btn-primary">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ----------- Modal de Modificar Paciente ------------ */}
      <div
        className="modal fade"
        id="modalModificar"
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
                title="Modificar Paciente"
                text="Ingrese los datos para hacer una busqueda y seleccione la acción."
                ancho={63}
                labelAncho={30}
                color="#248087"
                botonText="Modificar"
                anchoPicker={35}
                modal={true}
                mover={3}
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
    </>
  );
}
