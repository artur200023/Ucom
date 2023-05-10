import { useDispatch, useSelector } from "react-redux";
import "./news.css";
import { selectNews } from "../../redux/slices/newsSlice/newsSlice";
import { useEffect } from "react";
import { fetchNews } from "../../redux/thunks/newsThunk";
import ShowNews from "../showNews/showNews";

const News = () => {
  const dispatch = useDispatch();
  const blockNews = useSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
      <div className="news_sectoon">
        <button className="store_btn">Գնալ խանութ</button>
        <div className="container">
          <div className="news_block">
            <div className="about_newsTitle">Մեր Նորությունները</div>
            <button>Տեսնել Բոլորը</button>
          </div>
          <div className="container">
            <ul className="blog_section">
              {blockNews.map((news) => (
                <ShowNews key={news.id} news={news} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
