import { YEAR_WEB_DEV } from './constants';
import image from '../assets/jl.jpg';

export default function AboutSection() {

    return (
        <div className="flex h-84">
            <div className="flex flex-col md:flex-row items-center bg-green-4 text-white font-bold">
                <div className="md:flex-1 m-10 md:mb-0">
                    <p>
                    I am a Software Engineer based in San Diego, with experience in full-stack web development, eCommerce, and system integrations over {YEAR_WEB_DEV} years. I am known for pulling the right people together, staying focused, and getting things done. Have you been to meetings that people will talk about changes and wait for someone to make the changes happen? You can count on me to make them happen!  
                    </p>
                </div>
                <div className="relative w-60 h-60 m-4">
                    <img
                    src={image}
                    alt="Julia Le"
                    className="w-full h-full rounded-full object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 bg-brown-500 opacity-5 rounded-full"></div>
                </div>
            </div>
        </div>
    );
  }