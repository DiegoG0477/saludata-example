import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ServicesTable from "../molecules/ServicesTable";
import ReadInput from "../atoms/ReadInput";
import SmallReadInput from "../atoms/SmallReadInput";

const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";
const cuartos = "4";
const habitantes = "5";

export default function ThirdConsultationSummary({consultaInte,consultaExploracion}) {
    return (
        <>
            <div className="summary-Pacient-page">
                <div style={{ marginTop: "3vh" }}>
                    <Title text="CONSULTA EXPLORACION-INTERROGATORIA" />
                </div>

                <div className="tree-inputs-div">
                    <ReadInput label="S. Endocrino" readInfo={consultaInte[0]?.[7]}></ReadInput>
                    <ReadInput label="S. Locomotor" readInfo={consultaInte[0]?.[8]}></ReadInput>
                    <ReadInput label="Sintomas Generales" readInfo={consultaInte[0]?.[9]}></ReadInput>
                </div>
                <ReadInput label="Inspreccion General" readInfo={consultaExploracion[0]?.[1]}></ReadInput>
                <div className="two-inputs-div">
                    <ReadInput label="Cabez" readInfo={consultaExploracion[0]?.[2]} ></ReadInput>
                    <ReadInput label="Torax" readInfo={consultaExploracion[0]?.[3]}></ReadInput>
                </div>

                <div className="two-inputs-div">
                    <ReadInput label="Adomen" readInfo={consultaExploracion[0]?.[4]}></ReadInput>
                    <ReadInput label="Genitales " readInfo={consultaExploracion[0]?.[5]}></ReadInput>
                </div>
            </div>
        </>
    );
}