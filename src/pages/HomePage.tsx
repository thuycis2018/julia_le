import AboutSection from '../components/AboutSection';
import SkillSection from '../components/SkillSection';
import WCloud from '../components/WordCloud';
import Footer from '../components/Footer';

export default function HomePage() {
  const wordCloudStyle: React.CSSProperties = {
    width: '90%',
    height: 'auto',
    maxWidth: '1500px',
    border: '1px solid #d3ded3',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    margin: 'auto',
    padding: '16px',
  };

  return (
    <div>
      <AboutSection />
      <div style={wordCloudStyle}>
        <WCloud />
      </div>
      <SkillSection />
      <Footer />
    </div>   
  );
}
