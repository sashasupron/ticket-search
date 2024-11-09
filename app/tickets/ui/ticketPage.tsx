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
      <BoxMainPage 
        className={styles.topCenter}
        sx={{ width: {
          xs: 300,
          sm: 600,
          md: 700,
          lg: 800,
          xl: 800,
        },

        height: {
          xs: 420,
          sm: 120,
          md: 130,
          lg: 135,
          xl: 110,
        },

        padding: {
          xs: 3,
        },

        paddingRight: {
          xs: 1.5,
        },

        paddingTop: {
          xs: 4,
          lg: 4.5,
        },

        paddingBottom: {
          xs: 3,
          sm: 2.5,
          md: 1.5,
          lg: 3,
          xl: 4,
        }
      }}/>




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
          },
      }}>
        
        Available Tickets
       </Typography>

      <Box 
        className={styles.ticketsContainer}
        sx = {{ width: {
          xs: "60%",
          lg: "50%",
          xl: "40%",
        },
        

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
