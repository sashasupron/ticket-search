import image from "@/shared/assets/images/background2-1-photoaidcom-darken.png";
import Description from "@/shared/ui/banners/bannerText";
import { BoxMainPage } from "@/widgets/box/searchPage/ui/boxMainPage";
import Image from "next/image";
import "./searchPage.module.css";

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
