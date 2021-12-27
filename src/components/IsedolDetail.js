import "./IsedolDetail.css";
import Profile_bg from "../assets/isedolsDetail/Profile_bg.png";
import { useCallback } from "react";
import { useState } from "react/cjs/react.development";

const IsedolDetail = ({ isedol, handleModalClose, isModalOpen }) => {
  const [isModal, setisModal] = useState(isModalOpen);

  const handleClick = useCallback(() => {
    setisModal(false);
    setTimeout(() => {
      handleModalClose();
    }, 1000);
  }, []);

  return (
    <>
      <img
        className="isedol_Profile center"
        src={isedol.image}
        alt={isedol.name}
      />
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
    </>
  );
};

export default IsedolDetail;
