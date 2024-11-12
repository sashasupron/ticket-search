import image from "@/shared/assets/images/Unknown-6-modified.jpg";
import { BackgroundImage } from "@/shared/ui/backgroundImage";
import { BoxLoginPage } from "@/shared/widgets/box/login/boxLoginPage"
import styles from "./login.module.css";
import { Typography } from "@mui/material";


const Login = () => {
    return (
        <BackgroundImage image={image} altImage="Login page background">
            <div className={styles.loginPage}>
                <Typography
                    className = {styles.loginPageText}
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
                    Log in!
                </Typography>
                <BoxLoginPage className={styles.centered} />
            </div>
        </BackgroundImage>
    );
}
export default Login;