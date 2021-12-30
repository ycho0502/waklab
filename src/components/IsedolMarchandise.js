import isedol_edge from "../assets/isedolMain/isedol_edge.png";
import Profile_bg from "../assets/isedolsDetail/Profile_bg.png";
import acrylic_stand from "../assets/isedolMarchandise/acrylic_stand.png";
import marchandise_title from "../assets/isedolMarchandise/marchandise_title.png";
import photocard from "../assets/isedolMarchandise/photocard.png";
import poster from "../assets/isedolMarchandise/poster.png";
import sticker from "../assets/isedolMarchandise/sticker.png";
import { useState } from "react";
import IsedolMarchandiseDetail from "./IsedolMarchandiseDetail";

import "./IsedolMarchandise.css";

const IsedolMarchandise = () => {
  const [isProductModal, setIsProductModal] = useState(false);
  const [productType, setProductType] = useState();

  const handleModal = (e) => {
    setIsProductModal(!isProductModal);
    setProductType(e.target.name);
  };

  return (
    <>
      {isProductModal ? (
        <IsedolMarchandiseDetail type={productType} handleModal={handleModal} />
      ) : null}
      <img src={isedol_edge} className="edge" alt="edge" />
      <img src={Profile_bg} className="marchandise_BG" alt="background" />
      <div className="marchandise_title">
        <img
          src={marchandise_title}
          alt="title"
          className="marchandise_title_image"
        />
      </div>
      <div className="items_container">
        <div className="left_item">
          <div className="photocard">
            <img
              onClick={handleModal}
              name="photoCard"
              src={photocard}
              className="photocard item"
              alt="photocard"
            />
          </div>

          <img
            onClick={handleModal}
            name="acrylic"
            src={acrylic_stand}
            className="acrylic item"
            alt="acrylic"
          />
        </div>
        <div className="center_item">
          <img
            onClick={handleModal}
            name="poster"
            src={poster}
            alt="poster"
            className="poster item"
          />
        </div>
        <div className="right_item">
          <img
            onClick={handleModal}
            name="sticker"
            src={sticker}
            alt="sticker"
            className="sticker item"
          />
        </div>
      </div>
    </>
  );
};

export default IsedolMarchandise;
