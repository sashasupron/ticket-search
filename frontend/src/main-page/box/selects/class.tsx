import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function PassengersClass() {
  const [classType, setClassType] = React.useState('');

  const handleClassChange = (event: SelectChangeEvent) => {
    setClassType(event.target.value as string);
  };

  return (
    <div>
      <FormControl variant = "filled" 
        sx = {{ 
          minWidth: 170, 
          background: 'white',
          borderRadius: 1,
          marginTop : 1,
          
        }}>

        <InputLabel id = "demo-simple-select-filled-label"> Class </InputLabel>
        
        <Select
          labelId = "demo-simple-select-filled-label"
          id = "classType"
          value = {classType}
          onChange = {handleClassChange}
        >
          <MenuItem value = "Econom">
            <em> Econom </em>
          </MenuItem>
          <MenuItem value = "Business"> Business </MenuItem>
          <MenuItem value = "FirstClass"> First Class </MenuItem>


        </Select>
      </FormControl>
    </div>
  );
}