import React from 'react';
import { TicketList } from './ui/TicketList';
import { useTicketData } from './model/useTicketData';

export function TicketPage () {
    const { tickets, isLoading } = useTicketData();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Available Tickets</h1>
            <TicketList tickets={tickets} />
        </div>
    );
};


