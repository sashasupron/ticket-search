import image from "@/shared/assets/images/background2-1-photoaidcom-darken.png";
import { BackgroundImage } from "@/shared/ui/backgroundImage";
import Description from "@/shared/ui/banners/bannerText";
import { BoxMainPage } from "@/widgets/box/searchPage/ui/boxMainPage";
import "./searchPage.module.css";

const SearchPage = () => {
  return (
    <BackgroundImage image={image} altImage="Main page background">
      <BoxMainPage />
      <Description label="Explore your adventures! Book flights now!" />
    </BackgroundImage>
  );
};
export default SearchPage;
