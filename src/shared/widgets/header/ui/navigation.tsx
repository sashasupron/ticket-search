"use client"; 

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link"; 
import airplaneIcon from "@/shared/assets/icons/airplane-travelling-around-earth-svgrepo-com.svg";
import "./navigation.css";
import PermIdentityIcon from "@/shared/assets/icons/account1.svg";

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
          xs: 4,
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
              width={28} 
              height={28} 
            />
          </Link>

          <Link href="/search" passHref className = "link">
            <Typography
              variant="h5"
              component="div"
              sx={{ 
                marginLeft: {xs: 1, lg: 2, xl: 2},
                fontSize: { xs: 17, sm: 20, md: 22, lg: 22, xl: 24 } 
              }}           
            >
              TBSky
            </Typography>
          </Link>
          
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* <Link href="/login" passHref className = "link">
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                marginTop: 0.5, 
                fontSize: { xs: 17, sm: 20, md: 22, lg: 22, xl: 24 } 
              }}
              >
              Login
            </Typography>
          </Link > */}

          <Typography
            variant="h5"
            component="div"
            sx={{ 
              marginTop: 0.5, 
              marginLeft: {xs: 2, md: 3, lg: 4, xl: 5},
              fontSize: { xs: 17, sm: 20, md: 22, lg: 22, xl: 24 } 
            }}
          >
            Promotions
          </Typography>



          <Link href="/contact" passHref className = "link">
            <Typography
              variant="h5"
              component="div"
              sx={{ 
                marginTop: 0.5, 
                marginLeft: {xs: 2, md: 3, lg: 4, xl: 5},
                marginRight: {xs: 2, md: 3, lg: 3, xl: 5},
                fontSize: { xs: 17, sm: 20, md: 22, lg: 22, xl: 24 } 
              }}
            >
              Contact Us
            </Typography>
          </Link>

          <Link href="/login" passHref className = "link">
            <Image 
                src={PermIdentityIcon} 
                alt="PermIdentityIcon" 
                width={28} 
                height={28} 
              />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
