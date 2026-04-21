import "./App.css";
import { motion } from "framer-motion";
import HeroSlider from "./Components/HeroSlider";
import Logo from "./Components/Logo";
import Newsection from "./Components/Newsection";
import CategoryGrid from "./Components/CategoryGrid";
import CertifiedBrilliance from "./Components/CertifiedBrilliance";
import ProductStrip from "./Components/ProductStrip";
import BestSellingCollections from "./Components/BestSellingCollections";
import MutedVideoSlider from "./Components/MutedVideoSlider";
import FeaturesSection from "./Components/FeaturesSection";
import ImageStackSlider from "./Components/ImageStackSlider";
import ProductShowcaseSlider from "./Components/ProductShowcaseSlider";
import EditorialSplit from "./Components/EditorialSplit";
import TestimonialSection from "./Components/testimonials";
import StepsSection from "./Components/StepsSection";
import FooterCTA from "./Components/FooterCTA";
import Loader from "./Components/Loader";
import HomeTrialSection from "./Components/HomeTrialSection";
import LeadFormSection from "./Components/Leadformsections";
import VideoCallSection from "./Components/VideoCallSection";

function App() {
  const SectionMotion = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );

  return (
    <Loader>

      <SectionMotion>
        
      
         <MutedVideoSlider />
          <CategoryGrid delay={0.03} />
      </SectionMotion>
        <HeroSlider />
      <SectionMotion delay={0.03}>
        
      </SectionMotion>
      <SectionMotion delay={0.05}>
        <Newsection />
      </SectionMotion>
      <SectionMotion delay={0.07}>
        <HomeTrialSection />
      </SectionMotion>
      <SectionMotion delay={0.09}>
      
      </SectionMotion>
      <SectionMotion delay={0.11}>
        <CertifiedBrilliance />
      </SectionMotion>
      <SectionMotion delay={0.13}>
        <ProductStrip />
      </SectionMotion>
      <SectionMotion delay={0.15}>
        <VideoCallSection />
      </SectionMotion>
      <SectionMotion delay={0.17}>
        <BestSellingCollections />
      </SectionMotion>
      <SectionMotion delay={0.18}>
       
      </SectionMotion>
      <SectionMotion delay={0.19}>
        <FeaturesSection />
      </SectionMotion>
      <SectionMotion delay={0.21}>
        <ImageStackSlider />
      </SectionMotion>
      <SectionMotion delay={0.23}>
        <ProductShowcaseSlider />
      </SectionMotion>
      <SectionMotion delay={0.25}>
        <EditorialSplit />
      </SectionMotion>
      <SectionMotion delay={0.27}>
        <TestimonialSection />
      </SectionMotion>
      <SectionMotion delay={0.29}>
        <LeadFormSection />
      </SectionMotion>
      <SectionMotion delay={0.31}>
        <StepsSection />
      </SectionMotion>
      <SectionMotion delay={0.33}>
        <FooterCTA />
      </SectionMotion>
    </Loader>
  );
}

export default App;
