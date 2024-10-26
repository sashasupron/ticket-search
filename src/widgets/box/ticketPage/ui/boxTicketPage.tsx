// /widgets/box/ticketPage/ui/boxTicketPage.tsx
"use client";
import { Box, Grid2 } from "@mui/material";
import styles from './boxTicketPage.module.css';
import clsx from "clsx";
import TextDisplay from "@/shared/ui/textDisplay";
import { TicketList } from '@/pages/ticketPage/ui/ticketList';

interface BoxTicketPageProps {
  className?: string;
  tickets?: string; 
}

const BoxTicketPage = ({ className, tickets }: BoxTicketPageProps) => {
    return (
        <Box className={clsx(styles.ticketPageBox, className)}>
            <Grid2 container spacing={2}>
                <Grid2>
                    <TicketList tickets={tickets} />
                    <TextDisplay text="This is the text to display inside BoxTicketPage" />
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default BoxTicketPage;
