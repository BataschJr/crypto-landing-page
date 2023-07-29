import { BsInstagram } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { BiLogoFacebook } from 'react-icons/bi';

const Socials = () => {
  return (
    <div className="socials">
      <div className="icon">
        <BiLogoFacebook />
      </div>
      <div className="icon">
        <BsInstagram />
      </div>
      <div className="icon">
        <FaTwitter />
      </div>
    </div>
  );
};

export default Socials;
