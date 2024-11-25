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
  const [tickets, setTickets] = useState<Ticket[]>([]); // Указываем тип для tickets
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      if (!fromLocation || !toLocation || !departureDate) {
        setTickets([]);
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://api.aviationstack.com/v1/flights", {
          params: {
            access_key: "21c41abdff19fed84ba535c5c0ae5a13",
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
