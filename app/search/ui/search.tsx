import image from "@/shared/assets/images/background2-1-photoaidcom-darken.png";
import { BackgroundImage } from "@/shared/ui/backgroundImage";
import { BoxMainPage } from "@/shared/widgets/box/searchPage/ui/boxMainPage";
import styles from "./search.module.css";
import { Typography } from '@mui/material';

const Search = () => {
  return (
    <BackgroundImage image={image} altImage="Main page background">
      <div className={styles.searchPage}>
        <BoxMainPage />
        <Typography 
          className = {styles.searchPageText}
          sx = {{ fontSize: { xs: 20, sm: 21, md: 28, lg: 33, xl: 43 }}}> 
          
          Explore your adventures! Book flights now!
        </Typography>
      </div>
    </BackgroundImage>
  );
};
export default Search;
