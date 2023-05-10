import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPostPaid } from "../../redux/slices/postpaidSlice/postpaid";
import { fetchPostPaid } from "../../redux/thunks/postPaidThunk";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShowPostPaid from "../showPostPaid/showPostPaid";

const Postpaid = () => {
  const dispatch = useDispatch();
  const postPaidBlock = useSelector(selectPostPaid);

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    dispatch(fetchPostPaid());
  }, [dispatch]);

  return (
    <>
      <div className="sliders_blocks">
        <div className="unity">
          <div className="container">
            <Slider {...settings}>
              {postPaidBlock.map((post) => (
                <ShowPostPaid key={post.id} post={post} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postpaid;
