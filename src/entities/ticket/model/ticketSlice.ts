// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Ticket {
//   flightNumber: string;
//   departureTime: string;
//   arrivalTime: string;
//   departureCity: string;
//   arrivalCity: string;
//   price: number;
//   airline: string;
// }

// interface TicketState {
//   tickets: Ticket[];
// }

// const initialState: TicketState = {
//   tickets: [],
// };

// export const ticketSlice = createSlice({
//   name: 'ticket',
//   initialState,
//   reducers: {
//     addTicket: (state, action: PayloadAction<Ticket>) => {
//       state.tickets.push(action.payload);
//     },
//     removeTicket: (state, action: PayloadAction<string>) => {
//       state.tickets = state.tickets.filter(
//         (ticket) => ticket.flightNumber !== action.payload
//       );
//     },
//     clearTickets: (state) => {
//       state.tickets = [];
//     },
//   },
// });

// export const { addTicket, removeTicket, clearTickets } = ticketSlice.actions;
// export const ticketReducer = ticketSlice.reducer;
