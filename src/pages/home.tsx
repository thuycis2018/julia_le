import HeroBanner from '../components/HeroBanner';
import AboutSection from '../components/AboutSection';
import StackedImages from '../components/StackedImages';
import SkillSection from '../components/SkillSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <StackedImages /> 
      <SkillSection />      
      <Footer /> 
    </> 
  );
}
