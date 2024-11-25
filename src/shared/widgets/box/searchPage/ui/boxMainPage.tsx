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
import { Dayjs } from "dayjs";

interface BoxMainPageProps {
  className?: string;
  sx?: SxProps;
}

export function BoxMainPage({ className, sx }: BoxMainPageProps) {
  const router = useRouter();

  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [classType, setClassType] = useState("");
  const [departureDate, setDepartureDate] = useState<Dayjs | null>(null);
  const [arrivalDate, setArrivalDate] = useState<Dayjs | null>(null);
  const [passengersAmount, setPassengersAmount] = useState("");
  
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);



  const handleSearch = () => {
    if (!fromLocation) {
      setError("Please select an departure location");
      setOpenSnackbar(true);
      return

    } else if (!toLocation) {
      setError("Please select a destination location");
      setOpenSnackbar(true);
      return

    } else if (!classType) {
      setError("Please select a class.");
      setOpenSnackbar(true);
      return

    } else if (!arrivalDate) {
      setError("Please select an arrival date");
      setOpenSnackbar(true);
      return
    
    } else if (!departureDate) {
      setError("Please select a departure date");
      setOpenSnackbar(true);
      return

    } else if (!passengersAmount) {
      setError("Please select a passengers amount");
      setOpenSnackbar(true);
      return

    } else if (!passengersAmount) {
      setError("Please select a passengers amount");
      setOpenSnackbar(true);
      return
    } 

    router.push(`/tickets?from=${fromLocation}&to=${toLocation}&class=${classType}&departure=${departureDate}&arrival=${arrivalDate}&passengers=${passengersAmount}`);
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
            value={fromLocation}
            onChange={(newValue) => setFromLocation(newValue || "")}
          />
        </Grid2>

        <Grid2>
          <Autocompletes 
            label="Where to?" 
            className={styles.inputs} 
            value={toLocation}
            onChange={(newValue) => setToLocation(newValue || "")}
          />
        </Grid2>


        <Grid2>
          <Selects
            label="Class"
            value={classType} 
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
            value={departureDate}
            onChange={(date) => setDepartureDate(date)}
            sx={{ width: { xs: 155, sm: 138, md: 172, lg: 207, xl: 207 }}}
          />
        </Grid2>

        <Grid2>
          <DatePickers 
            label="Arrival date" 
            className={styles.datePicker}
            value={arrivalDate}
            onChange={(date) => setArrivalDate(date)}
            sx={{ width: { xs: 155, sm: 138, md: 172, lg: 207, xl: 207 }}}
          />
        </Grid2>



        <Grid2>
          <Selects
            label="Amount"
            value={passengersAmount}
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
