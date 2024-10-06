import { Box, Grid } from "@mui/material";
import SearchButton from "./buttons/search";
import ArrivalDate from "./date/arrivalDate";
import DateDeparture from "./date/departureDate";
import InputDeparture from "./inputs/inputDeparture";
import InputDestination from "./inputs/inputDestination";
import PassengersClass from "./selects/class";
import PassengersAmount from "./selects/passengersAmount";

export default function BoxMain() {
  return (
    <Box
      component="form"
      sx={{
        position: "absolute",
        bottom: 110,
        left: "50%",
        transform: "translateX(-50%)",
        width: 780,
        height: 150,
        borderRadius: 2,
        bgcolor: "rgba(0, 0, 0, 0.5)",
        padding: "20px",
      }}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "-10px",
        }}
      >
        {/* Первая строка */}
        <Grid item xs={4}>
          <InputDeparture />
        </Grid>

        <Grid item xs={4}>
          <InputDestination />
        </Grid>

        <Grid item xs={4}>
          <PassengersAmount />
        </Grid>

        {/* Вторая строка */}
        <Grid item xs={3}>
          <DateDeparture />
        </Grid>

        <Grid item xs={3}>
          <ArrivalDate />
        </Grid>

        <Grid item xs={3}>
          <PassengersClass />
        </Grid>

        <Grid item xs={3}>
          <SearchButton />
        </Grid>
      </Grid>
    </Box>
  );
}
