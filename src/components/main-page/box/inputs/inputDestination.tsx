import React from 'react';
import { TextField } from '@mui/material'; 

function InputDestination() {
  return (
    <div>
      <TextField
        id = "destinationPlace"
        label = "Where to?"
        variant = "filled"
        sx = {{
          background: 'white',
          borderRadius: 1,
          width: 270,
          marginLeft : 4.5,
        }}
      />
    </div>
  );
}

export default InputDestination;