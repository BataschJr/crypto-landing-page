import { FiArrowUpRight } from 'react-icons/fi';

const Email = () => {
  return (
    <>
      <div className="email-container">
        {/* <div className="pics"> */}
        <div className="img-container">
          <img src="./img1.jpg" alt="" className="img1" />
          <img src="./img2.jpg" alt="" className="img2" />
          <img src="./img3.jpg" alt="" className="img3" />
        </div>
        {/* </div> */}
        <div className="user-stats">
          <p>
            <span>3.5M+</span>
            <br />
            Users already hit the app
          </p>
        </div>
        <div className="email-text">
          <p>Discover the future of money as we explore various currencies, both traditional and digital, that shape the global economy.</p>
        </div>
        <div className="email">
          <div className="input-text">
            <input type="text" placeholder="Enter your email" />
            <div className="get-link">
              <div className="link-text">
                <p>Get link</p>
              </div>
              <div className="arrow-icon">
                <FiArrowUpRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
