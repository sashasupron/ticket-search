"use client";
import { FlightsResponse } from "@/shared/types";
import { Box, Button, Grid2 } from "@mui/material";
import clsx from "clsx";
import styles from "./boxTicketPage.module.css";

interface BoxTicketPageProps {
  className?: string;
  ticket: FlightsResponse;
}

const BoxTicketPage = ({ className, ticket }: BoxTicketPageProps) => {
  return (
    <Box
      className={clsx(styles.ticketPageBox, className)}
      sx={{
        color: "black",
        height: {
          xs: 100,
          sm: 140,
          md: 160,
          lg: 180,
          xl: 180,
        },

        width: {
          xs: 350,
          sm: 600,
          md: 700,
          lg: 800,
          xl: 960,
        },
      }}
    >
      <Grid2 container spacing={2}>
        <Grid2>
          <h2>Airline: {ticket.airlineName}</h2>
          <>Source: {ticket.source}</>
          <Button href={`/bookings/add/${ticket.tripKey}`}>Booking</Button>
        </Grid2>
        <Grid2>
          <Grid2>
            {ticket.originTrips.map((trip, i) => (
              <div
                key={`${trip.originAirportIata} ${trip.destinationAirportIata} ${i}`}
              >
                <p>Departure city: {trip.originAirportIata}</p>
                <p>Departure time: {trip.dateIn}</p>
              </div>
            ))}
          </Grid2>
          <Grid2>
            {ticket.destinationTrips.map((trip, i) => (
              <div
                key={`${trip.originAirportIata} ${trip.destinationAirportIata} ${i}`}
              >
                <p>Departure city: {trip.originAirportIata}</p>
                <p>Departure time: {trip.dateIn}</p>
              </div>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default BoxTicketPage;