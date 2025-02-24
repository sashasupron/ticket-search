import { AirportResponse, BookingReponse, BookingsResponse, CountryResponse, FlightsResponse, FlightsSchema, PassengerEditSchema, PassengerSchema } from "../types";
import { ResourceInstance } from "./resource";

const bookingApi = new ResourceInstance({
    baseUrl: process.env.NEXT_PUBLIC_API_BOOKING
})

const flightsApi = {
    getFlights: (params: FlightsSchema) => bookingApi.get<FlightsResponse[], FlightsSchema>({ url: "flights", params })
}
const bookingsApi = {

    postCreateBooking ({
        tripKey,
        passengers
    }: {
        tripKey: string,
        passengers: PassengerSchema[]
    }) {
        return bookingApi.post<BookingReponse, PassengerSchema[]>({ url: `bookings/${tripKey}`, data: passengers })
    },
    getBooking ({
        bookingId
    }: {
        bookingId: string
    }) {
        return bookingApi.get<BookingReponse, null>({ url: `bookings/${bookingId}` })
    },

    patchEditBooking ({
        bookingId,
        passengers
    }: {
        bookingId: string,
        passengers: PassengerEditSchema[]
    }) {
        return bookingApi.patch<BookingReponse, PassengerEditSchema[]>({ url: `bookings/${bookingId}`, data: passengers })
    },
    getBookings () {
        return bookingApi.get<BookingsResponse[], undefined>({ url: "bookings" })
    },
    postConfirmBooking ({
        bookingId
    }: {
        bookingId: string
    }) {
        return bookingApi.post<BookingReponse, null>({ url: `bookings/${bookingId}/confirm` })
    },
    deleteBooking ({
        bookingId
    }: {
        bookingId: string
    }) {
        return bookingApi.delete<BookingReponse>({ url: `bookings/${bookingId}` })
    }
}

const countriesApi = {
    getCountries: () => bookingApi.get<CountryResponse[], null>({ url: "countries" })
}
const airportsApi = {
    getAirports: ({
        countryId
    } : {
        countryId?: string
    }) => {
        if (countryId) {
            return bookingApi.get<AirportResponse[], null>({ url: `airports/${countryId}` })
        }
        return bookingApi.get<AirportResponse[], null>({ url: "airports" })
    }
}

export const bookingResources = {
    ...flightsApi,
    ...bookingsApi,
    ...countriesApi,
    ...airportsApi,
}