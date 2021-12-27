import "./IsedolProfile.css";

const IsedolProfile = ({ isedolProfileData, handleImageClick }) => {
  if (!Array.isArray(isedolProfileData) || isedolProfileData.length <= 0) {
    return null;
  }
  const topline = isedolProfileData.slice(0, 3);
  const bottumline = isedolProfileData.slice(3);

  return (
    <div className="isedol_profile">
      <div className="topLineContainer">
        {topline.map((image, idx) => (
          <div className="cover" key={`${image.name}_${idx}_profile_mini`}>
            <img
              name={idx}
              onClick={handleImageClick}
              className={`profile_small ${image.name}`}
              src={image.image}
              alt={image.name}
            />
          </div>
        ))}
      </div>
      <div className="bottumLineContainer">
        {bottumline.map((image, idx) => (
          <div className="cover" key={`${image.name}_${idx}_profile_mini`}>
            <img
              name={idx + 3}
              onClick={handleImageClick}
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
