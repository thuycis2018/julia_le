import AboutSection from '../components/AboutSection';
import SkillSection from '../components/SkillSection';
import WCloud from '../components/WordCloud';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <AboutSection />
      <div className="w-full max-w-[1510px] p-6 bg-white rounded-2xl border border-gray-200 shadow-lg mx-auto hover:shadow-2xl transition-shadow duration-300">
        <WCloud />
      </div>
      <SkillSection />
      <Footer />
    </div>   
  );
}
