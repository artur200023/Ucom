import "./service.css";

const Service = () => {
  return (
    <div className="service_section">
      <div className="container">
        <div className="about_service">
          <div className="service_text">
            <div className="service_title">
              Լավագույն Ծառայությունները մեկ Փաթեթում
            </div>
            <div className="service_desc">
              Company trustworthiness and service reliability are our main
              principles for consumer loyalty. We are working hard to ensure
              quality entertainment for customers.
            </div>
            <button>Մուտք</button>
          </div>
          <div className="section_video">
            <video className="video" controls loop>
              <source
                src="https://www.youtube.com/watch?v=8kYkciD9VjU&list=RD8kYkciD9VjU&start_radio=1"
                type="video/mp4"
              />
              <source
                src="https://www.youtube.com/watch?v=8kYkciD9VjU&list=RD8kYkciD9VjU&start_radio=1"
                type="video/ogg"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
