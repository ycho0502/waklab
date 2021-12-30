import "./IsedolProfile.css";
import ProfileUnit from "./ProfileUnit";

const IsedolProfile = ({
  isedolProfileData,
  handleImageClick,
  isModalOpen,
}) => {
  if (!Array.isArray(isedolProfileData) || isedolProfileData.length <= 0) {
    return null;
  }
  const topline = isedolProfileData.slice(0, 3);
  const bottumline = isedolProfileData.slice(3);

  return (
    <div className="isedol_profile">
      <div className="topLineContainer">
        {topline.map((image, idx) => (
          <ProfileUnit
            handleImageClick={handleImageClick}
            isModalOpen={isModalOpen}
            image={image}
            idx={idx}
          />
        ))}
      </div>
      <div className="bottumLineContainer">
        {bottumline.map((image, idx) => (
          <ProfileUnit
            handleImageClick={handleImageClick}
            isModalOpen={isModalOpen}
            image={image}
            idx={idx + 3}
          />
        ))}
      </div>
    </div>
  );
};

export default IsedolProfile;
