import prof from "../img/_DSC8503.ARW.jpg";
import "../styles/profile-picture-holder.css";
export const ProfilePictureHolder = () => {
  return (
    <div className="holder">
      <img alt="profile" src={prof} className="prof" />
    </div>
  );
};
