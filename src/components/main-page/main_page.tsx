import Image from "next/image";
import image from "./assets/background2.png";
import BoxMain from "./box/box";
import "./main_page.css";
import Description from "./text/text";

function MainPage() {
  return (
    <div className="fullscreen">
      <Image src={image} className="full-img" alt={"Main page backgroud"} />
      <BoxMain />
      <Description />
    </div>
  );
}

export default MainPage;
