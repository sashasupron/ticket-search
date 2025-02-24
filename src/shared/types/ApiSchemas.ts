export interface SessionRegisterSchema {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
export interface SessionLoginSchema {
    email: string;
    password: string;
}

export enum OnlyFromEnum {
    GOOGLE = 'google',
    RYANAIR = 'ryanair'
}
export enum SeatEnum {
    ECONOMY = 'economy',
    PREMIUM_ECONOMY = 'premium-economy',
    BISNESS = 'business',
    FIRST = 'first'
}



export interface FlightsSchema {
    onlyFrom?: OnlyFromEnum;
    originAirportIata: string;
    destinationAirportIata: string;
    dateIn?: string;
    dateOut?: string;
    adt?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    chd?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    inf?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    teen?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    maxStops?: 1 | 2 | 3 | 4 | 5;
    seat?: SeatEnum;
    flexDaysBeforeIn?: 0 | 1 | 2 | 4;
    flexDaysAfterIn?: 0 | 1 | 2 | 4;
}

export interface FligthsTripStepResponse {
    dateIn: string;
    dateOut: string;
    originAirportIata: string;
    destinationAirportIata: string;
    flightsNumber: string;
}

export interface PassengerSchema {
    firstName: string;
    lastName: string;
    seat: string;
    seatNumber: string;
    passengerType: 'adult';
    email: string | undefined;
    phoneNumber: string | undefined;
    passportNumber: string;
    passportExpireDate: string;
  }

export interface FligthsTripResponse {
    dateIn: string;
    dateOut: string;
    originAirportIata: string;
    destinationAirportIata: string;
    flightsNumber: string;
    durationM: number;
    originTrips: FligthsTripStepResponse[]
}


export interface FlightsResponse {
    source: OnlyFromEnum;
    tripKey: string;
    airlineName: string;
    originAirportIata: string;
    destinationAirportIata: string;
    originTrips: FligthsTripResponse[];
    destinationTrips: FligthsTripResponse[];
}

export interface CountryResponse{
    fullCountryName: string;
    isoCode: string
}

export interface AirportResponse{
    airportId: string;
    airportName: string;
    airportCity: string;
    airportIata: string | null;
    airportCountry: CountryResponse;
}

export interface FlightAirportResponse {
    airportId: string;
    airportName: string;
    airportCity: string;
    airportIata: string;
    airportCountry: CountryResponse;
}

export interface FlightResponse {
    dateIn: string;
    dateOut: string;
    durationM: number;
    flightId: string;
    originAirport: FlightAirportResponse;
    destinationAirport: FlightAirportResponse;
}

export enum BookingStatusEnum {
    CREATED = "1",
    CONFIRMED = "2",
    CANCELLED = "3"
}

export const MAP_BOOKING_STATUS = {
    [BookingStatusEnum.CREATED]: 'Created',
    [BookingStatusEnum.CONFIRMED]: 'Confirmed',
    [BookingStatusEnum.CANCELLED]: 'Cancelled'
}

export interface BookingReponse{
    bookingStatus: BookingStatusEnum;
    bookingId: string;
    flight: FlightResponse;
    bookingPassengers: PassengerSchema[];
}   

export interface PassengerShortResponse {
    firstName: string;
    lastName: string;
    seat: SeatEnum;
    seatNumber: string;
    passengerType: 'adult';
}

export interface BookingsResponse {
    bookingStatus: BookingStatusEnum;
    bookingId: string;
    bookingPassengers: PassengerShortResponse[];
}

export interface PassengerEditSchema extends PassengerSchema {
    bookingPassengerId: string
}