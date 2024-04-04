import * as React from 'react';
import { Box, Grid } from '@mui/material';
import InputDeparture from './inputs/inputDeparture.tsx';
import InputDestination from './inputs/inputDestination.tsx';
import PassengersAmount from './selects/passengersAmount.tsx';
import PassengersClass from './selects/class.tsx';
import DepartureDate from './date/departureDate.tsx';
import ArrivalDate from './date/arrivalDate.tsx';
import SearchButton from './buttons/search.tsx';

export default function BoxMain() {
  return (
    <Box
      component="form"
      sx = {{
        position: 'absolute',
        bottom: 110,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 780,
        height: 150,
        borderRadius: 2,
        bgcolor: 'rgba(0, 0, 0, 0.5)',
        padding: '20px',
      }}

      noValidate
      autoComplete="off"
    >
      <Grid container spacing = {2} 
        sx = {{ 
          marginTop: '-10px' 
        }}
      >

        {/* Первая строка */}
        <Grid item xs = {4}>
          <InputDeparture />
        </Grid>

        <Grid item xs = {4}>
          <InputDestination />
        </Grid>

        <Grid item xs = {4}>
          <PassengersAmount />
        </Grid>

        {/* Вторая строка */}
        <Grid item xs = {3}>
          <DepartureDate />
        </Grid>

        <Grid item xs = {3}>
          <ArrivalDate />
        </Grid>

        <Grid item xs = {3}>
          <PassengersClass />
        </Grid>
        
        <Grid item xs = {3}>
          <SearchButton />
        </Grid>

      </Grid>
    </Box>
  );
}