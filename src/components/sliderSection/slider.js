import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectDots } from "../../redux/slices/dotsSlice/dotsSlice";
import { fetchDots } from "../../redux/thunks/dotsThunk";
import { CustomDots } from "./utils";

const MainSlider = () => {
  const dispatch = useDispatch();
  const dotsBlock = useSelector(selectDots);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    appendDots: (dots) => (
      <div className=" slider_dots">
        <ul className="container list_dots">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div>
        {dotsBlock.length && (
          <CustomDots
            key={dotsBlock[i].id}
            dotsTitle={dotsBlock[i].title}
            dotsDis={dotsBlock[i].disc}
            dotsBlock={dotsBlock[i]}
          />
        )}
      </div>
    ),
  };

  useEffect(() => {
    dispatch(fetchDots());
  }, [dispatch]);

  return (
    <>
      <div className="main_slider">
        <Slider {...settings}>
          <div className="slider_block">
            <div className="slider_img">
              <img src={"/resources/images/Rectangle 4.jpg"} />
            </div>
          </div>
          <div className="slider_block">
            <div className="slider_img">
              <img src={"/resources/images/image4.webp"} />
            </div>
          </div>
          <div className="slider_block">
            <div className="slider_img">
              <img src={"/resources/images/image.jpg"} />
            </div>
          </div>
          <div className="slider_block">
            <div className="slider_img">
              <img src={"/resources/images/image2.webp"} />
            </div>
          </div>
        </Slider>
        <div className="forHouse_section">
          <div className="forHouse_text">
            <div className="forHouse_title">Տան համար</div>
            <div className="forHouse_desc">
              Ֆիքսված ինտերնետ,շարժական կապ և IPTV
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSlider;
