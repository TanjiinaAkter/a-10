import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import BrandOne from "./BrandOne/BrandOne";
import Brands from "./Brands/Brands";
import BrandThree from "./BrandThree/BrandThree";
import BrandTwo from "./BrandTwo/BrandTwo";
import Deals from "./Deals/Deals";
import NewSection from "./NewSection/NewSection";
import BrandFour from "./BrandFour/BrandFour";
import ExtraSection from "./ExtraSection/ExtraSection";

const Home = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Helmet>
        <title>Havenique | Home</title>
      </Helmet>
      <Banner handleScroll={handleScroll}></Banner>
      <Brands></Brands>
      <Deals></Deals>
      <ExtraSection></ExtraSection>
      <NewSection></NewSection>
      <div id="mens">
        <BrandOne></BrandOne>
      </div>
      <div id="women">
        <BrandTwo></BrandTwo>
      </div>
      <div id="kids">
        <BrandThree></BrandThree>
      </div>
      <div id="decor">
        <BrandFour></BrandFour>
      </div>
    </div>
  );
};

export default Home;
