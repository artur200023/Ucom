import {TiWiFi} from 'react-icons/ti'

export const CustomDots = ({ dotsTitle, dotsDis }) => {
  return (
    <>
      <div className="dots_block">
        <div className="dots_img">
          <TiWiFi className='wifi_icon'/>
        </div>
        <ul className=" dots_info">
          <li>{dotsTitle}</li>
          <li>{dotsDis}</li>
        </ul>
      </div>
    </>
  );
};

export default CustomDots;
