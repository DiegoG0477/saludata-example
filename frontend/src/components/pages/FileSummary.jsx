import FirstConsultationSummary from "../organisms/FirstConsultationSummary.jsx";
import SecondSummaryQuery from "../organisms/SecondSummaryQuery.jsx";
import ThirdConsultationSummary from "../organisms/ThirdConsultationSummary.jsx";
import FourthSummaryQuery from "../organisms/FourthSummaryQuery.jsx";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function FileSummary(){
    const { id,fecha } = useParams();
    const [consulta, setConsulta] = useState([]);
    const [consulta2, setConsulta2] = useState([]);
    const [consultaExploracion, setConsultaExploracion] = useState([]);
    const [consultaInte, setConsultaInte] = useState([]);
    const getConsultaInte = () => {
        axios
            .get("http://localhost:8080/api/v1/interrogatorio/buscar/"+ id +"?fecha="+fecha)
            .then((response) => {
                setConsultaInte(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const getConsultaExploracion = () => {
        axios
            .get("http://localhost:8080/api/v1/exploracion/buscar/"+ id +"?fecha="+fecha)
            .then((response) => {
                setConsultaExploracion(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const getConsulta2 = () => {
        axios
            .get("http://localhost:8080/api/v1/consulta2/buscar/"+ id +"?fecha="+fecha)
            .then((response) => {
                setConsulta2(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const getConsulta = () => {
        axios
            .get("http://localhost:8080/api/v1/consultas/buscar/"+ id +"?fecha="+fecha)
            .then((response) => {
                setConsulta(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        
        getConsulta2();
        getConsulta();
        getConsultaExploracion();
        getConsultaInte();
    }, []);
    return(
        <>
        <div style={{ width:"90.7vw"}} >
            <div class="overflow-auto" style={{maxHeight:"35vw", marginLeft:"4.5vw", marginTop:"1vw"}}>
                <div className="avanzadas" style={{ width: "81vw"}}>
                    {/* <div className="identification-data"> */}
                    <FirstConsultationSummary consulta2={consulta2} ></FirstConsultationSummary>
                    <SecondSummaryQuery consultaInte={consultaInte} consulta={consulta}></SecondSummaryQuery>
                    <ThirdConsultationSummary consultaInte={consultaInte} consultaExploracion={consultaExploracion}></ThirdConsultationSummary>
                    <FourthSummaryQuery consultaExploracion={consultaExploracion}></FourthSummaryQuery>
                    {/* </div> */}
                </div>
            </div>
        </div></>
    )
}