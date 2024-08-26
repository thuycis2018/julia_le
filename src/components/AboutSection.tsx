import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faBolt } from '@fortawesome/free-solid-svg-icons';
import { YEAR_WEB_DEV } from './constants';
import image from '../assets/jl.jpg';

export default function AboutSection() {

    return (
        <div className="container mx-auto my-8 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-gray-200 p-4">
                <h3 className="text-lg font-bold"><FontAwesomeIcon icon={faBolt} className="mr-2" />About Me</h3>
                </div>
                    <div className="flex flex-col md:flex-row items-center p-4">
                        <div className="md:flex-1 mb-4 md:mb-0 p-4">
                            <p>
                            I am a web developer based in San Diego, with experience in full-stack web development, eCommerce, and system integration over {YEAR_WEB_DEV} years.
                            </p>
                        </div>
                        <div className="relative w-60 h-60">
                            <img
                            src={image}
                            alt="Julia Le"
                            className="w-full h-full rounded-full object-cover shadow-lg"
                            />
                            <div className="absolute inset-0 bg-brown-500 opacity-5 rounded-full"></div>
                        </div>
                    </div>
            </div>         
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-gray-200 p-4">
                <h3 className="text-lg font-bold"><FontAwesomeIcon icon={faCircleUser} className="mr-2" />Turn Vision into Reality</h3>
                </div>
                <div className="bg-white p-6">
                <p>With years of experience in web development and system integration, I am known for pulling the right people together, staying focused, and getting things done. Have you been to meetings that people will talk about changes and wait for someone to make the changes happen? You can count on me to make them happen!</p>
                </div>
            </div>         
        </div>   
    );
  }