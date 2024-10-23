"use client"; 

import { AppBar, Box, SvgIcon, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import airplaneIcon from "@/shared/assets/icons/airplane-travelling-around-earth-svgrepo-com.svg";
import "./navigation.css";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }
    };

    window.addEventListener("scroll", handleScroll); 

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      className={isScrolled ? "scrolled" : "transparent"}
      sx={{
        bgcolor: isScrolled ? "#69451e" : "transparent",
        height: 80,
        paddingTop: 1.5,
        paddingLeft: 3,
      }}
      elevation={isScrolled ? 4 : 0}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SvgIcon component="span">
            <Image
              src={airplaneIcon}
              alt="Airplane Icon"
              style={{ width: "120%", height: "auto" }}
            />
          </SvgIcon>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto", marginLeft: 2 }}
          >
            TBSky
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h5" component="div" sx={{ marginTop: 0.5 }}>
            Login
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ marginTop: 0.5, marginLeft: 3 }}
          >
            Promotions
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ marginTop: 0.5, marginLeft: 3, marginRight: 2 }}
          >
            Contact Us
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
