"use client";

import { useState, useEffect } from 'react';
import httpClient from '@/shared/api/https/test';

export const useTicketData = () => {
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     httpClient.sendGet()
    //         .then((response) => {
    //             setTickets(response.data);
    //             setIsLoading(false);
    //         })
    //         .catch(() => setIsLoading(false));
    // }, []);


    useEffect(() => {
        fetch('/tickets.txt')  
            .then((response) => response.json()) 
            .then((data) => {
                setTickets(data);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, []);

    return { tickets, isLoading };
};
