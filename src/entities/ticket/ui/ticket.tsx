import React from 'react';

interface TicketProps {
    flightNumber: string;  // Номер рейса
    departureTime: string;  // Время вылета
    arrivalTime: string;    // Время прибытия
    departureCity: string;  // Город вылета
    arrivalCity: string;    // Город прибытия
    price: number;          // Цена билета
    airline: string;        // Авиакомпания
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
                <p>Рейс: {flightNumber}</p>
            </div>
            <div className="ticket-info">
                <div>
                    <strong>Отправление:</strong> {departureCity} в {departureTime}
                </div>
                <div>
                    <strong>Прибытие:</strong> {arrivalCity} в {arrivalTime}
                </div>
            </div>
            <div className="ticket-price">
                <p>Цена: {price} ₽</p>
            </div>
        </div>
    );
};

export default Ticket;
