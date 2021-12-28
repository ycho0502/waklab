import { useEffect, useState } from "react";
import { useRef } from "react/cjs/react.development";

const ProfileUnit = ({ handleImageClick, image, idx, isModalOpen }) => {
  const [clicked, setClicked] = useState(false);
  const myRef = useRef();

  const handleclick = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (!isModalOpen) setClicked(false);
  }, [isModalOpen]);

  return (
    <div
      ref={myRef}
      className={`cover`}
      key={`${image.name}_${idx}_profile_mini`}
      onClick={(e) => {
        handleclick();
        handleImageClick(e, myRef.current.getBoundingClientRect());
      }}
    >
      <img
        name={idx}
        className={`profile_small ${image.name} ${clicked ? "hide" : ""}`}
        src={image.image}
        alt={image.name}
      />
    </div>
  );
};

export default ProfileUnit;
