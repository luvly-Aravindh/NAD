import "./App.css";
import HeroSlider from "./Components/HeroSlider";
import CategoryGrid from "./Components/CategoryGrid";
import CertifiedBrilliance from "./Components/CertifiedBrilliance";
import ProductStrip from "./Components/ProductStrip";
import BestSellingCollections from "./Components/BestSellingCollections";
import FeaturesSection from "./Components/FeaturesSection";
import ImageStackSlider from "./Components/ImageStackSlider";
import ProductShowcaseSlider from "./Components/ProductShowcaseSlider";
import EditorialSplit from "./Components/EditorialSplit";
import TestimonialSection from "./Components/testimonials";
import StepsSection from "./Components/StepsSection";
import FooterCTA from "./Components/FooterCTA";
import Loader from "./Components/Loader";

function App() {
  return (
   <Loader>
      <HeroSlider />
      <CategoryGrid />
      <CertifiedBrilliance />
      <ProductStrip />
      <BestSellingCollections />
      <FeaturesSection />
      <ImageStackSlider />
      <ProductShowcaseSlider />
      <EditorialSplit />
      <TestimonialSection />
      <StepsSection />
      <FooterCTA />
    </Loader>
  );
}

export default App;
