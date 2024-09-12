import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faCloud, faCheck } from '@fortawesome/free-solid-svg-icons';
import { YEAR_AGILE, YEAR_WEB_DEV } from './constants';

export default function SkillSection() {
    return (
        <div className= "container mx-auto my-8 p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-brown-1 p-4">
                <h3 className="text-white text-lg font-bold"><FontAwesomeIcon icon={faCalendarDay} className="mr-5" />Web Project Managment</h3>
                </div>
                <div className="bg-white p-6">
                <p>With over {YEAR_AGILE} of experience in Agile methodology, I excel at facilitating collaboration between web developers, designers, and UI/UX experts to drive web optimization and customization efforts.</p>
                </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-brown-1 p-4">
                <h3 className="text-white text-lg font-bold"><FontAwesomeIcon icon={faCloud} className="mr-5" />Web Development</h3>
                </div>
                <div className="bg-white p-6">
                <p>With {YEAR_WEB_DEV} years of web development experience, I am a hands-on engineer who actively contributes to the team when needed. I excel at leading technical discussions, offering valuable insights, and guiding the team toward actionable plans.</p>
                </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-brown-1 p-4">
                <h3 className="text-white text-lg font-bold"><FontAwesomeIcon icon={faCheck} className="mr-5" />System Integrations</h3>
                </div>
                <div className="bg-white p-6">
                <p>With experience in enterprise systems like NetSuite and Salesforce, I have successfully implemented various integrations, bringing together key components to build robust system architectures.</p>
                </div>
            </div> 
        </div>
    );
  }