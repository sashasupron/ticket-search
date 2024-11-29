"use client";
import { useState, useEffect } from "react";
import axios from "axios";

interface Ticket {
  flight: {
    number: string;
  };
  airline: {
    name: string;
  };
  departure: {
    airport: string;
    scheduled: string;
  };
  arrival: {
    airport: string;
    scheduled: string;
  };
}

interface UseTicketDataResponse {
  tickets: Ticket[];
  isLoading: boolean;
}

export const useTicketData = (
  fromLocation: string,
  toLocation: string,
  departureDate: string | null
): UseTicketDataResponse => {
  const [tickets, setTickets] = useState<Ticket[]>([]); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      if (!fromLocation || !toLocation || !departureDate) {
        setTickets([]);
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get("https://api.aviationstack.com/v1/flights", {
          params: {
            access_key: "e1c27f87a8a80a0e8daac001996e8cb8",
            dep_iata: fromLocation,
            arr_iata: toLocation,
            flight_date: departureDate,
          },
        });

        setTickets(response.data.data || []);
      } catch (error) {
        console.error("Error fetching tickets:", error);
        setTickets([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, [fromLocation, toLocation, departureDate]);

  return { tickets, isLoading };
};
