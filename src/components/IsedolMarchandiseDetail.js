import { useState } from "react";
import { isedolMarchandiseDetail } from "./data/isedolMarchandiseDetail";
import "./IsedolMarchandiseDetail.css";
import {
  Acrylic,
  PhotoCard,
  Poster,
  Stricker,
} from "./IsedolProductDetail";
import Profile_bg from "../assets/isedolsDetail/Profile_bg.png";

const IsedolMarchandiseDetail = ({ type }) => {
  const [marchandise] = useState(
    isedolMarchandiseDetail.filter((item) => {
      return item.type === type;
    }),
  );

  const handleDetailPage = () => {
    console.log(marchandise);
    switch (marchandise[0].type) {
      case "poster":
        return <Poster {...marchandise[0]} />;
      case "sticker":
        return <Stricker {...marchandise[0]} />;
      case "photoCard":
        return <PhotoCard {...marchandise[0]} />;
      case "acrylic":
        return <Acrylic {...marchandise[0]} />;
      default:
        return null;
    }
  };

  return (
    <section className="marchabdise_detail">
      {marchandise ? handleDetailPage() : null}
      <img
        className="marchandiseDetail_BG"
        src={Profile_bg}
        alt="background"
      />
    </section>
  );
};

export default IsedolMarchandiseDetail;