import Banner from "./Banner/Banner";
import BrandOne from "./BrandOne/BrandOne";
import Brands from "./Brands/Brands";
import BrandThree from "./BrandThree/BrandThree";
import BrandTwo from "./BrandTwo/BrandTwo";
import Deals from "./Deals/Deals";
import NewSection from "./NewSection/NewSection";

const Home = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Banner handleScroll={handleScroll}></Banner>
      <Brands></Brands>
      <Deals></Deals>
      <NewSection></NewSection>
      <div id="router">
        <BrandOne></BrandOne>
      </div>
      <div id="laptop">
        <BrandTwo></BrandTwo>
      </div>
      <div id="camera">
        <BrandThree></BrandThree>
      </div>
    </div>
  );
};

export default Home;
