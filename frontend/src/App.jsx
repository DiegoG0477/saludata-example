import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Render from "./Render";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PacientSearch from "./components/PacientSearch";
import Login from "./components/Login";
import MedicalFileSearch from "./components/MedicalFileSearch.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import PacientSummary from "./components/pages/PacientSummary";
import UploadFile from "./components/UploadFile.jsx";
import FileSummary from "./components/pages/FileSummary.jsx";
import MedDateSearch from "./components/pages/MedDateSearch";
import RecentFile from "./components/RecentFile.jsx";
import RegistrarConsultaTwo from "./components/templates/RegistrarConsultaTwo";

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Router>
          <Routes>
            <Route path="/" element={<Render component={<Home />} />} />

            <Route path={"login"} element={<Login />}></Route>
            <Route
              path="medical-search"
              element={<Render component={<MedicalFileSearch />} />}
            />
            <Route
              path="recent-file"
              element={
                <Render
                  component={
                    <RecentFile
                      title="Registro de Archivoss"
                      text=" Ingrese los datos de un paciente para la busqueda de su historial de archivos"
                      ancho={78}
                      labelAncho={36}
                      color="#248087"
                      botonText="Ver más"
                      anchoPicker="36"
                      mover={0}
                    />
                  }
                />
              }
            />
            <Route
              path="upload-file"
              element={
                <Render
                  component={
                    <UploadFile
                      title="Agregar Archivos"
                      text=" Ingrese los datos de un paciente para su búsqueda o revise el registro
                      general de pacientes"
                      ancho={78}
                      labelAncho={36}
                      color="#248087"
                      botonText="Ver más"
                      anchoPicker="36"
                      mover={0}
                    />
                  }
                />
              }
            />
            <Route
              path="/file-summary/:id/:fecha"
              element={<Render component={<FileSummary />} />}
            />
            <Route
              path="pacient-search"
              element={
                <Render
                  component={
                    <PacientSearch
                      title="Registro de Pacientes"
                      text=" Ingrese los datos de un paciente para su búsqueda o revise el registro
                      general de pacientes"
                      ancho={78}
                      labelAncho={36}
                      color="#248087"
                      botonText="Ver más"
                      anchoPicker="36"
                      mover={0}
                    />
                  }
                />
              }
            />

            <Route
              path="/pacient-summary/:id"
              element={<Render component={<PacientSummary />} />}
            />

            <Route
              path="history-dates"
              element={
                <Render
                  component={
                    <MedDateSearch
                      ancho={78}
                      labelAncho={36}
                      color="#248087"
                      botonText="Ver más"
                      anchoPicker="16"
                      mover={0}
                    />
                  }
                />
              }
            />
          </Routes>
        </Router>
      </LocalizationProvider>
    </>
  );
}

export default App;
