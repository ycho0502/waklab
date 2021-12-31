import { useEffect, useState, useRef } from "react";

const ProfileUnit = ({ handleImageClick, image, idx, isModalOpen }) => {
  const [clicked, setClicked] = useState(false);
  const [isShown, setIsShown] = useState(false);
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
      className={`cover `}
      key={`${image.name}_${idx}_profile_mini`}
      onClick={() => {
        handleclick();
        handleImageClick(idx, myRef.current.getBoundingClientRect());
      }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown ? (
        <div className={`hover_bg ${clicked ? "hide" : ""}`}>
          <span className="hover_name">{image.name}</span>
        </div>
      ) : null}
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
