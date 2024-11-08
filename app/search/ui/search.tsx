import image from "@/shared/assets/images/background2-1-photoaidcom-darken.png";
import { BackgroundImage } from "@/shared/ui/backgroundImage";
import Description from "@/shared/ui/banners/bannerText";
import { BoxMainPage } from "@/widgets/box/searchPage/ui/boxMainPage";
import styles from "./search.module.css";

const Search = () => {
  return (
    <BackgroundImage image={image} altImage="Main page background">
       <BoxMainPage className={styles.centered} />
      <Description label="Explore your adventures! Book flights now!" />
    </BackgroundImage>
  );
};
export default Search;
