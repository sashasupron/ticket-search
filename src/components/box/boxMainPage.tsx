import { Box, Grid2 } from "@mui/material";
import Buttons from "../button/buttons";
import DatePick from "../date/datePicker";
import Inputs from "../inputs/inputs";
import PassengersClass from "../selects/selectClass";
import PassengersAmount from "../selects/selectPassengersAmount";
import styles from './boxMainPage.module.css';
import clsx from "clsx";


interface BoxMainPageProps {
  className?: string;
}


export default function BoxMainPage({ className }: BoxMainPageProps) {
  return (
    <Box
      component="form"

      className={clsx(styles.mainPageBox, className)}

      noValidate
      autoComplete="off"
    >
      <Grid2
        container
        spacing={2}
        
        sx={{
          marginTop: "-10px",
        }}
      >
        <Grid2>
          <Inputs label="Where from?" className={styles.inputs}/>
        </Grid2>

        <Grid2>
          <Inputs label="Where to?" className={styles.inputs}/>
        </Grid2>

        <Grid2>
          <PassengersClass />
        </Grid2>

        <Grid2>
          <DatePick label="Departure date" className={styles.datePicker}/>
        </Grid2>

        <Grid2>
          <DatePick label="Arrival date" className={styles.datePicker}/>
        </Grid2>

        <Grid2>
          <PassengersAmount />
        </Grid2>


        <Grid2>
          <Buttons label="Search" className={styles.searchButton} />
        </Grid2>

      </Grid2>
    </Box>
  );
}
