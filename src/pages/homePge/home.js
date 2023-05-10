import Charging from "../../components/chargingForm/chargingForm";
import MainSlider from "../../components/sliderSection/slider";
import Unity from "../../components/unitySection/unitySection";
import Postpaid from "../../components/postpaidSection/postpaid";
import Customer from "../../components/customerSection/customer";
import Service from "../../components/serviceSection/service";
import EsimBlock from "../../components/esimSection/esimBlock";
import Offer from "../../components/offerSection/offer";
import News from "../../components/newsSection/news";
import DefaultLayouts from "../../loyouts/DefaultLayouts";

const Home = () => {
  return (
    <>
      <DefaultLayouts>
        <MainSlider />
        <Unity />
        <Charging />
        <Postpaid />
        <Customer />
        <Service />
        <EsimBlock />
        <Offer />
        <News />
      </DefaultLayouts>
    </>
  );
};
export default Home;
