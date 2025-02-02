import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {PropTypes} from 'prop-types';

function TemperatureConverter() {
  const [temperatureC, setTemperatureC] = useState("");
  const [temperatureF, setTemperatureF] = useState("");

  const convert_C_F = () => {
    setTemperatureF((temperatureC * 9) / 5 + 32);
  };
  const convert_F_C = () => {
    setTemperatureC(((temperatureF - 32) * 5) / 9);
  };

  const HandleConvCF= (event) => {
    event.preventDefault();
    convert_C_F();
   
  };

  const HandleConvFC= (event) => {
    event.preventDefault();
    convert_F_C();
    
  };

  return (
    <div>
        <h1 style={{color:"green"}}>Перевод температур из градусов Цельсия в Фаренгейты</h1>
      <TextField
        label="Градусы Цельсий: "
        variant="outlined"
        value={temperatureC}
        color="success"
        style={{backgroundColor:'white'}}
        onChange={(e) => setTemperatureC(e.target.value)}
        margin="normal"
      />

      <TextField
        label="Фаренгейты: "
        variant="outlined"
        style={{backgroundColor:'white'}}
        value={temperatureF}
        color="success"
        onChange={(e) => setTemperatureF(e.target.value)}
        margin="normal"
      />

      <Button
        variant="contained"
       fullWidth
        onClick={HandleConvCF}
        color="success"
        style={{ marginBottom: 5 }}

      >
        Конвертировать из Цельсий в Фаренгейты
      </Button>

      <Button
        variant="contained"
        fullWidth
        onClick={HandleConvFC}
        color="success"
        style={{ marginBottom: 5 }}
      >
        Конвертировать из Фаренгейтов в Цельсий
      </Button>
    </div>
  );
}

export default TemperatureConverter;

TemperatureConverter.propTypes={
    temperatureC: PropTypes.number,
    temperatureF: PropTypes.number,
}

