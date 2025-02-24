"use client";

<<<<<<< HEAD
import { bookingResources } from "@/shared/api";
import image from "@/shared/assets/images/image.jpg";
import { AirportResponse, SeatEnum } from "@/shared/types";
=======
import BoxTicketPage from "@/shared/widgets/box/ticketPage/ui/boxTicketPage";
import { useEffect, Suspense } from "react";
import { useTicketData } from "../model/useTicketData";
import styles from "./ticketPage.module.css";
import image from "@/shared/assets/images/ppp.png";
>>>>>>> main
import { BackgroundImage } from "@/shared/ui/backgroundImage";
import { BoxMainPage } from "@/shared/widgets/box/searchPage/ui/boxMainPage";
import BoxTicketPage from "@/shared/widgets/box/ticketPage/ui/boxTicketPage";
import { Box, Typography } from "@mui/material";
<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./ticketPage.module.css";
=======
import { useSearchParams } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";

const TicketPageContent = () => {
  const searchParams = useSearchParams();

  const fromLocation = searchParams?.get("from") || "";
  const toLocation = searchParams?.get("to") || "";
  const classType = searchParams?.get("class") || "";
  const departureDateString = searchParams?.get("departure") || null;
  const arrivalDateString = searchParams?.get("arrival") || null;
  const passengersAmount = searchParams?.get("passengers") || "";

  const departureDate: Dayjs | null = departureDateString ? dayjs(departureDateString) : null;
  const arrivalDate: Dayjs | null = arrivalDateString ? dayjs(arrivalDateString) : null;

  const { tickets, isLoading, error } = useTicketData(fromLocation, toLocation, departureDateString);
>>>>>>> main

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 300);

    return () => clearTimeout(scrollTimeout);
  }, []);
  const searchParams = useSearchParams();

