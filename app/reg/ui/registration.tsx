import image from "@/shared/assets/images/Unknown-6-modified.jpg";
import { BackgroundImage } from "@/shared/ui/backgroundImage";
import { BoxRegPage } from "@/shared/widgets/box/registration/ui/boxRegPage"
import styles from "./registration.module.css";
import { Typography } from "@mui/material";


const Registration = () => {
    return (
        <BackgroundImage image={image} altImage="Registartion page background">
            <div className={styles.regPage}>
                <Typography
                    className = {styles.regPageText}
                    sx = {{       
                    fontSize: {
                        xs: 20,
                        sm: 21,
                        md: 28,
                        lg: 30,
                        xl: 43,
                    }
                    }}
                > 
                    Create a new account
                </Typography>
                <BoxRegPage className={styles.centered} />
            </div>
        </BackgroundImage>
    );
}
export default Registration;