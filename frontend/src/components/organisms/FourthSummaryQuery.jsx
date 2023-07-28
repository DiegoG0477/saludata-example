import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ServicesTable from "../molecules/ServicesTable";
import ReadInput from "../atoms/ReadInput";
import SmallReadInput from "../atoms/SmallReadInput";

const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";
const cuartos = "4";
const habitantes = "5";

export default function FourthSummaryQuery({consultaExploracion}) {
    return (
        <>
            <div className="summary-Pacient-page">
                <div style={{ marginTop: "3vh" }}>
                    <Title text="CONSULTA EXPLORACION" />
                </div>

                <div className="two-inputs-div">
                    <ReadInput label="Extremidades Pelvicas" readInfo={consultaExploracion[0]?.[6]}></ReadInput>
                    <ReadInput label="Extremidades Toraxicas" readInfo={consultaExploracion[0]?.[7]}></ReadInput>
                </div>
                <ReadInput label="Diagnostico" readInfo={consultaExploracion[0]?.[8]}></ReadInput>
                <ReadInput label="Plan" readInfo={consultaExploracion[0]?.[9]}></ReadInput>

            </div>
        </>
    );
}