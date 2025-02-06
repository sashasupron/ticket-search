"use client";
import { Box, Grid2, Typography, Snackbar, Alert, Grow, IconButton } from "@mui/material";
import styles from "./boxLoginPage.module.css";
import clsx from "clsx";
import { Inputs } from "@/shared/ui/inputs/inputs";
import { Buttons } from "@/shared/ui/buttons/buttons";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface BoxLoginPageProps {
  className?: string;
}
  
export function BoxLoginPage({ className }: BoxLoginPageProps) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();



  const handleLogin = () => {
    if (!login || !password) {
      setError("Please write login and password");
      setOpenSnackbar(true);
      return
    }
    router.push(`/tickets`)
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };


  return (
      <Box
        component="form" 
        className={clsx(styles.loginPageBox, className)} 
        noValidate autoComplete="off"
        sx={{width: { xs: 300, sm: 330, md: 345, lg: 345, xl: 345 },
          height: { xs: 230, sm: 230, md: 230, lg: 230, xl: 230 },
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
              label="Email adress or phone number" 
              className={styles.inputs}
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </Grid2>

          <Grid2>
            <Inputs 
              type={showPassword ? 'text' : 'password'}
              label="Password" 
              className={styles.inputs}
              value = {password}
              onChange={(e) => setPassword(e.target.value)}

              endAdornment={
                <IconButton onClick={toggleShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
          </Grid2>

          <Grid2>
            <Buttons 
              label="Log in" 
              onClick={handleLogin}
              className={styles.buttons}
              sx={{width: { xs: 290, sm: 320, md: 345, lg: 345, xl: 345 }}}/>
          </Grid2>

          <Grid2>
            <Link href="/reg" passHref >
              <Typography
                component="div"
                className="link"    
                sx={{ "&:hover": { color: "#b5b5b3" }}}
              >
                Create new account
              </Typography>
            </Link>

            <Link href="/reg" passHref >
              <Typography
                component="div"
                className="link"    
                sx={{ "&:hover": { color: "#b5b5b3" }}}
              >
                Forgotten password?
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
