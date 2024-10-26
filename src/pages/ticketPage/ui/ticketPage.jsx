import React from 'react';
import { useTicketData } from '../model/useTicketData';
import styles from './ticketPage.module.css';
import BoxTicketPage from "@/widgets/box/ticketPage/ui/boxTicketPage";

const TicketPage = () => {
    const { tickets, isLoading } = useTicketData();

    if (isLoading) {
        return <div> Loading... </div>;
    }

    return (
        <div className={styles.ticketPage}>
            <h1>Available Tickets</h1>
            <BoxTicketPage tickets={tickets} />
        </div>
    );
};

export default TicketPage;
