"use client";
import { Box, Grid2 } from "@mui/material";
import styles from './boxTicketPage.module.css';
import clsx from "clsx";

interface Ticket {
  id: number;
  name: string;
  price: number;
}

interface BoxTicketPageProps {
  className?: string;
  ticket: Ticket; 
}

const BoxTicketPage = ({ className, ticket }: BoxTicketPageProps) => {
    return (
        <Box 
            className={clsx(styles.ticketPageBox, className)}
            sx={{ height: {
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
                    <h2>{ticket.name}</h2>
                    <p>Price: ${ticket.price}</p>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default BoxTicketPage;
