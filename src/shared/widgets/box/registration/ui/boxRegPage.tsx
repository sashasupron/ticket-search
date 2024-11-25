"use client";
import { Box, Grid2, Typography } from "@mui/material";
import styles from "./boxRegPage.module.css";
import clsx from "clsx";
import { Inputs } from "@/shared/ui/inputs/inputs";
import { DatePickers } from "@/shared/ui/pickers/datePicker";
import { Buttons } from "@/shared/ui/buttons/buttons";
import Link from "next/link";

interface BoxRegPageProps {
  className?: string;
}
  
export function BoxRegPage({ className }: BoxRegPageProps) {
    return (
        <Box
          component="form" 
          className={clsx(styles.regPageBox, className)} 
          noValidate autoComplete="off"
          sx={{width: {
            xs: 300,
            sm: 330,
            md: 345,
            lg: 345,
            xl: 345,
          },

          height: {
            xs: 420,
            sm: 420,
            md: 420,
            lg: 420,
            xl: 500,
          },
  
          padding: {
            xs: 3,
            xl: 4,
          },
        }}
        >

        <Grid2 
          container 
          spacing={2} 
          sx={{ marginTop: "-10px" }}
          justifyContent="center" 
          alignItems="center">
            <Grid2>
              <Inputs label="First name" className={styles.inputs}
            />
            </Grid2>

            <Grid2>
              <Inputs label="Surname" className={styles.inputs}
            />
            </Grid2>

            <Grid2>
              <DatePickers 
                label="Date of birth" 
                className={styles.datePickers}
                sx = {{width: {
                  xs: 137,
                  sm: 150,
                  md: 164,
                  lg: 164,
                  xl: 345}
                  }}/>
            </Grid2>

            <Grid2>
              <Inputs label="Mobile number"
                sx={{width: {
                  xs: 137,
                  sm: 150,
                  md: 164,
                  lg: 164,
                  xl: 345,
                },
              }} 
              >
              </Inputs>
            </Grid2>

            <Grid2>
              <Inputs label="Email adress" className={styles.inputs}/>
            </Grid2>

            <Grid2>
              <Inputs label="Password" className={styles.inputs}/>
            </Grid2>

            <Grid2>
              <Buttons 
                label="Save" 
                className={styles.buttons}
                sx={{width: {
                  xs: 290,
                  sm: 320,
                  md: 345,
                  lg: 345,
                  xl: 345,
                },
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
    </Box>
  );
}
