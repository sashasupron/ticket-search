"use client";
import BoxTicketPage from "@/shared/widgets/box/ticketPage/ui/boxTicketPage";
import { useEffect } from "react";
import { useTicketData } from "../model/useTicketData";
import styles from "./ticketPage.module.css";
import image from "@/shared/assets/images/ppp.png";
import { BackgroundImage } from "@/shared/ui/backgroundImage";
import { BoxMainPage } from "@/shared/widgets/box/searchPage/ui/boxMainPage";
import { Box, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";

const TicketPage = () => {
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

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 300);

    return () => clearTimeout(scrollTimeout);
  }, []);

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
            <Typography variant="h5" sx={{ color: "white", paddingTop: 3}}>Loading...</Typography>
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
      </div>
    </BackgroundImage>
  );
};

export default TicketPage;
