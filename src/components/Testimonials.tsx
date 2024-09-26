import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const testimonialsData = {
  "Kyle P., Director of Digital Marketing": ["Without Thuy, this project simply could not have been possible. She prepared our current eStore to split traffic in a highly complex A/B test. She developed the scripts and code necessary to track Adobe Analytics on the GeS. She meticulously crafted detailed flow charts outlining NORAM's exact preferences for existing customer flows. She organized our activities and keep me honest. I could go on. Put simple: she is a Rockstar. Thank you so much."],
  "Chad N., Executive VP": ["Often times there are folks who are referred to as quiet achievers. She demonstrates a quiet resolve and dedication to her craft and does it without raising a stir - quietly executing tasks with the precision of a surgeon. She rarely looks for shine and often avoids the spotlight. She runs a small elite team and often times wears a management and execute hat all at once. She is present, accountable and knowledgeable and comes well prepared to add value. Her passion for her work is second to none."],
  "Senior Web Designer": ["I am not managed by her but can see how well she works with her team. The positive interaction and professionalism you experience during meetings tell you how good of a leader she is. She is very protective of her resources when inquired to work on a project that does not have enough justification which is great. I have worked with her a few years already and always enjoyable."],
  "Chris B., Director of Technical Support": ["You are a Rockstar, you always have such a positive attitude about web questions. Thank you!"],
  "Sam S., Director of Learning and Development": ["She has been a huge help and guide for us as we navigated figuring out how to sell ECAT on eStore, and continues to be."],
  "Alexandra A., General Councel": ["She has also been amazing in ensuring our website is compliant with ADA requirements. It is a long road and she has been very diligent and hard working."],
  "Jay R., Marketing Manager": ["We couldn't do what we do without the amazing contributions and leadership from her."],
  "Kyle S., Senior Web Developer": ["Congratulations on getting Employee of the Quarter! It was well deserved. You have been an awesome manager, colleague and friend! I am extremely grateful to have your support!"],

  "Senior Developer": ["She knows when to take control of a situation and also allows her team to make mistakes because she has faith that they can solve for them. She promotes growth and is very good at praising her team for jobs well done."],
  "Senior CRO Specialist": ["She is a professional who values every project stakeholder and treat others with respect. It is clear to perceive how stakeholders has gained trust in her work by providing positive results with historical projects. She is a good influence and encourages others to stay optimistic while working on projects that may require a lot of effort when ROI is provided."],
  "Senior Marketing Manager": ["She is the epitome of a valuable employee. She is one of the few peers I can turn into with a question or problem knowing that if she can't help me, she will assist in finding help. She is reliable in every aspect of her role; hitting deadline, quality work, good friendship, great team leader, and well organized."],
  "Senior CRO Marketing Manager": ["She is a result driven individual who is passionate about her work. The quality of her work is great and manages her time and resources well to ensure deadlines are met. She demonstrates flexibility when priorities get changed and quickly shift gears as needed. She is a very knowledgeable person who is capable to solve problems with ease and often leverage her resources to provide creative solutions."],

};

const Testimonials: React.FC = () => {
  // Flatten the testimonials data into an array of objects
  const testimonials = Object.entries(testimonialsData).flatMap(([name, texts]) => 
    texts.map(testimonial => ({
      name,
      testimonial
    }))
  );

  return (
    <div className="p-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
          >
            <p><FontAwesomeIcon icon={faThumbsUp} className="mr-2" /> {item.testimonial}</p>
            <div className="flex items-center mb-4">
              <p className="text-xl font-bold mt-5">{item.name}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to generate a random web-friendly color
// const getRandomWebFriendlyColor = (): string => {
//   const colors = [
//     '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF',
//     'purple', 'pink', 'blue', 'green', 'red', 'orange'
//   ];
//   const randomIndex = Math.floor(Math.random() * colors.length);
//   return colors[randomIndex];
// };

export default Testimonials;
