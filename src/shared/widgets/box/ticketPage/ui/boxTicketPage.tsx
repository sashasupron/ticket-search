"use client";
import { Box, Grid2, CircularProgress, Alert } from "@mui/material";
import styles from './boxTicketPage.module.css';
import clsx from "clsx";

interface Ticket {
  flight: {
    number: string;
  };
  airline: {
    name: string;
  };
  departure: {
    airport: string;
    scheduled: string;
  };
  arrival: {
    airport: string;
    scheduled: string;
  };
}


interface BoxTicketPageProps {
  className?: string;
  ticket?: Ticket; 
  error?: string; 
  loading?: boolean; 
}
const BoxTicketPage = ({ className, ticket, error, loading }: BoxTicketPageProps) => {
    return (
        <Box 
            className={clsx(styles.ticketPageBox, className)}
            sx={{
              height: { xs: 100, sm: 140, md: 160, lg: 180, xl: 180 },
              width: { xs: 350, sm: 600, md: 700, lg: 800, xl: 960 },
            }}
        >
          {loading ? (
            <CircularProgress />
          ) : error ? ( 
            <Alert severity="error">{error}</Alert>
          ) : ticket ? ( 
            <Grid2 container spacing={2}>
              <Grid2>
                <h2>Flight: {ticket.flight.number}</h2>
                <p>Airline: {ticket.airline.name}</p>
                <p>Departure: {ticket.departure.airport} at {ticket.departure.scheduled}</p>
                <p>Arrival: {ticket.arrival.airport} at {ticket.arrival.scheduled}</p>
              </Grid2>
            </Grid2>
          ) : ( 
            <Alert severity="info">No tickets available at the moment.</Alert>
          )}
        </Box>
    );
};

export default BoxTicketPage;
