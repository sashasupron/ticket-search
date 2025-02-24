"use client";
import { bookingResources } from "@/shared/api";
import image from "@/shared/assets/images/Unknown-6-modified.jpg";
import { MAP_BOOKING_STATUS } from "@/shared/types";
import { BackgroundImage } from "@/shared/ui/backgroundImage";
import { Box, Button, Grid2 } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import styles from "./bookings.module.css";

const Bookings = () => {
  // Pobieranie danych rezerwacji
  const bookingsQuery = useQuery({
    queryKey: ["bookings"],
    queryFn: () => bookingResources.getBookings(),
  });

  return (
    <BackgroundImage image={image} altImage="Bookings page background">
      <Box
        className={clsx(styles.mainPageBox)}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {bookingsQuery.isLoading ? <div>Loading...</div> : undefined}
        {bookingsQuery.data?.map((booking) => (
          <Grid2
            key={booking.bookingId}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              padding: 2,
            }}
          >
            <Grid2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-2">
                  Status: {MAP_BOOKING_STATUS[booking.bookingStatus]}
                </p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">Passengers:</p>
                <ul>
                  {booking.bookingPassengers.map((passenger, i) => (
                    <li
                      key={`passenger-${i} ${passenger.firstName} ${passenger.lastName} ${booking.bookingId}`}
                    >
                      {passenger.firstName} {passenger.lastName}
                    </li>
                  ))}
                </ul>
              </div>
            </Grid2>
            <Button href={`/bookings/${booking.bookingId}`}>Details</Button>
          </Grid2>
        ))}
      </Box>
    </BackgroundImage>
  );
};

export default Bookings;
