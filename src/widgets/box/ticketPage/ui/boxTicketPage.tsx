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
        <Box className={clsx(styles.ticketPageBox, className)}>
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
