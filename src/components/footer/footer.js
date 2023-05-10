import { HiPhone } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import DownFooter from "../downFooter/downFooter";
import {Link} from "react-router-dom"
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="container">
          <div className="footer_about">
            <div className="top_footer">
              <div className="inner_top">
                <HiPhone className="call_icon" />
                <div>
                  <div className="title_top">Զանգահարեք մեզ</div>
                  <div className="title_top">444 կամ 011 444 444</div>
                </div>
              </div>
            </div>
            <div className="top_footer">
              <div className="inner_top">
                <FaEnvelope className="mess_icon" />
                <div>
                  <div className="title_top">Էլ․հասցե</div>
                  <Link to="" className="title_top">
                    support@ucom.am
                  </Link>
                </div>
              </div>
            </div>
            <div className="top_footer">
              <div className="inner_top">
                <MdLocationOn className="location_icon" />
                <div>
                  <div className="title_top">Մեր հասցեները</div>
                </div>
              </div>
            </div>
          </div>
          <DownFooter />
          <div className="copytight_block">
            <div className="copytight">@ Copyright Ucom CJSC, 2022. All rights reserved</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
