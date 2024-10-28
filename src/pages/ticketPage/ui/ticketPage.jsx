"use client";


import React, { useEffect } from 'react';
import { useTicketData } from '../model/useTicketData';
import styles from './ticketPage.module.css';
import BoxTicketPage from "@/widgets/box/ticketPage/ui/boxTicketPage";
import { BoxMainPage } from "@/widgets/box/searchPage/ui/boxMainPage";



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
            {/* <Image 
                src={image_ticket_page} 
                className="full-img" 
                alt={"Ticket page background"} 
                layout="fill" 
                objectFit="cover" 
            /> */}
            <BoxMainPage className = {styles.boxMainPageOverride}/>
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
