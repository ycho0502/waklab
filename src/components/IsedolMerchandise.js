import isedol_edge from "../assets/isedolMain/isedol_edge.png";
import Profile_bg from "../assets/isedolsDetail/Profile_bg.png";
import acrylic_stand from "../assets/isedolMerchandise/acrylic_stand.png";
import merchandise_title from "../assets/isedolMerchandise/merchandise_title.png";
import photocard from "../assets/isedolMerchandise/photocard.png";
import poster from "../assets/isedolMerchandise/poster.png";
import sticker from "../assets/isedolMerchandise/sticker.png";
import { useState } from "react";
import IsedolMerchandiseDetail from "./IsedolMerchandiseDetail";

import "./IsedolMerchandise.css";

const IsedolMerchandise = () => {
  const [isProductModal, setIsProductModal] = useState(false);
  const [productType, setProductType] = useState();

  const handleModal = (e) => {
    console.log(e.target.className);
    if (
      e.target.className === "mini_isedol" ||
      e.target.className === "sticker_product"
    ) {
      return;
    }
    setIsProductModal(!isProductModal);
    setProductType(e.target.name);
  };

  return (
    <>
      {isProductModal ? (
        <IsedolMerchandiseDetail
          type={productType}
          handleModal={handleModal}
        />
      ) : null}
      <img src={isedol_edge} className="edge" alt="edge" />
      <img
        src={Profile_bg}
        className="merchandise_BG"
        alt="background"
      />
      <div className="merchandise_title">
        <img
          src={merchandise_title}
          alt="title"
          className="merchandise_title_image"
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

export default IsedolMerchandise;
