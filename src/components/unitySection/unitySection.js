import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./unitySection.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUnity } from "../../redux/slices/unitySlice/unitySlice";
import { useEffect } from "react";
import { fetchUnity } from "../../redux/thunks/unityThunk";
import ShowUnity from "../showUnity/showUnity";

const Unity = () => {
  const dispatch = useDispatch();
  const unityBlock = useSelector(selectUnity);


  let settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    dispatch(fetchUnity());
  }, [dispatch]);

  return (
    <>
      <div className="sliders_blocks">
        <div className="unity">
          <div className="container">
            <Slider {...settings1}>
              {unityBlock.map((unity, index) => (
                <div key={unity.id}>
                  {index === 0 && <button className="esim_btn">Esim</button>}
                  <ShowUnity unity={unity} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unity;
