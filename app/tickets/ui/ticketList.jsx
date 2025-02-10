import React from 'react';

export const TicketList = ({ tickets }) => {
    return (
        <ul>
            {tickets.map(ticket => (
                <li key={ticket.id}>{ticket.name}</li>
            ))}
        </ul>
    );
};
