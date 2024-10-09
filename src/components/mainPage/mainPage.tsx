import Image from "next/image";
import image from ".../assets/background2.png"
import BoxMainPage from "../box/boxMainPage";
import "./mainPage.moddule.css";
import Description from "../text/bannerText";

function MainPage() {
  return (
    <div className="fullscreen">
      <Image src={image} className="full-img" alt={"Main page backgroud"} />
      <BoxMainPage />
      <Description label="Explore your adventures! Book flights now!" />
    </div>
  );
}

export default MainPage;