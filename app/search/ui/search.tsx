import image from "@/shared/assets/images/gfgg.png";
import { BackgroundImage } from "@/shared/ui/backgroundImage";
import { BoxMainPage } from "@/shared/widgets/box/searchPage/ui/boxMainPage";
import { Typography } from "@mui/material";
import styles from "./search.module.css";

const Search = () => {
  return (
    <BackgroundImage image={image} altImage="Main page background">
      <div className={styles.searchPage}>
<<<<<<< HEAD
        <BoxMainPage
          sx={{
            width: {
              xs: 300,
              sm: 600,
              md: 700,
              lg: 800,
              xl: 800,
            },

            height: {
              xs: 420,
              sm: 120,
              md: 130,
              lg: 150,
              xl: 110,
            },

            padding: {
              xs: 3,
            },

            paddingRight: {
              xs: 1.5,
            },

            paddingTop: {
              xs: 4,
              lg: 4.5,
            },

            paddingBottom: {
              xs: 1.5,
              sm: 3,
              md: 1.5,
              lg: 1,
              xl: 4,
            },
          }}
        />

        <Typography
          className={styles.searchPageText}
          sx={{
            fontSize: {
              xs: 20,
              sm: 21,
              md: 28,
              lg: 33,
              xl: 43,
            },
          }}
        >
=======
        <BoxMainPage />
        <Typography 
          className = {styles.searchPageText}
          sx = {{ fontSize: { xs: 20, sm: 21, md: 28, lg: 33, xl: 43 }}}> 
          
>>>>>>> main
          Explore your adventures! Book flights now!
        </Typography>
      </div>
    </BackgroundImage>
  );
};
export default Search;
