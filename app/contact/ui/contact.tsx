"use client";
import image from "@/shared/assets/images/image-2.jpg";
import { BackgroundImage } from "@/shared/ui/backgroundImage";
import { BoxContactPage } from "@/shared/widgets/box/contact/boxContactPage";
import styles from "./contact.module.css";

const Contact = () => {

  return (
    <BackgroundImage image={image} altImage="Contact page background">
      <div className={styles.contactPage}>
        <BoxContactPage
          sx={{ width: { xs: 340, sm: 600, md: 700, lg: 800, xl: 800 },
            padding: { xs: 3 },
            paddingTop: { xs: 4, lg: 4.5 },
            marginTop: 7,

          }}
        />
      </div>
    </BackgroundImage>
  );
};
export default Contact;
