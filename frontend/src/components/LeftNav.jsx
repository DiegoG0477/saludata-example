import React, { useState } from "react";
import "../App.css";
import HomeIcon from '@mui/icons-material/Home';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import HistoryIcon from '@mui/icons-material/History';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import cell from "../assets/cells.svg";
import { useNavigate } from "react-router-dom";

function LeftNav() {
    const [selectedOption, setSelectedOption] = useState(''); // Estado para controlar la opción seleccionada
    const navigate = useNavigate();

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        navigate(option);
    };

    return (
        <>
            <div className="left-nav sticky-top">
                <div className={`nav-box ${selectedOption === '/' ? 'active' : ''}`} onClick={() => handleOptionClick('/')}>
                    <HomeIcon style={{ fontSize: "2.5rem" }} />
                    <p>Inicio</p>
                </div>

                <div className={`nav-box ${selectedOption === '/pacient-search' ? 'active' : ''}`} onClick={() => handleOptionClick('/pacient-search')}>
                    <img src={cell} alt="" style={{ width: "3.5vw" }} />
                    <p>Registro de Pacientes</p>
                </div>

                <div className={`nav-box ${selectedOption === '/recent-file' ? 'active' : ''}`} onClick={() => handleOptionClick('/recent-file')}>
                    <FolderOpenOutlinedIcon style={{ fontSize: "2.5rem" }} />
                    <p>Archivos</p>
                </div>

                <div className={`nav-box ${selectedOption === '/history-dates' ? 'active' : ''}`} onClick={() => handleOptionClick('/history-dates')}>
                    <HistoryIcon style={{ fontSize: "2.5rem" }} />
                    <p>Consultas</p>
                </div>

                <div className={`nav-box ${selectedOption === '/upload-file' ? 'active' : ''}`} onClick={() => handleOptionClick('/upload-file')}>
                    <AddCircleOutlineOutlinedIcon style={{ fontSize: "2.5rem" }} />
                    <p>Agregar Documento</p>
                </div>
            </div>
        </>
    );
}

export default LeftNav;

