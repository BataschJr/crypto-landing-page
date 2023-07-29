import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Socials from './Socials/Socials';

import './Header.scss';

const Header = () => {
  return (
    <>
      <div className="flex-container header">
        <Logo />
        <Socials />
        <Navbar />
        <Profile />
      </div>
    </>
  );
};

export default Header;
