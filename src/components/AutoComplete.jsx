import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutocompleteComp(props) {
  const [value, setValue] = React.useState(props.options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.nilai(newValue);
  }

  return (
    <div>
      <Autocomplete
        value={value}
        sx={{
          width: "100%",
        }}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={props.options}
        renderInput={(params) => <TextField {...params} label={props.label} />}
      />
    </div>
  );
}
