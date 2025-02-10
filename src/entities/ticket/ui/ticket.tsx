import React from 'react';

interface TicketProps {
    flightNumber: string;  
    departureTime: string;  
    arrivalTime: string;    
    departureCity: string;  
    arrivalCity: string;   
    price: number;         
    airline: string;       
}

export const Ticket: React.FC<TicketProps> = ({
    flightNumber,
    departureTime,
    arrivalTime,
    departureCity,
    arrivalCity,
    price,
    airline,
}) => {
    return (
        <div className="ticket">
            <div className="ticket-header">
                <h2>{airline}</h2>
                <p>Flight: {flightNumber}</p>
            </div>
            <div className="ticket-info">
                <div>
                    <strong>Departure city:</strong> {departureCity} в {departureTime}
                </div>
                <div>
                    <strong>Arrival city:</strong> {arrivalCity} в {arrivalTime}
                </div>
            </div>
            <div className="ticket-price">
                <p>Price: {price} </p>
            </div>
        </div>
    );
};

export default Ticket;
