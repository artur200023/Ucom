import { AiOutlineSearch } from "react-icons/ai";
import { SlWallet } from "react-icons/sl";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header_section">
        <div className="container">
          <div className="header_up">
            <ul className="up_links">
              <li>
                <Link to="/">Անհատներ</Link>
              </li>
              <li>
                <Link to="">Բիզնես</Link>
              </li>
            </ul>
            <div className="info_top">
              <div className="info_img">
                <img src={"/resources/images/Vector (3).png"} alt="" title="" />
              </div>
              <Link to="tel:+37444400400" className="phone_block">
                + 374 44 400 400
              </Link>
              <ul className="lng_block">
                <li>
                  <Link to="">հայ</Link>
                </li>
                <li>
                  <Link to="">pус</Link>
                </li>
                <li>
                  <Link to="">eng</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header_down">
            <div className="logo">
              <img src={"/resources/images/Vector (2).png"} alt="" />
            </div>
            <div className="down_links">
              <ul className="menu_list">
                <li>
                  <Link to="">Լավագույն առաջարկ</Link>
                </li>
                <li>
                  <Link to="">Շարժական կապ</Link>
                </li>
                <li>
                  <Link to="">Ֆիքսված կապ</Link>
                </li>
                <li>
                  <Link to="">Ռոումինգ</Link>
                </li>
                <li>
                  <Link to="">Ինտերնետ խանութ</Link>
                </li>
              </ul>
              <div className="right_block">
                <button className="search">
                  <AiOutlineSearch className="search_icon" />
                  <span>Փնտրել</span>
                </button>
                <button className="btn">Հավելված</button>
                <SlWallet className="wallet_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