<<<<<<< HEAD
  const airportsQuery = useQuery({
    queryKey: ["airports"],
    queryFn: () => bookingResources.getAirports({}),
  });
  const [fromLocation, setFromLocation] = useState<AirportResponse | null>();
  const [toLocation, setToLocation] = useState<AirportResponse | null>();
  useEffect(() => {
    if (searchParams.get("fromLocation")) {
      setFromLocation(
        (airportsQuery.data || []).find(
          (v) => v.airportIata === searchParams.get("fromLocation")
        ) || null
      );
    }
    if (searchParams.get("toLocation")) {
      setToLocation(
        (airportsQuery.data || []).find(
          (v) => v.airportIata === searchParams.get("toLocation")
        ) || null
      );
    }
  }, [airportsQuery]);

  const [classType, setClassType] = useState<SeatEnum>(
    (searchParams.get("classType") as SeatEnum) || SeatEnum.ECONOMY
  );
  const [pasAmount, setPasAmount] = useState<number | undefined>(
    Number(searchParams.get("pasAmount"))
  );
  const [dateIn, setDateIn] = useState<string | null>(
    searchParams.get("dateIn")
  );
  const [dateOut, setDateOut] = useState<string | null>(
    searchParams.get("dateOut")
  );

  const flightsQuery = useQuery({
    queryKey: [
      `flights`,
      fromLocation,
      toLocation,
      dateIn,
      dateOut,
      pasAmount,
      classType,
    ],
    queryFn: async () =>
      fromLocation && toLocation && dateIn && pasAmount
        ? bookingResources.getFlights({
            originAirportIata: fromLocation.airportIata,
            destinationAirportIata: toLocation.airportIata,
            dateIn: dateIn,
            dateOut: dateOut || undefined,
            adt: pasAmount,
            seat: classType,
          })
        : [],
  });

  return (
    <BackgroundImage image={image} altImage="Ticiket page background">
      <div className={styles.ticketPage}>
        <BoxMainPage
          className={styles.topCenter}
          sx={{
            width: {
              xs: 300,
              sm: 600,
              md: 700,
              lg: 800,
              xl: 800,
            },

            height: {
              xs: 420,
              sm: 120,
              md: 130,
              lg: 135,
              xl: 110,
            },

            padding: {
              xs: 3,
            },

            paddingRight: {
              xs: 1.5,
            },

            paddingTop: {
              xs: 4,
              lg: 4.5,
            },

            paddingBottom: {
              xs: 3,
              sm: 2.5,
              md: 1.5,
              lg: 3,
              xl: 4,
            },
          }}
        />
        {flightsQuery.isLoading && (
          <Typography
            variant="h1"
            className={styles.ticketHeading}
            sx={{
              marginTop: {
                xs: "30%",
                sm: "15%",
                md: "20%",
                lg: "3%",
                xl: "10%",
              },

              fontSize: {
                xs: 30,
                sm: 50,
                md: 50,
                lg: 50,
                xl: 80,
              },
            }}
          >
            Loading...
          </Typography>
        )}
        {flightsQuery.isSuccess && flightsQuery.data.length === 0 && (
          <Typography
            variant="h1"
            className={styles.ticketHeading}
            sx={{
              marginTop: {
                xs: "30%",
                sm: "15%",
                md: "20%",
                lg: "3%",
                xl: "10%",
              },

              fontSize: {
                xs: 30,
                sm: 50,
                md: 50,
                lg: 50,
                xl: 80,
              },
            }}
          >
            No available tickets
          </Typography>
        )}
        {flightsQuery.isSuccess && flightsQuery.data.length > 0 && (
          <>
            <Typography
              variant="h1"
              className={styles.ticketHeading}
              sx={{
                marginTop: {
                  xs: "30%",
                  sm: "15%",
                  md: "20%",
                  lg: "3%",
                  xl: "10%",
                },

                fontSize: {
                  xs: 30,
                  sm: 50,
                  md: 50,
                  lg: 50,
                  xl: 80,
                },
              }}
            >
              Available Tickets
            </Typography>

            <Box
              className={styles.ticketsContainer}
              sx={{
                width: {
                  xs: "60%",
                  lg: "50%",
                  xl: "40%",
                },
              }}
            >
              {(flightsQuery.data || []).map((ticket) => (
                <BoxTicketPage key={ticket.tripKey} ticket={ticket} />
              ))}
            </Box>
          </>
        )}
=======
  return (
    <BackgroundImage image={image} altImage="Ticket page background">
      <div className={styles.ticketPage}>
        <BoxMainPage
          className={styles.topCenter}
          fromLocation={fromLocation}
          toLocation={toLocation}
          classType={classType}
          departureDate={departureDate}
          arrivalDate={arrivalDate}
          passengersAmount={passengersAmount}
        />

        <Typography
          variant="h1"
          className={styles.ticketHeading}
          sx={{
            marginTop: { xs: "15%", sm: "15%", md: "20%", lg: "3%", xl: "10%" },
            fontSize: { xs: 30, sm: 50, md: 50, lg: 50, xl: 80 },
          }}
        >
          Available flights
        </Typography>

        <Box
          className={styles.ticketsContainer}
          sx={{
            width: { xs: "60%", lg: "50%", xl: "40%" },
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: 2,
            textAlign: "center",
          }}
        >
          {isLoading ? (
            <Typography variant="h5" sx={{ color: "white", paddingTop: 3 }}>Loading...</Typography>
          ) : error ? (
            <Typography variant="h5" sx={{ color: "white", paddingTop: 3 }}>
              {error.includes("403") ? "Server Error" : error}
            </Typography>
          ) : tickets.length > 0 ? (
            tickets.map((ticket) => (
              <BoxTicketPage key={ticket.flight.number} ticket={ticket} />
            ))
          ) : (
            <Typography variant="h6">No tickets available for the selected criteria.</Typography>
          )}
        </Box>
>>>>>>> main
      </div>
    </BackgroundImage>
  );
};

const TicketPage = () => {
  return (
    <Suspense fallback={<div>Loading search parameters...</div>}>
      <TicketPageContent />
    </Suspense>
  );
};

export default TicketPage;
