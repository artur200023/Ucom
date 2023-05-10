import { TiSocialFacebook } from "react-icons/ti";
import { MdWhatsapp } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgMusicNote } from "react-icons/cg";
import { FaGooglePlusG } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import "./showUnity.css";
const ShowUnity = ({ unity }) => {
  return (
    <>
      <div className="slider_section">
        <div className="price_section">
          <span className="price_text">{unity.unity}</span>
        </div>
        <div className="slaid_block">
          <ul>
            <li>
              <BiCheck className="info_icon" />
              <div>{unity.inet}</div>
            </li>
            <ul>
              <li>
                <div className="unity_icons">
                  <TiSocialFacebook className="unity_icon" />
                  <MdWhatsapp className="unity_icon" />
                  <AiOutlineInstagram className="unity_icon" />
                  <CgMusicNote className="unity_icon" />
                  <FaGooglePlusG className="unity_icon" />
                  <span className="unity_bon">+23</span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <BiCheck className="info_icon" />
                <div>{unity.minute}</div>
              </li>
              <li>
                <BiCheck className="info_icon" />
                <div>{unity.fixInet}</div>
              </li>
              <li>
                <BiCheck className="info_icon" />
                <div>{unity.channel}</div>
              </li>
              <li>
                <BiCheck className="info_icon" />
                <div>{unity.fixminute}</div>
              </li>
              <li>
                <BiCheck className="info_icon" />
                <div>{unity.sim}</div>
              </li>
              <li>
                <BiCheck className="info_icon" />
                <div>{unity.superCard}</div>
              </li>
            </ul>
            <li>
              <div className="btn_block">
                <li>{unity.cashAmount}</li>
                <button className="">Միանալ</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShowUnity;
