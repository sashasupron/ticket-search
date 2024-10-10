import Image from "next/image";
import image from "../assets1/background2-1.png";
import BoxMainPage from "../box/boxMainPage";
import "./mainPage.module.css";
import Description from "../text/bannerText";
import { Typography } from "@mui/material"; 

function MainPage() {
  return (
    <div className="fullscreen">
       <Description label="Explore your adventures! Book flights now!" />
      <Image 
        src={image} 
        className="full-img" 
        alt={"Main page background"} 
        layout="fill" 
        objectFit="cover" 
      />
      <BoxMainPage />
      <Description label="Explore your adventures! Book flights now!" />
  
    </div>
  );
}

export default MainPage;
