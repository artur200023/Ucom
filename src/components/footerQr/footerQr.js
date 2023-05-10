import "./footerQr.css";
import { Link } from "react-router-dom";

const FootQr = () => {
  return (
    <>
      <div className="down_footer">
        <div className="ucom_logo">
          <img src={"/resources/images/Vector (2).png"} alt="" title="" />
        </div>
        <div className="qr_info">
          <div className="qr_img">
            <img src={"/resources/images/Black_Friday.png"} alt="" title="" />
          </div>
          <div className="qr_block">
            <Link to="">Ներբեռնել UCOM հավելվածը</Link>
            <div className="logo_images">
              <img
                className="app_logo"
                src={"/resources/images/appstore 1.png"}
                alt=""
                title=""
              />
              <img
                className="app_logo"
                src={"/resources/images/google-play 1.png"}
                alt=""
                title=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FootQr;
