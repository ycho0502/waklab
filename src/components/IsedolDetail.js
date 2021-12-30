import "./IsedolDetail.css";
import Profile_bg from "../assets/isedolsDetail/Profile_bg.png";
import { useCallback, useState } from "react";
import IsedolFadeOut from "./IsedolFadeOut";

const IsedolDetail = ({ isedol, handleModalClose, isModalOpen, top, left }) => {
  const [isModal, setisModal] = useState(isModalOpen);
  const handleClick = useCallback(() => {
    setTimeout(() => {
      setisModal(false);
      handleModalClose();
    }, 300);
  }, []);

  return (
    <div>
      {isModal ? <IsedolFadeOut isedol={isedol} top={top} left={left} /> : null}
      <section
        className={`isedol_BG ${isModal ? "open" : "close"}`}
        onClick={handleClick}
      >
        <div className="Profile_container">
          <img
            className="isedol_background"
            src={Profile_bg}
            alt="background"
          />
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
    </div>
  );
};

export default IsedolDetail;
