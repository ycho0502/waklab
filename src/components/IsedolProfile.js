import "./IsedolProfile.css";

const IsedolProfile = ({ isedolProfileData, handleImageClick }) => {
  if (!Array.isArray(isedolProfileData) || isedolProfileData.length <= 0) {
    return null;
  }
  const topline = isedolProfileData.slice(0, 3);
  const bottumline = isedolProfileData.slice(3);

  return (
    <div class="isedol_profile">
      <div class="topLineContainer">
        {topline.map((image) => (
          <div className="cover gosegu">
            <img
              onClick={handleImageClick}
              className={`profile_small ${image.name}`}
              src={image.image}
              alt={image.name}
            />
          </div>
        ))}
      </div>
      <div className="bottumLineContainer">
        {bottumline.map((image) => (
          <div className="cover">
            <img
              className={`profile_small ${image.name}`}
              src={image.image}
              alt={image.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IsedolProfile;
