"use client";
import { bookingResources } from "@/shared/api";
import image from "@/shared/assets/images/Unknown-6-modified.jpg";
import { PassengerSchema, SeatEnum } from "@/shared/types";
import { BackgroundImage } from "@/shared/ui/backgroundImage";
import { Box, Button, Grid, TextField } from "@mui/material";
import clsx from "clsx";
import { useParams, useRouter } from "next/navigation";
import { FC, useState } from "react";
import styles from "./bookings.add.module.css";

interface PassengerAddProps {
  onSubmit: (passenger: PassengerSchema) => void;
}

const PassengerAdd: FC<PassengerAddProps> = ({ onSubmit = () => {} }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [passportExpireDate, setPassportExpireDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Error states
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passportNumberError, setPassportNumberError] = useState("");
  const [passportExpireDateError, setPassportExpireDateError] = useState("");

  const validateFirstName = () => {
    if (!firstName.trim()) {
      setFirstNameError("First name is required");
      return false;
    }
    if (!/^[A-Za-z]+$/.test(firstName)) {
      setFirstNameError("Only letters allowed");
      return false;
    }
    setFirstNameError("");
    return true;
  };

  const validateLastName = () => {
    if (!lastName.trim()) {
      setLastNameError("Last name is required");
      return false;
    }
    if (!/^[A-Za-z]+$/.test(lastName)) {
      setLastNameError("Only letters allowed");
      return false;
    }
    setLastNameError("");
    return true;
  };

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePhone = () => {
    if (!phoneNumber.trim()) {
      setPhoneError("Phone number is required");
      return false;
    }
    if (!/^\d{10,15}$/.test(phoneNumber)) {
      setPhoneError("10-15 digits required");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validatePassportNumber = () => {
    if (!passportNumber.trim()) {
      setPassportNumberError("Passport number is required");
      return false;
    }
    if (passportNumber.length < 6) {
      setPassportNumberError("At least 6 characters required");
      return false;
    }
    setPassportNumberError("");
    return true;
  };

  const validatePassportExpireDate = () => {
    if (!passportExpireDate) {
      setPassportExpireDateError("Expiry date is required");
      return false;
    }
    const today = new Date();
    const expiryDate = new Date(passportExpireDate);
    if (expiryDate <= today) {
      setPassportExpireDateError("Date must be in the future");
      return false;
    }
    setPassportExpireDateError("");
    return true;
  };

  const handleSubmit = () => {
    const validations = [
      validateFirstName(),
      validateLastName(),
      validateEmail(),
      validatePhone(),
      validatePassportNumber(),
      validatePassportExpireDate(),
    ];

    if (validations.every((v) => v)) {
      onSubmit({
        firstName,
        passengerType: "adult",
        seat: SeatEnum.ECONOMY,
        seatNumber: "02A",
        lastName,
        email,
        phoneNumber,
        passportNumber,
        passportExpireDate,
      });
      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setPassportNumber("");
      setPassportExpireDate("");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto p-4">
      <TextField
        fullWidth
        label="First name"
        variant="outlined"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        onBlur={validateFirstName}
        error={!!firstNameError}
        helperText={firstNameError}
        required
      />
      <TextField
        fullWidth
        label="Last name"
        variant="outlined"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        onBlur={validateLastName}
        error={!!lastNameError}
        helperText={lastNameError}
        required
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={validateEmail}
        error={!!emailError}
        helperText={emailError}
        required
      />
      <TextField
        fullWidth
        label="Phone number"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        onBlur={validatePhone}
        error={!!phoneError}
        helperText={phoneError}
        inputProps={{ pattern: "\\d*", maxLength: 15 }}
        required
      />
      <TextField
        fullWidth
        label="Passport number"
        variant="outlined"
        value={passportNumber}
        onChange={(e) => setPassportNumber(e.target.value)}
        onBlur={validatePassportNumber}
        error={!!passportNumberError}
        helperText={passportNumberError}
        required
      />
      <TextField
        fullWidth
        label="Passport expire date"
        type="date"
        variant="outlined"
        value={passportExpireDate}
        onChange={(e) => setPassportExpireDate(e.target.value)}
        onBlur={validatePassportExpireDate}
        error={!!passportExpireDateError}
        helperText={passportExpireDateError}
        InputLabelProps={{ shrink: true }}
        required
      />
      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        sx={{ mt: 2 }}
      >
        Add Passenger
      </Button>
    </div>
  );
};

const BookingsAdd = () => {
  const { tripKey } = useParams<{ tripKey: string }>();
  const router = useRouter();
  const [passengers, setPassengers] = useState<PassengerSchema[]>([]);

  return (
    <BackgroundImage image={image} altImage="Login page background">
      <Box className={clsx(styles.mainPageBox)}>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} md={8} lg={6}>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Passengers List
              </h2>

              {passengers.map((passenger, index) => (
                <div key={index} className="mb-4 p-4 border rounded">
                  <div className="font-semibold">Passenger {index + 1}</div>
                  <div>
                    Name: {passenger.firstName} {passenger.lastName}
                  </div>
                  <div>Email: {passenger.email}</div>
                  <div>Phone: {passenger.phoneNumber}</div>
                  <div>Passport: {passenger.passportNumber}</div>
                  <div>
                    Expiry:{" "}
                    {new Date(
                      passenger.passportExpireDate
                    ).toLocaleDateString()}
                  </div>
                </div>
              ))}

              <PassengerAdd
                onSubmit={(passenger) =>
                  setPassengers([...passengers, passenger])
                }
              />

              <Button
                fullWidth
                variant="contained"
                color="success"
                disabled={passengers.length === 0}
                onClick={async () => {
                  const booking = await bookingResources.postCreateBooking({
                    tripKey,
                    passengers,
                  });
                  router.push(`/bookings/${booking.bookingId}`);
                }}
                sx={{ mt: 2 }}
              >
                Create Booking ({passengers.length} passengers)
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </BackgroundImage>
  );
};

export default BookingsAdd;
