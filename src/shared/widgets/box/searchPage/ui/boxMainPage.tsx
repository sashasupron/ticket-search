"use client";
import { Box, Grid2, SxProps, Snackbar, Alert, Grow } from "@mui/material";
import { DatePickers } from "@/shared/ui/pickers/datePicker";
import { Autocompletes } from "@/shared/ui/autocomplete/autocomplete";
import { Buttons } from "@/shared/ui/buttons/buttons";
import styles from './boxMainPage.module.css';
import { Selects } from "@/shared/ui/selects/selects"
import clsx from "clsx";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface BoxMainPageProps {
  className?: string;
  sx?: SxProps;
  fromLocation?: string;
  toLocation?: string;
  classType?: string;
  departureDate?: Dayjs | null;
  arrivalDate?: Dayjs | null;
  passengersAmount?: string;
}

export function BoxMainPage({
  className,
  sx,
  fromLocation = "", 
  toLocation = "",
  classType = "",
  departureDate = null,
  arrivalDate = null,
  passengersAmount = "",
}: BoxMainPageProps) {
  const router = useRouter();

  const [currentFromLocation, setFromLocation] = useState(fromLocation);
  const [currentToLocation, setToLocation] = useState(toLocation);
  const [currentClassType, setClassType] = useState(classType);

  const [currentDepartureDate, setDepartureDate] = useState<Dayjs | null>(
    departureDate ? dayjs(departureDate) : null
  );

  const [currentArrivalDate, setArrivalDate] = useState<Dayjs | null>(
    arrivalDate ? dayjs(arrivalDate) : null
  );

  const [currentPassengersAmount, setPassengersAmount] = useState(
    passengersAmount
  );
  
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);



  const handleSearch = () => {
    if (!currentFromLocation) {
      setError("Please select an departure location");
      setOpenSnackbar(true);
      return

    } else if (!currentToLocation) {
      setError("Please select a destination location");
      setOpenSnackbar(true);
      return

    } else if (!currentClassType) {
      setError("Please select a class.");
      setOpenSnackbar(true);
      return

    } else if (!currentArrivalDate) {
      setError("Please select an arrival date");
      setOpenSnackbar(true);
      return
    
    } else if (!currentDepartureDate) {
      setError("Please select a departure date");
      setOpenSnackbar(true);
      return

    } else if (!currentPassengersAmount) {
      setError("Please select a passengers amount");
      setOpenSnackbar(true);
      return

    } else if (!currentPassengersAmount) {
      setError("Please select a passengers amount");
      setOpenSnackbar(true);
      return
    } 

    router.push(`/tickets?from=${currentFromLocation}&to=${currentToLocation}&class=${currentClassType}&departure=${currentDepartureDate}&arrival=${currentArrivalDate}&passengers=${currentPassengersAmount}`);
  };



  const handleFromChange = (newValue: string | null) => {
    if (newValue === currentToLocation) {
      setError("Departure and arrival locations cannot be the same.");
    } else {
      setFromLocation(newValue || "");
      setError(""); 
    }
  };


  const handleToChange = (newValue: string | null) => {
    if (newValue === currentFromLocation) {
      setError("Departure and arrival locations cannot be the same.");
    } else {
      setToLocation(newValue || "");
      setError(""); 
    }
  };


  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };


  return (
    <Box
      component="form" 
      className={clsx(styles.mainPageBox, className)} 
      autoComplete="off"
      sx={sx}
      onSubmit={(e) => e.preventDefault()}
    >
      <Grid2 container spacing={2} sx={{ marginTop: "-10px" }}>
        <Grid2>
          <Autocompletes 
            label="Where from?" 
            className={styles.inputs}
            value={currentFromLocation}
            onChange={handleFromChange}
          />
        </Grid2>

        <Grid2>
          <Autocompletes 
            label="Where to?" 
            className={styles.inputs} 
            value={currentToLocation}
            onChange={handleToChange}
          />
        </Grid2>


        <Grid2>
          <Selects
            label="Class"
            value={currentClassType} 
            onChange={(newValue) => setClassType(newValue)} 
            menuItems={[
              { value: "Econom", label: "Econom" },
              { value: "Business", label: "Business" },
              { value: "FirstClass", label: "First Class" },
            ]} 
            sx = {{ width: { xs: 327, sm: 120, md: 150, lg: 180, xl: 180 }, }}
          />
        </Grid2>


        <Grid2>
          <DatePickers 
            label="Departure date" 
            className={styles.datePicker}
            value={currentDepartureDate}
            onChange={(date) => setDepartureDate(date)}
            sx={{ width: { xs: 155, sm: 138, md: 172, lg: 207, xl: 207 }}}
          />
        </Grid2>

        <Grid2>
          <DatePickers 
            label="Arrival date" 
            className={styles.datePicker}
            value={currentArrivalDate}
            onChange={(date) => setArrivalDate(date)}
            sx={{ width: { xs: 155, sm: 138, md: 172, lg: 207, xl: 207 }}}
          />
        </Grid2>



        <Grid2>
          <Selects
            label="Amount"
            value={currentPassengersAmount}
            onChange={(newValue) => setPassengersAmount(newValue)} 
            menuItems={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
            ]}
            sx={{width: { xs: 327, sm: 120, md: 150, lg: 180, xl: 180 }}}
          />
        </Grid2>


        <Grid2>
          <Buttons 
            label="Search" 
            onClick={handleSearch}
            className={styles.searchButton} 
            sx={{ width: { xs: 327, sm: 150, md: 150, lg: 150, xl: 150 } }}
          />
        </Grid2>
      </Grid2>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={Grow} 
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}
