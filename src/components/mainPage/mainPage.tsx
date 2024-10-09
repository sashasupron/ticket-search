import Image from "next/image";
import image from "../assets1/background-photoaidcom-darken.jpg";
import BoxMainPage from "../box/boxMainPage";
import "./mainPage.module.css";
import Description from "../text/bannerText";

function MainPage() {
  return (
    <div className="fullscreen">
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
