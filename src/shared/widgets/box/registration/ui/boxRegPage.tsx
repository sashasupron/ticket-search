"use client";
import { Box, Grid2, Typography, Snackbar, Alert, Grow } from "@mui/material";
import styles from "./boxRegPage.module.css";
import clsx from "clsx";
import { Inputs } from "@/shared/ui/inputs/inputs";
import { DatePickers } from "@/shared/ui/pickers/datePicker";
import { Buttons } from "@/shared/ui/buttons/buttons";
import Link from "next/link";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useRouter } from 'next/navigation';

interface BoxRegPageProps {
  className?: string;
}
  
export function BoxRegPage({ className }: BoxRegPageProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs | null>(null);
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.{8,})/;



  const handleRegistration = () => {
    if (!firstName) {
      setError("Please write a name");
      setOpenSnackbar(true);
      return

    } else if (!lastName) {
      setError("Please write a surname");
      setOpenSnackbar(true);
      return

    } else if (!dateOfBirth) {
      setError("Please write a date of birth");
      setOpenSnackbar(true);
      return
    
    
    } else if (!mobilePhone) {
      setError("Please write a mobile phone");
      setOpenSnackbar(true);
      return

    } else if (!emailRegex.test(emailAddress)) { 
      setError("Please write a correct e-mail address");
      setOpenSnackbar(true);
      return;

    } else if (!passwordRegex.test(password)) { 
      setError("Please write a password, which contains min 8 signs, 1 large and 1 small letters and a special sign");
      setOpenSnackbar(true);
      return
    }
    router.push(`/tickets`)
  }

  const validatePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    const phoneRegex = /^\+?\d*$/;
  
    if (phoneRegex.test(phone)) {
      setMobilePhone(phone); 
      setError(""); 
    } else {
      setError("Mobile number can only contain digits and an optional '+' sign");
      setOpenSnackbar(true);
    }
  };



  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(e.target.value); 
  };

  

  const handleEmailBlur = () => {    
    if (!emailRegex.test(emailAddress)) {
      setError("Please write a correct e-mail address"); 
      setOpenSnackbar(true);
    } else {
      setError(""); 
    }
  };



  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value); 
  };

  

  const handlePasswordBlur = () => {
    
    if (!passwordRegex.test(password)) {
      setError("Please write a password, which contains min 8 signs, 1 large and 1 small letters and a special sign"); 
      setOpenSnackbar(true);
    } else {
      setError("");
    }
  };


  

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };



  return (
      <Box
        component="form" 
        className={clsx(styles.regPageBox, className)} 
        noValidate autoComplete="off"

        sx={{width: { xs: 300, sm: 330, md: 345, lg: 345, xl: 345 },
          height: { xs: 420, sm: 420, md: 420, lg: 420, xl: 500 },
          padding: { xs: 3, xl: 4 },
        }}
      >

        <Grid2 
          container 
          spacing={2} 
          sx={{ marginTop: "-10px" }}
          justifyContent="center" 
          alignItems="center">
            <Grid2>
              <Inputs 
                label="First name" 
                className={styles.inputs}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid2>


            <Grid2>
              <Inputs 
                label="Surname" 
                className={styles.inputs}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            </Grid2>


            <Grid2>
              <DatePickers 
                label="Date of birth" 
                className={styles.datePickers}
                value={dateOfBirth}
                onChange={(date) => setDateOfBirth(date)}
                minDate = {dayjs('01/01/1950')}
                sx = {{width: { xs: 137, sm: 150, md: 164, lg: 164, xl: 345}}}/>
            </Grid2>


            <Grid2>
              <Inputs 
                label="Mobile number"
                value = {mobilePhone}
                onChange = {validatePhone}
                sx={{width: { xs: 137, sm: 150, md: 164, lg: 164, xl: 345 }}} 
              > 
              </Inputs>
            </Grid2>


            <Grid2>
              <Inputs 
                label="Email adress" 
                className={styles.inputs}
                value = {emailAddress}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
              />
            </Grid2>


            <Grid2>
              <Inputs 
                label="Password" 
                className={styles.inputs}
                value = {password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
              />
            </Grid2>


            <Grid2>
              <Buttons 
                label="Save" 
                onClick={handleRegistration}
                className={styles.buttons}
                sx={{width: { xs: 290, sm: 320, md: 345, lg: 345, xl: 345 }, 
                
          }}/>
            </Grid2>

            <Grid2>
              <Link href="/login" passHref >
              <Typography
                component="div"
                className="link" 
                
                sx={{
                  "&:hover": { color: "#b5b5b3" }, 
                }}
              >
                Already have an account?
              </Typography>
            </Link>
            </Grid2>

        </Grid2>

        <Snackbar 
          open={openSnackbar} 
          autoHideDuration={3000} 
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          TransitionComponent={Grow} 
        >

        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>

    </Box>
  );
}

