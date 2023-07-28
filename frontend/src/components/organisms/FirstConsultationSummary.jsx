import Title from "../atoms/Title";
import "../../styles/organisms.css";
import ServicesTable from "../molecules/ServicesTable";
import ReadInput from "../atoms/ReadInput";
import SmallReadInput from "../atoms/SmallReadInput";

const nombrePaciente = "Nombre del Paciente";
const nombre = "Juan Perez";
const cuartos = "4";
const habitantes = "5";

export default function FirstConsultationSummary({consulta2}) {
    function completarGenero(genero){
        if(genero=="M"){
          return "MASCULINO"
        }else{
          return "FEMENINO"
        }
      }
    return (
        <>
            <div className="summary-Pacient-page">
                <div style={{ marginTop: "3vh" }}>
                    <Title text="CONSULTA" />
                </div>
                <div className="tree-inputs-div">
                    <ReadInput label="Nombre" readInfo={consulta2[0]?.[10]+" "+consulta2[0]?.[11]+" "+consulta2[0]?.[12]}></ReadInput>
                    <ReadInput label="Fecha de nacimiento" readInfo={consulta2[0]?.[13]}></ReadInput>
                    <ReadInput label="Sexo" readInfo={completarGenero(consulta2[0]?.[14])}></ReadInput>
                </div>
                <div className="four-inputs-div">
                    <ReadInput label="Altura" readInfo={consulta2[0]?.[15]}></ReadInput>
                    <ReadInput label="Peso" readInfo={consulta2[0]?.[1]}></ReadInput>
                    <ReadInput label="Preso prenatal" readInfo={consulta2[0]?.[2]}></ReadInput>
                    <ReadInput label="Talla" readInfo={consulta2[0]?.[4]}></ReadInput>
                </div>
                <div className="four-inputs-div">
                    <ReadInput label="Temperatura" readInfo={consulta2[0]?.[5]}></ReadInput>
                    <ReadInput label="FC(Fracuencia Cardiaca)" readInfo={consulta2[0]?.[6]}></ReadInput>
                    <ReadInput label="FR(Frecuencia Respiratoria)" readInfo={consulta2[0]?.[7]}></ReadInput>
                    <ReadInput label="PA(Presion Arterial)" readInfo={consulta2[0]?.[8]}></ReadInput>
                </div>
                <ReadInput label="Otro" readInfo={consulta2[0]?.[9]}></ReadInput>
            </div>
        </>
    );
}