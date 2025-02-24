"use client";
import { AirportResponse, SeatEnum } from "@/shared/types";
import { Autocompletes } from "@/shared/ui/autocomplete/autocomplete";
import { Buttons } from "@/shared/ui/buttons/buttons";
import { DatePickers } from "@/shared/ui/pickers/datePicker";
import {
  Alert,
  Box,
  FormControl,
  Grid2,
  Grow,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  SxProps,
} from "@mui/material";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./boxMainPage.module.css";

interface BoxMainPageProps {
  className?: string;
  sx?: SxProps;
}

export function BoxMainPage({ className, sx }: BoxMainPageProps) {
  const router = useRouter();
  const [fromLocation, setFromLocation] = useState<AirportResponse | null>();
  const [toLocation, setToLocation] = useState<AirportResponse | null>();
  const [classType, setClassType] = useState<SeatEnum>(SeatEnum.ECONOMY);
  const [pasAmount, setPasAmount] = useState<number | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [dateIn, setDateIn] = useState<string | null>(null);
  const [dateOut, setDateOut] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleFromLocationChange = (newValue: AirportResponse | null) => {
    setFromLocation(newValue);
    setError(undefined);
  };

  const handleToLocationChange = (newValue: AirportResponse | null) => {
    setToLocation(newValue);
    setError(undefined);
  };

  const handleClassChange = (newValue: string) => {
    setError(undefined);
    if (newValue === "") {
      setClassType(undefined);
      return;
    } else if (newValue === "Economy") {
      setClassType(SeatEnum.ECONOMY);
      return;
    } else if (newValue === SeatEnum.PREMIUM_ECONOMY) {
      setClassType(SeatEnum.PREMIUM_ECONOMY);
      return;
    } else if (newValue === SeatEnum.BISNESS) {
      setClassType(SeatEnum.BISNESS);
      return;
    } else if (newValue === SeatEnum.FIRST) {
      setClassType(SeatEnum.FIRST);
      return;
    }
  };

  const handleAmountChange = (value: number) => {
    setPasAmount(value || undefined);
    setError("");
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
      const queryBody = {
        fromLocation: fromLocation.airportIata,
        toLocation: toLocation?.airportIata,
        classType: classType,
        pasAmount: pasAmount,
        dateIn: dateIn,
        dateOut: dateOut,
      };
      const addQueryParam = () => {
        const params = new URLSearchParams(
          Array.from(Object.entries(queryBody))
        );
        router.push(`/tickets?${params.toString()}`);
      };
      addQueryParam();
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
          <FormControl
            fullWidth
            variant="filled"
            error={!fromLocation && !!error}
          >
            <Autocompletes
              label="Where from?"
              className={styles.inputs}
              onChange={handleFromLocationChange}
            />
          </FormControl>
        </Grid2>

        <Grid2>
          <FormControl
            fullWidth
            variant="filled"
            error={!toLocation && !!error}
          >
            <Autocompletes
              label="Where to?"
              className={styles.inputs}
              onChange={(e) => handleToLocationChange(e)}
            />
          </FormControl>
        </Grid2>

        <Grid2>
          <FormControl fullWidth variant="filled" error={!classType && !!error}>
            <InputLabel id="class-select-label">Class</InputLabel>
            <Select
              labelId="class-select-label"
              id="classType"
              defaultValue={`${SeatEnum.ECONOMY}`}
              onChange={(e) => handleClassChange(e.target.value)}
              sx={{
                width: { xs: 290, sm: 120, md: 150, lg: 180, xl: 180 },
                background: "white",
                borderRadius: 1,
                "&:hover": { backgroundColor: "white" },
                "&.Mui-focused": { backgroundColor: "white" },
              }}
            >
              {[
                SeatEnum.ECONOMY,
                SeatEnum.PREMIUM_ECONOMY,
                SeatEnum.BISNESS,
                SeatEnum.FIRST,
              ].map((x) => (
                <MenuItem key={`${x}`} value={`${x}`}>
                  {`${x}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid2>

        <Grid2>
          <DatePickers
            label="Departure date"
            onChange={(e) => setDateIn(e)}
            className={styles.datePicker}
            sx={{ width: { xs: 137, sm: 138, md: 172, lg: 207, xl: 207 } }}
          />
        </Grid2>

        <Grid2>
          <DatePickers
            label="Arrival date"
            onChange={(e) => setDateOut(e)}
            className={styles.datePicker}
            sx={{ width: { xs: 137, sm: 138, md: 172, lg: 207, xl: 207 } }}
          />
        </Grid2>

        <Grid2>
          <FormControl fullWidth variant="filled" error={!pasAmount && !!error}>
            <InputLabel id="amount-select-label">Amount</InputLabel>
            <Select
              labelId="amount-select-label"
              id="amount"
              onChange={(e, value) =>
                handleAmountChange(e.target.value as number)
              }
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
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={Grow}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}
