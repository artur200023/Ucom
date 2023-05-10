import { Link } from "react-router-dom";
import "./showNews.css";
import { BsCalendarDate } from "react-icons/bs";

const ShowNews = ({ news }) => {
  console.log(news, "news");

  return (
    <>
      <li>
        <img src={news.image} />
        {news.text}
        <div>{news.date}</div>
        {news.text}
        <div>{news.cardNews}</div>
        <div>
          <BsCalendarDate /> {news.newsDate}
          {news.date}
        </div>
      </li>
    </>
  );
};

export default ShowNews;
