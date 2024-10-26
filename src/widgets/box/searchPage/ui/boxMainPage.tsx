"use client";
import { Box, Grid2 } from "@mui/material";
import { Buttons } from "@/shared/ui/buttons/buttons";
import { DatePickers } from "@/shared/ui/pickers/datePicker";
import { Inputs } from "@/shared/ui/inputs/inputs";
import { Selects } from "@/shared/ui/selects/selects";
import styles from './boxMainPage.module.css';
import clsx from "clsx";
import Link from 'next/link';

interface BoxMainPageProps {
  className?: string;
}

export function BoxMainPage({ className }: BoxMainPageProps) {


  return (
    <Box component="form" className={clsx(styles.mainPageBox, className)} noValidate autoComplete="off">
      <Grid2 container spacing={2} sx={{ marginTop: "-10px" }}>
        <Grid2>
          <Inputs label="Where from?" className={styles.inputs}/>
        </Grid2>

        <Grid2>
          <Inputs label="Where to?" className={styles.inputs}/>
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
            sx={{ width: 185 }}
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
            sx={{ width: 130 }}
          />
        </Grid2>

        <Grid2>
        <Link href="/ticketPage" passHref>
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
