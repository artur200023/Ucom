import "./showPostPaid.css";

const ShowPostPaid = ({ post }) => {
  return (
    <>
      <div className="sliderPaid_section">
        <div className="price_section">
          <span className="price_text">{post.postPaid}</span>
        </div>
        <div className="slaid_block">
          <ul>
            <li>{post.minute}</li>
            <li>{post.inet}</li>
            <li>{post.unlimited}</li>
            <li>
              <div className="btn_block">
                <li>{post.cashAmount}</li>
                <button className="">Միանալ</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShowPostPaid;
