"use client";


import BoxTicketPage from "@/widgets/box/ticketPage/ui/boxTicketPage";
import { useEffect } from 'react';
import { useTicketData } from '../model/useTicketData';
import styles from './ticketPage.module.css';



const TicketPage = () => {

    useEffect(() => {
        const scrollTimeout = setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 300); 
    
        return () => clearTimeout(scrollTimeout);
    }, []);
    
    
    



    const { tickets, isLoading } = useTicketData();

    if (isLoading) {
        return <div> Loading... </div>;
    }

    return (
        <div className={styles.ticketPage}>
            <h1 className={styles.ticketHeading}>Available Tickets</h1>
            <div className={styles.ticketsContainer}>
                {tickets.map(ticket => (
                    <BoxTicketPage key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    );
};

export default TicketPage;
