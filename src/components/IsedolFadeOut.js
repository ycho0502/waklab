import "./IsedolFadeOut.css";

const IsedolFadeOut = ({ isedol, top, left }) => {
  return (
    <div
      className="gold_frame"
      style={{ "--left": `${left}px`, "--top": `${top}px` }}
    >
      <div className="img_frame">
        <img
          className="Isedol_Profile_Resource"
          alt={isedol.name}
          src={isedol.image}
        />
      </div>
    </div>
  );
};

export default IsedolFadeOut;
