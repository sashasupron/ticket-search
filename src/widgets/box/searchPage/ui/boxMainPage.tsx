"use client";
import { Box, Grid2 } from "@mui/material";
import { Buttons } from "@/shared/ui/buttons/buttons";
import { DatePickers } from "@/shared/ui/pickers/datePicker";
import { Autocompletes } from "@/shared/ui/autocomplete/autocomplete";
import { Selects } from "@/shared/ui/selects/selects";
import styles from './boxMainPage.module.css';
import clsx from "clsx";
import Link from 'next/link';

interface BoxMainPageProps {
  className?: string;
}

export function BoxMainPage({ className }: BoxMainPageProps) {


  return (
    <Box
      component="form" 
      className={clsx(styles.mainPageBox, className)} 
      noValidate autoComplete="off"
      sx={{width: {
          xs: 300,
          sm: 600,
          md: 700,
          lg: 800,
          xl: 800,
        },
        height: {
          xs: 420,
          sm: 110,
          md: 110,
          lg: 110,
          xl: 110,
        },

        padding: {
          xs: 3,
          xl: 4,
        },

        
      }}
    >
      <Grid2 container spacing={2} sx={{ marginTop: "-10px" }}>
        <Grid2>
          <Autocompletes label="Where from?" className={styles.inputs}/>
        </Grid2>

        <Grid2>
          <Autocompletes label="Where to?" className={styles.inputs}/>
        </Grid2>

        <Grid2>
          <Selects
            label="Class"
            className="passengers_class"
            menuItems={[
              { value: "Econom", label: "Econom" },
              { value: "Business", label: "Business" },
              { value: "FirstClass", label: "First Class" },
            ]}
          />
        </Grid2>

        <Grid2>
          <DatePickers label="Departure date" className={styles.datePicker}/>
        </Grid2>

        <Grid2>
          <DatePickers label="Arrival date" className={styles.datePicker}/>
        </Grid2>

        <Grid2>
          <Selects
            label="Amount"
            className="passengersAmount"
            menuItems={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
            ]}
          />
        </Grid2>

        <Grid2>
        <Link href="/tickets" passHref>
          <Buttons 
            label="Search" 
            className={styles.searchButton} 
          />
          </Link>
        </Grid2>
      </Grid2>
    </Box>
  );
}
