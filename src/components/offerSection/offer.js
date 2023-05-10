import { useEffect, useState } from "react";
import "./offer.css";
import { offerLinks } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import { selectOffer } from "../../redux/slices/offerSlice/offer";
import { fetchOffer } from "../../redux/thunks/offerThunks";
import ShowOffer from "../showOffer/showOffer";

const Offer = () => {
  const [isActive, setIsActive] = useState();
  const dispatch = useDispatch();
  const offerBlock = useSelector(selectOffer);

  const activeLink = (id) => {
    setIsActive(id);
  };

  useEffect(() => {
    dispatch(fetchOffer());
  }, [dispatch]);

  const createLinks = () => {
    return offerLinks.map((link) => {
      return (
        <li
          className={isActive === link.id ? "active_btn" : ""}
          key={link.id}
          onClick={() => activeLink(link.id)}
        >
          {link.link}
        </li>
      );
    });
  };

  return (
    <>
      <div className="offer_section">
        <div className="container">
          <div className="offer_title">
            Բոլոր ժամանակների մեր լավագույն առաջարկը
          </div>
          <div className="offer_link">
            <ul className="offer_link">{createLinks()}</ul>
          </div>
          <ul className=" offer_list">
            {offerBlock.map((offer) => (
              <ShowOffer key={offer.id} offer={offer} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Offer;
