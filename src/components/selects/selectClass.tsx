"use client";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";


export default function selectClass() {
  const [classType, setClassType] = useState("");

  const handleClassChange = (event: SelectChangeEvent) => {
    setClassType(event.target.value as string);
  };

  return (
    <div>
      <FormControl
        variant="filled"
        sx={{
          minWidth: 195,
          background: "white",
          borderRadius: 1,
        }}
      >
        <InputLabel id="demo-simple-select-filled-label"> Class </InputLabel>

        <Select
          labelId="demo-simple-select-filled-label"
          id="classType"
          value={classType}
          onChange={handleClassChange}
        >
          <MenuItem value="Econom">
            <em> Econom </em>
          </MenuItem>
          <MenuItem value="Business"> Business </MenuItem>
          <MenuItem value="FirstClass"> First Class </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
