import SummaryIdPacient from "../organisms/SummaryIdPacient"
import LifeSummaryPacient from "../organisms/LifeSummaryPacient"
import PathologicSummary from "../organisms/PathologicSummary"
import FemaleSummary from "../organisms/FemaleSummary"
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function PacientSummary(){

    const { id } = useParams();
    const [pacientePatologico, setPacientePatologico] = useState([]);
    const [pacienteNoPatologico, setPacienteNoPatologico] = useState([]);
    const [pacienteAlergias, setPacienteAlergias] = useState([]);
    const [paciente, setPaciente] = useState([]);
    const [pacienteDireccion, setPacienteDireccion] = useState([]);
    const [pacienteVivenda, setPacienteVivienda] = useState([]);
    const [pacienteAlimentacion, setPacienteAlimentacion] = useState([]);
    const [pacienteGineco, setPacienteGineco] = useState([]);
    const getPacientePatologico = () => {
        axios
            .get("http://localhost:8080/api/v1/antecedentesPatologicos/buscar/" + id)
            .then((response) => {
                setPacientePatologico(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const getPacienteNoPatologicos = () => {
        axios
            .get("http://localhost:8080/api/v1/ancedentesNoPatologicos/buscar/" + id)
            .then((response) => {
                setPacienteNoPatologico(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const getPacienteAlergias = () => {
        axios
            .get("http://localhost:8080/api/v1/alergias/buscar/" + id)
            .then((response) => {
                setPacienteAlergias(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getPaciente = () => {
        axios
            .get("http://localhost:8080/api/v1/pacientes/buscar/" + id)
            .then((response) => {
                setPaciente(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getPacienteDireccion = () => {
        axios
            .get("http://localhost:8080/api/v1/direccion/buscar/" + id)
            .then((response) => {
                setPacienteDireccion(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const getPacienteVivienda = () => {
        axios
            .get("http://localhost:8080/api/v1/viviendas/buscar/" + id)
            .then((response) => {
                setPacienteVivienda(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const getPacienteAlimentacion = () => {
        axios
            .get("http://localhost:8080/api/v1/alimentacion/buscar/" + id)
            .then((response) => {
                setPacienteAlimentacion(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    
    const getPacienteGineco = () => {
        axios
            .get("http://localhost:8080/api/v1/gineco/buscar/" + id)
            .then((response) => {
                setPacienteGineco(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getPacientePatologico();
        getPacienteNoPatologicos();
        getPaciente();
        getPacienteDireccion();
        getPacienteAlergias();
        getPacienteVivienda();
        getPacienteAlimentacion();
        getPacienteGineco();
    }, []);

    return (
        <>
            <div className="system-content">

                {/* <div className="identification-data"> */}
                <SummaryIdPacient paciente={paciente} pacienteDireccion={pacienteDireccion} pacienteNoPatologico={pacienteNoPatologico} id={id}></SummaryIdPacient>
                <LifeSummaryPacient paciente={paciente} pacienteDireccion={pacienteDireccion} pacienteNoPatologico={pacienteNoPatologico} id={id} pacienteAlimentacion={pacienteAlimentacion} pacienteVivenda={pacienteVivenda}></LifeSummaryPacient>
                <PathologicSummary pacientePatologico={pacientePatologico} pacienteNoPatologico={pacienteNoPatologico} pacienteAlergias={pacienteAlergias}></PathologicSummary>
                <FemaleSummary pacienteGineco={pacienteGineco} id={id}></FemaleSummary>

                {/* </div> */}
            </div>
        </>

    )

}
