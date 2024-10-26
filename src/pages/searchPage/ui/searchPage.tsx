import Image from "next/image";
import image from "@/shared/assets/images/background2-1-photoaidcom-darken.png";
import { BoxMainPage } from "@/widgets/box/searchPage/ui/boxMainPage";
import "./searchPage.module.css";
import Description from "@/shared/ui/banners/bannerText";

const SearchPage = () => {
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
};
export default SearchPage;
