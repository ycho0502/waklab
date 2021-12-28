import isedol_edge from "../assets/isedolMain/isedol_edge.png";
import Profile_bg from "../assets/isedolsDetail/Profile_bg.png";
import acrylic_stand from "../assets/isedolMarchandise/acrylic_stand.png";
import marchandise_title from "../assets/isedolMarchandise/marchandise_title.png";
import photocard from "../assets/isedolMarchandise/photocard.png";
import poster from "../assets/isedolMarchandise/poster.png";
import sticker from "../assets/isedolMarchandise/sticker.png";

import "./IsedolMarchandise.css";
const IsedolMarchandise = () => {
  return (
    <>
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
            <img src={photocard} className="photocard item" alt="potocard" />
          </div>

          <img src={acrylic_stand} className="acrylic item" alt="acrylic" />
        </div>
        <div className="center_item">
          <img src={poster} alt="poster" className="poster item" />
        </div>
        <div className="right_item">
          <img src={sticker} alt="sticker" className="sticker item" />
        </div>
      </div>
    </>
  );
};

export default IsedolMarchandise;
