import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Market</a>
          </li>
          <li>
            <a href="#">Exchange</a>
          </li>
          <li>
            <a href="#">Activity</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Search" />
        <div className="icon-search">
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
