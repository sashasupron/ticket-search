import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateDeparture() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label = "Departure Date"
        sx = {{
            background: 'white',
            borderRadius: 1,
            marginTop : 1,
        }} 
      />
    </LocalizationProvider>
  );
}