"use client";
import { Box, Grid2, SxProps } from "@mui/material";
import { DatePickers } from "@/shared/ui/pickers/datePicker";
import { Autocompletes } from "@/shared/ui/autocomplete/autocomplete";
import { Buttons } from "@/shared/ui/buttons/buttons";
import styles from './boxMainPage.module.css';
import { Selects } from "@/shared/ui/selects/selects"
import clsx from "clsx";
import React from "react";

interface BoxMainPageProps {
  className?: string;
  sx?: SxProps;
}

export function BoxMainPage({ className, sx }: BoxMainPageProps) {
  return (
    <Box
      component="form" 
      className={clsx(styles.mainPageBox, className)} 
      autoComplete="off"
      sx={sx}
      onSubmit={(e) => e.preventDefault()}
    >
      <Grid2 container spacing={2} sx={{ marginTop: "-10px" }}>
        <Grid2>
          <Autocompletes label="Where from?" className={styles.inputs} 
          />
        </Grid2>

        <Grid2>
          <Autocompletes label="Where to?" className={styles.inputs} />
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
            sx={{
              width: { xs: 327, sm: 120, md: 150, lg: 180, xl: 180 }
            }}
          />
        </Grid2>

        <Grid2>
          <DatePickers 
            label="Departure date" 
            className={styles.datePicker}
            sx={{ width: { xs: 155, sm: 138, md: 172, lg: 207, xl: 207 }}}
          />
        </Grid2>

        <Grid2>
          <DatePickers 
            label="Arrival date" 
            className={styles.datePicker}
            sx={{ width: { xs: 155, sm: 138, md: 172, lg: 207, xl: 207 }}}
          />
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
            sx={{
              width: { xs: 327, sm: 120, md: 150, lg: 180, xl: 180 }
            }}
          />
        </Grid2>


        <Grid2>
          <Buttons 
            label="Search" 
            className={styles.searchButton} 
            sx={{ width: { xs: 327, sm: 150, md: 150, lg: 150, xl: 150 } }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
