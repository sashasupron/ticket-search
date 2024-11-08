"use client";

import BoxTicketPage from "@/widgets/box/ticketPage/ui/boxTicketPage";
import { useEffect } from "react";
import { useTicketData } from "../model/useTicketData";
import styles from "./ticketPage.module.css";
import image from "@/shared/assets/images/image.jpg";
import { BackgroundImage } from "@/shared/ui/backgroundImage";
import { BoxMainPage } from "@/widgets/box/searchPage/ui/boxMainPage";
import { Box, Typography } from "@mui/material";


const TicketPage = () => {
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 300);

    return () => clearTimeout(scrollTimeout);
  }, []);

  const { tickets, isLoading } = useTicketData();

  if (isLoading) {
    return <div> Loading... </div>;
  }

  return (
    <BackgroundImage image={image} altImage="Ticiket page background">
    <div className={styles.ticketPage}>
      <BoxMainPage className={styles.topCenter} />
      <Typography 
        variant = "h1"
        className={styles.ticketHeading}
        sx={{
          marginTop: {
          xs: "30%",
          sm: "15%",
          md: "20%",
          lg: "3%",
          xl: "10%",
          },

          fontSize: {
            xs: 30,
            sm: 50,
            md: 50,
            lg: 50,
            xl: 80,
          }
          }}>
        
        Available Tickets
       </Typography>

      <Box 
        className={styles.ticketsContainer}
        sx = {{ width: {
          xs: "60%",
          lg: "50%",
          xl: "40%",
        }

        }}>
        {tickets.map((ticket) => (
          <BoxTicketPage key={ticket.id} ticket={ticket} />
        ))}
      </Box>
    </div>
    </BackgroundImage>
  );
};

export default TicketPage;
