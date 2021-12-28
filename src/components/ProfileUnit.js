import { useRef } from "react/cjs/react.development";

const ProfileUnit = ({ handleImageClick, image, idx }) => {
  const myRef = useRef();
  return (
    <div
      ref={myRef}
      className="cover"
      key={`${image.name}_${idx}_profile_mini`}
      onClick={(e) => {
        handleImageClick(e, myRef.current.getBoundingClientRect());
      }}
    >
      <img
        name={idx}
        className={`profile_small ${image.name}`}
        src={image.image}
        alt={image.name}
      />
    </div>
  );
};

export default ProfileUnit;
