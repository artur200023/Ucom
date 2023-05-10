import { footerAbout } from "./utils";
import "./downFooter.css";
import FootQr from "../footerQr/footerQr";

const DownFooter = () => {
  const listDisc = () => {
    return footerAbout.map((list, index) => (
      <div className="down_footer" key={list.id}>
        <h2 className="about_title">{list.title}</h2>
        <ul>
          <li className="info_text">{list.disc}</li>
          {list.disc2 && <li className="info_text">{list.disc2}</li>}
          {list.disc3 && <li className="info_text">{list.disc3}</li>}
        </ul>
        <div>
          <form>
            {index === 2 && (
              <input
                className="footer_input"
                placeholder="էլ․հասցե"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
            )}
            {index === 2 && <button className="footer_btn">Հետևել</button>}
          </form>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="downFooter_section">
        <div className="about_footer">
          <div className="info">
            <FootQr />
            {listDisc()}
          </div>
        </div>
      </div>
    </>
  );
};
export default DownFooter;
