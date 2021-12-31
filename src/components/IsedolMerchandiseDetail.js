import { useState } from "react";
import { isedolMerchandiseDetail } from "./data/isedolMerchandiseDetail";
import "./IsedolMerchandiseDetail.css";
import {
  Acrylic,
  PhotoCard,
  Poster,
  Stricker,
} from "./IsedolProductDetail";
import Profile_bg from "../assets/isedolsDetail/Profile_bg.png";

const IsedolMerchandiseDetail = ({ type, handleModal }) => {
  const [merchandise] = useState(
    isedolMerchandiseDetail.filter((item) => {
      return item.type === type;
    }),
  );

  const handleDetailPage = () => {
    switch (merchandise[0].type) {
      case "poster":
        return <Poster {...merchandise[0]} />;
      case "sticker":
        return <Stricker {...merchandise[0]} />;
      case "photoCard":
        return <PhotoCard {...merchandise[0]} />;
      case "acrylic":
        return <Acrylic {...merchandise[0]} />;
      default:
        return null;
    }
  };

  return (
    <section className="marchabdise_detail" onClick={handleModal}>
      {merchandise ? handleDetailPage() : null}
      <img
        className="merchandiseDetail_BG"
        src={Profile_bg}
        alt="background"
      />
    </section>
  );
};

export default IsedolMerchandiseDetail;
