import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ServicesTable from "../molecules/ServicesTable";
import ReadInput from "../atoms/ReadInput";
import SmallReadInput from "../atoms/SmallReadInput";

const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";
const cuartos = "4";
const habitantes = "5";

export default function LifeSummaryPacient({paciente,pacienteDireccion,pacienteNoPatologico,pacienteAlimentacion,pacienteVivenda,id}) {
   
  return (
    <>
      <div className="summary-Pacient-page" style={{ width: "81vw" }}>
        <div style={{ marginTop: "3vh" }}>
          <Title text="Antecedentes" />
        </div>

        <ReadInput label="Heredo Familiares" readInfo={paciente.heredosFamiliares}/>

        <div className="four-inputs-div">
          <ReadInput label="Orginario de" readInfo={pacienteDireccion[0]?.[4]}/>
          <ReadInput label="Residencia Actual" readInfo={pacienteDireccion[0]?.[5]}/>
          <ReadInput label="Lengua Indigena" readInfo={pacienteNoPatologico[0]?.[0]}/>
          <ReadInput label="Habita en" readInfo={pacienteVivenda[0]?.[0]+" de "+pacienteVivenda[0]?.[3]}/>
        </div>

        <div className="two-inputs-div">
          <ReadInput
            label="Cuartos y Habitantes"
            readInfo={
              pacienteVivenda[0]?.[2] + " habitaciones para " + pacienteVivenda[0]?.[1] + " habitantes "
            }
          ></ReadInput>
          <ServicesTable id={id}/>
        </div>

        <div className="six-inputs-div">
          {/* <div style={{display:"flex", justifyContent:"space-between"}}> */}
          <SmallReadInput label="Comidas Diarias" readInfo={pacienteAlimentacion[0]?.[0]}/>
          <SmallReadInput label="Ingesta de Agua" readInfo={pacienteAlimentacion[0]?.[1]+" Litros"}/>
          <SmallReadInput label="Acepta Transfusión" readInfo={pacienteNoPatologico[0]?.[2]}/>
          {/* </div> */}

          <ReadInput label="Escolaridad" readInfo={pacienteNoPatologico[0]?.[7]}/>
          <ReadInput label="Ocupación" readInfo={pacienteNoPatologico[0]?.[3]}/>
          <ReadInput label="Estado Civil" readInfo={pacienteNoPatologico[0]?.[6]}/>
        </div>
      </div>
    </>
  );
}
