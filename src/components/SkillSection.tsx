import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faCloud, faCheck } from '@fortawesome/free-solid-svg-icons';
import { YEAR_AGILE, YEAR_WEB_DEV } from './constants';

export default function SkillSection() {
    return (
        <div className= "container mx-auto my-8 p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-green-4 p-4">
                <h3 className="text-white text-lg font-bold"><FontAwesomeIcon icon={faCalendarDay} className="mr-5" />Web Project Managment</h3>
                </div>
                <div className="bg-white p-6">
                <p>With over {YEAR_AGILE} years of experience in Agile methodology, I can help facilitating web developers, web designers, and UI/UX experts to drive web optimization and customization effort.</p>
                </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-green-4 p-4">
                <h3 className="text-white text-lg font-bold"><FontAwesomeIcon icon={faCloud} className="mr-5" />Web Development</h3>
                </div>
                <div className="bg-white p-6">
                <p>With {YEAR_WEB_DEV} years of experience in web development, I can be a hands-on manager contributing to the team as needed. I can also drive the technical discussion among team members, provide insights and move to concrete plan.</p>
                </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-green-4 p-4">
                <h3 className="text-white text-lg font-bold"><FontAwesomeIcon icon={faCheck} className="mr-5" />System Integrations</h3>
                </div>
                <div className="bg-white p-6">
                <p>With experience in enterprise systems, such as Netsuite and Salesforce, I have worked with various integrations that put the pieces together and implement solid system architectures.</p>
                </div>
            </div> 
        </div>
    );
  }