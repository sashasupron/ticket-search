"use client";
import { bookingResources } from "@/shared/api";
import image from "@/shared/assets/images/Unknown-6-modified.jpg";
import {
  BookingReponse,
  BookingStatusEnum,
  MAP_BOOKING_STATUS,
  PassengerEditSchema,
} from "@/shared/types";
import { BackgroundImage } from "@/shared/ui/backgroundImage";
import {
  Box,
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { useState } from "react";
import styles from "./booking.module.css";

const Booking = () => {
  const { bookingId } = useParams<{ bookingId: string }>();
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);

  // Pobieranie danych rezerwacji
  const bookingQuery = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => bookingResources.getBooking({ bookingId }),
  });

  // Mutacja do edycji pasażerów
  const editMutation = useMutation({
    mutationFn: (passengers: PassengerEditSchema[]) =>
      bookingResources.patchEditBooking({ bookingId, passengers }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["booking", bookingId] });
      setIsEditing(false);
    },
  });

  // Mutacja do potwierdzania rezerwacji
  const confirmMutation = useMutation({
    mutationFn: () => bookingResources.postConfirmBooking({ bookingId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["booking", bookingId] });
    },
  });

  // Mutacja do usuwania rezerwacji
  const deleteMutation = useMutation({
    mutationFn: () => bookingResources.deleteBooking({ bookingId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["booking"] });
      // Tutaj można dodać przekierowanie np. na listę rezerwacji
    },
  });

  const handleConfirm = () => {
    confirmMutation.mutate();
  };

  const handleDelete = () => {
    if (window.confirm("Czy na pewno chcesz usunąć tę rezerwację?")) {
      deleteMutation.mutate();
    }
  };

  if (bookingQuery.isLoading) {
    return (
      <BackgroundImage image={image} altImage="Booking page background">
        <Box sx={{ display: "flex", justifyContent: "center", mt: "20%" }}>
          <CircularProgress />
          <Typography variant="h6" sx={{ ml: 2 }}>
            Loading...
          </Typography>
        </Box>
      </BackgroundImage>
    );
  }

  if (bookingQuery.isError || !bookingQuery.isSuccess || !bookingQuery.data) {
    return (
      <BackgroundImage image={image} altImage="Booking page background">
        <Typography
          variant="h6"
          color="error"
          sx={{ mt: "20%", textAlign: "center" }}
        >
          Error loading booking details
        </Typography>
      </BackgroundImage>
    );
  }

  const bookingData = bookingQuery.data as BookingReponse;
  console.log(bookingData);
  return (
    <BackgroundImage image={image} altImage="Booking page background">
      <Box className={clsx(styles.mainPageBox)}>
        <Typography
          variant="h1"
          className={styles.ticketHeading}
          sx={{
            fontSize: {
              xs: 30,
              sm: 50,
              md: 50,
              lg: 50,
              xl: 80,
            },
            mb: 4,
          }}
        >
          Booking #{bookingData.bookingId}
        </Typography>

        {/* Informacje o locie */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6">
            Flight: {bookingData.flight.originAirport.airportIata} →{" "}
            {bookingData.flight.destinationAirport.airportIata}
          </Typography>
          <Typography variant="subtitle1">
            Date: {new Date(bookingData.flight.dateIn).toLocaleDateString()} -{" "}
            {new Date(bookingData.flight.dateOut).toLocaleDateString()}
          </Typography>
          <Typography variant="subtitle1">
            Duration: {Math.floor(bookingData.flight.durationM / 60)}h{" "}
            {bookingData.flight.durationM % 60}m
          </Typography>
          <Typography variant="subtitle1">
            Status: {MAP_BOOKING_STATUS[bookingData.bookingStatus]}
          </Typography>
        </Box>

        {/* Lista pasażerów */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Passengers ({bookingData.bookingPassengers.length})
          </Typography>
          <List>
            {bookingData.bookingPassengers.map((passenger, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${passenger.firstName} ${passenger.lastName}`}
                  secondary={`Seat: ${passenger.seatNumber} (${passenger.seat}), Passport: ${passenger.passportNumber}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Przyciski akcji */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {bookingData.bookingStatus === BookingStatusEnum.CREATED && (
            <Button
              variant="contained"
              onClick={handleConfirm}
              disabled={confirmMutation.isPending}
            >
              {confirmMutation.isPending ? "Confirming..." : "Confirm Booking"}
            </Button>
          )}

          {bookingData.bookingStatus === BookingStatusEnum.CREATED && (
            <>
              <Button
                variant="outlined"
                onClick={() => setIsEditing(!isEditing)}
                disabled={
                  editMutation.isPending ||
                  bookingData.bookingStatus === BookingStatusEnum.CANCELLED
                }
              >
                {isEditing ? "Cancel Edit" : "Edit Passengers"}
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={handleDelete}
                disabled={
                  deleteMutation.isPending ||
                  bookingData.bookingStatus === BookingStatusEnum.CANCELLED
                }
              >
                {deleteMutation.isPending ? "Deleting..." : "Delete Booking"}
              </Button>
            </>
          )}
        </Box>

        {/* Tutaj możesz dodać formularz edycji pasażerów gdy isEditing === true */}
        {isEditing && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Edit Passengers</Typography>
            {/* Dodaj formularz z polami dla każdego pasażera */}
          </Box>
        )}
      </Box>
    </BackgroundImage>
  );
};

export default Booking;
