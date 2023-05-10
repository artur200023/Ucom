import { useState } from "react";
import "./showOffer.css";

const ShowOffer = ({ offer }) => {
  return (
    <>
      <li>
        <div className="offer_about">
          <div className="item_inner">
            <div className="img_item">
              <img src={offer.image} alt="" title="" />
            </div>
            <div className="offerProduct_list">
              <div>{offer.infoProduct}</div>
              <div>{offer.product}</div>
              <div>
                <span className="hint_discount">
                  {offer.discountAbout}
                </span>{" "}
                <span>{offer.price}</span>
              </div>
              <div>{offer.priceProduct}</div>
            </div>
            <button className="buy_buton">Գնել</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default ShowOffer;
