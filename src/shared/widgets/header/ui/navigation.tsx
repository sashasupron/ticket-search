"use client"; 

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link"; 
import airplaneIcon from "@/shared/assets/icons/airplane-travelling-around-earth-svgrepo-com.svg";
import "./navigation.css";

export function NavBar() {
  return (
    <AppBar
      position="fixed"
      className="transparent"
      sx={{
        bgcolor: "transparent",
        height: 80,
        paddingTop: 1.5,
        paddingLeft: 3,
        boxShadow: "none", 
        fontSize: {
          xs: 10,
        }
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/search" passHref className = "link">
            <Image 
              src={airplaneIcon} 
              alt="Airplane Icon" 
              width={24} 
              height={24} 
            />
          </Link>

          <Link href="/search" passHref className = "link">
            <Typography
              variant="h5"
              component="div"
              sx={{ 
                fontFamily: "Roboto", 
                marginLeft: 2,
                color: "white" 
              }}              
            >
              TBSky
            </Typography>
          </Link>
          
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/login" passHref className = "link">
            <Typography variant="h5" component="div" sx={{ marginTop: 0.5, color: 'white' }}>
              Login
            </Typography>
          </Link >

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
