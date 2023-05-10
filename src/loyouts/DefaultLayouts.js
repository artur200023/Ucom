import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const DefaultLayouts = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayouts;
