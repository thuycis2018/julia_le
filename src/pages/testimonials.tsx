import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function TestimonialPage() {
  return (
    <div>
     <div className="bg-[url('/images/computer1.jpg')] bg-no-repeat bg-left bg-cover h-40 opacity-70">      
        
      </div>
      <h2 className="text-black text-3xl font-bold text-center p-4">Testimonials</h2>
      <Testimonials />
      <Footer />
    </div>   
  );
}
