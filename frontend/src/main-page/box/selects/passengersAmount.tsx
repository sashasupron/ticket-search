import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function PassengersAmount() {
  const [passengerCount, setPassengerCount] = React.useState('');

  const handlePassengerChange = (event: SelectChangeEvent) => {
    setPassengerCount(event.target.value as string);
  };

  return (
    <div>
      <FormControl variant = "filled" 
        sx = {{ 
          minWidth: 170, 
          background: 'white', 
          borderRadius: 1,
          marginRight : -8,
        }}>

        <InputLabel id = "demo-simple-select-filled-label"> Passengers </InputLabel>
        
        <Select
          labelId = "demo-simple-select-filled-label"
          id = "passengersAmount"
          value = {passengerCount}
          onChange = {handlePassengerChange}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>

        </Select>
      </FormControl>
          
    </div>
  );
}