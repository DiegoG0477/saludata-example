import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ServicesTable from "../molecules/ServicesTable";
import ReadInput from "../atoms/ReadInput";
import SmallReadInput from "../atoms/SmallReadInput";

const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";
const cuartos = "4";
const habitantes = "5";

export default function PathologicSummary({pacientePatologico,pacienteNoPatologico,pacienteAlergias}) {
  return (
    <>
      <div className="summary-Pacient-page">
        <div style={{ marginTop: "3vh" }}>
          <Title text="Datos Patológicos" />
        </div>

        <ReadInput style={{ marginTop: "5vh" }} label="Alergias" readInfo={pacienteAlergias} ></ReadInput>
        <ReadInput
          style={{ marginTop: "5vh" }}
          label="Enfermedades Crónicas"
          readInfo={pacientePatologico[0]?.[3]}
        ></ReadInput>
        <ReadInput
          style={{ marginTop: "5vh" }}
          label="Traumatismos"
          readInfo={pacientePatologico[0]?.[1]}
        ></ReadInput>

        <div className="four-inputs-div">
          <SmallReadInput label="Cirujías" readInfo={pacientePatologico[0]?.[4]} />
          <SmallReadInput label="Hospitalizaciones" readInfo={pacientePatologico[0]?.[2]} />
          <SmallReadInput label="COVID 19" readInfo={pacientePatologico[0]?.[0]} />
          <SmallReadInput label="Tipo de Sangre" readInfo={pacienteNoPatologico[0]?.[5]} />
        </div>
      </div>
    </>
  );
}
