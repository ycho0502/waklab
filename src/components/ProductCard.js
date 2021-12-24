import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard(img) {
  const [image, setImage] = useState(img);

  return (
    <div className="wrapper">
      <div className="card">
        <img src={image.img}></img>
        <div className="card_content">
          <div className="card_row">
            <div className="card_details">
              <span>Hoodies</span>
              <p>Hoods</p>
            </div>
          </div>
          <div className="card_buttons">
            <button>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
