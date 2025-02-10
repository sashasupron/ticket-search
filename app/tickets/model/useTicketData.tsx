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
  error: string | null;
}

export const useTicketData = (
  fromLocation: string,
  toLocation: string,
  departureDate: string | null
): UseTicketDataResponse => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      if (!fromLocation || !toLocation || !departureDate) {
        setTickets([]);
        setIsLoading(false);
        setError("Please provide valid search criteria.");
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get("https://api.aviationstack.com/v1/flights", {
          params: {
            access_key: "e1c27f87a8a80a0e8daac001996e8cb8",
            dep_iata: fromLocation,
            arr_iata: toLocation,
            flight_date: departureDate,
          },
        });

        if (response.status === 200) {
          setTickets(response.data.data || []);
        } else {
          throw new Error(`API returned status code ${response.status}`);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(`Request failed: ${error.response?.status} - ${error.message}`);
        } else {
          setError("An unexpected error occurred.");
        }
        setTickets([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, [fromLocation, toLocation, departureDate]);

  return { tickets, isLoading, error };
};
