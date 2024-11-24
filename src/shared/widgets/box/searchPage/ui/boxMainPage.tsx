"use client";
import { Box, Grid2, SxProps, Snackbar, Alert, Grow, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { DatePickers } from "@/shared/ui/pickers/datePicker";
import { Autocompletes } from "@/shared/ui/autocomplete/autocomplete";
import { Buttons } from "@/shared/ui/buttons/buttons";
import styles from './boxMainPage.module.css';
import clsx from "clsx";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";


interface BoxMainPageProps {
  className?: string;
  sx?: SxProps;
}

export function BoxMainPage({ className, sx }: BoxMainPageProps) {
  const router = useRouter();
  // const [fromLocation, setFromLocation] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [classType, setClassType] = useState('');
  const [pasAmount, setPasAmount] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);


  const handleFromLocationChange = (event: React.SyntheticEvent, newValue: string | null) => {
    setFromLocation(newValue || "");
    setError("");
  };

  const handleToLocationChange = (event: React.SyntheticEvent, newValue: string | null) => {
    setToLocation(newValue || "");
    setError("");
  };


  const handleClassChange = (event: SelectChangeEvent<string>) => {
    setClassType(event.target.value);
    setError('');
  };


  const handleAmountChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPasAmount(event.target.value as string);
    setError('');
  };


  const handleSubmit = () => {
    if (!fromLocation) {
      setError("Please select a from.");
      setOpenSnackbar(true);
    } else if (!classType) {
      setError("Please select a class.");
      setOpenSnackbar(true);
    } else if (!pasAmount) {
      setError("Please select a passengers amount.");
      setOpenSnackbar(true);
    } else {
      router.push('/tickets');
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
          <FormControl fullWidth variant="filled" error={!fromLocation && !!error}>
            <Autocompletes 
              label="Where from?" 
              className={styles.inputs} 
              value={fromLocation}
              onChange={handleFromLocationChange}
            />
          </FormControl>
        </Grid2>



        <Grid2>
          <FormControl fullWidth variant="filled" error={!toLocation && !!error}>
            <Autocompletes 
              label="Where to?" 
              className={styles.inputs} 
              value={toLocation}
              onChange={handleToLocationChange}
            />
          </FormControl>
        </Grid2>



        <Grid2>
          <FormControl fullWidth variant="filled" error={!classType && !!error}>
            <InputLabel id="class-select-label">Class</InputLabel>
            <Select
              labelId="class-select-label"
              id="classType"
              value={classType}
              onChange={handleClassChange}
              sx={{
                width: { xs: 290, sm: 120, md: 150, lg: 180, xl: 180 },
                background: "white",
                borderRadius: 1,
                "&:hover": { backgroundColor: "white" },
                "&.Mui-focused": { backgroundColor: "white" },
              }}
            >
              <MenuItem value="Econom">Econom</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="FirstClass">First Class</MenuItem>
            </Select>
          </FormControl>
        </Grid2>

        <Grid2>
          <DatePickers 
            label="Departure date" 
            className={styles.datePicker}
            sx={{ width: { xs: 137, sm: 138, md: 172, lg: 207, xl: 207 }}}
          />
        </Grid2>

        <Grid2>
          <DatePickers 
            label="Arrival date" 
            className={styles.datePicker}
            sx={{ width: { xs: 137, sm: 138, md: 172, lg: 207, xl: 207 }}}
          />
        </Grid2>

        <Grid2>
          <FormControl fullWidth variant="filled" error={!pasAmount && !!error}>
            <InputLabel id="amount-select-label">Amount</InputLabel>
            <Select
              labelId="amount-select-label"
              id="amount"
              value={pasAmount}
              onChange={handleAmountChange}
              sx={{
                width: { xs: 290, sm: 120, md: 150, lg: 180, xl: 180 },
                background: "white",
                borderRadius: 1,
                "&:hover": { backgroundColor: "white" },
                "&.Mui-focused": { backgroundColor: "white" },
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid2>

        <Grid2>
          <Buttons 
            type="submit"
            onClick={handleSubmit}
            label="Search" 
            className={styles.searchButton} 
            sx={{ width: { xs: 290, sm: 150, md: 150, lg: 150, xl: 150 } }}
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
