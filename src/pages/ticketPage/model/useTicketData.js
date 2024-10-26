"use client";
import { useState, useEffect } from 'react';

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
        fetch("/tickets.txt")  
            .then((response) => {
                if (!response.ok) {
                    throw new Error("File not found");
                }
                return response.json();
            }) 
            .then((data) => {
                setTickets(data);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, []);
    

    return { tickets, isLoading };
};
