import { createTheme, ThemeProvider } from "@mui/material/styles";
import { esES } from "@mui/x-date-pickers/locales";
import { DatePicker } from "@mui/x-date-pickers";
import es from "date-fns/locale/es";
import styled from "styled-components";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
export default function DatePick(props) {
  // const DatePick = styled(DatePicker)``;

  return (
    <div>
        <DatePicker
          format="dd/MM/yyyy"
          label="Ingrese Fecha"
          formatDensity="spacious"
          slotProps={{ textField: { variant: "filled" } }}
          value={props.fecha}
          onChange={(newValue) => props.metodo(newValue)}
        />
    </div>
  );
}
