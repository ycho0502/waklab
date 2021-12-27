import "./IsedolDetail.css";
import Profile_bg from "../assets/isedolsDetail/Profile_bg.png";
import { useCallback } from "react";

const IsedolDetail = ({ isedol, handleImageClick }) => {
  const handleClick = useCallback(
    () => handleImageClick({ target: { name: 0 } }),
    []
  );
  return (
    <section className="isedol_BG" onClick={handleClick}>
      <div className="Profile_container">
        <img className="isedol_background" src={Profile_bg} alt="background" />
        <img
          className="isedol_write"
          src={isedol.write}
          alt={`write_${isedol.name}`}
        />
        <img
          className="isedol_Profile center"
          src={isedol.image}
          alt={isedol.name}
        />
        <img
          className="isedol_text center"
          src={isedol.text}
          alt={`text_${isedol.name}`}
        />
        <img
          className="isedol_sign center"
          src={isedol.sign}
          alt={`sign_${isedol.name}`}
        />
      </div>
    </section>
  );
};

export default IsedolDetail;
