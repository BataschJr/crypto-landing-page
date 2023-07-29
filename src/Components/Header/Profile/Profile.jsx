import { RxBell } from 'react-icons/rx';

const Profile = () => {
  return (
    <div className="profile">
      <div className="noti-icon">
        <RxBell />
      </div>
      <div className="img-container">
        <img src="profile-picture.jpg" alt="profile-pic" />
      </div>
    </div>
  );
};

export default Profile;
