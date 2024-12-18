import stacked_image1 from "../assets/images/stacked_image1.jpg";
import stacked_image2 from "../assets/images/stacked_image2.jpg";
import stacked_image3 from "../assets/images/stacked_image3.jpg";
import stacked_image4 from "../assets/images/stacked_image4.jpg";
import stacked_image5 from "../assets/images/stacked_image5.jpg";
export default function StackedImages() {
  return (
    <div className='container mx-auto mb-10 p-4'>
      <ul className='teamMembers list-none grid grid-cols-10 items-center mx-auto'>
        <li className='row-start-1 row-end-2 col-start-1 col-end-4 order-1'>
          <img
            src={stacked_image1}
            className='rounded-full w-[80%] shadow-[1px_1px_3px_#fff,_2px_2px_6px_rgba(28,121,138,0.5)] border-2 border-[rgba(255,255,255,0.8)]'
            alt='Skill - Project Management'
          />
        </li>

        <li className='row-start-1 row-end-2 col-start-3 col-end-6'>
          <img
            src={stacked_image2}
            className='rounded-full w-[80%] shadow-[1px_1px_3px_#fff,_2px_2px_6px_rgba(28,121,138,0.5)] border-2 border-[rgba(255,255,255,0.8)]'
            alt='Skill -  Web Development'
          />
        </li>

        <li className='row-start-1 row-end-2 col-start-4 col-end-8 order-1 text-center'>
          <img
            src={stacked_image3}
            className='rounded-full w-[70%] shadow-[1px_1px_3px_#fff,_2px_2px_6px_rgba(28,121,138,0.5)] border-2 border-[rgba(255,255,255,0.8)]'
            alt='Value -  Work Hard'
          />
        </li>

        <li className='row-start-1 row-end-2 col-start-[-3] col-end-6 text-right'>
          <img
            src={stacked_image4}
            className='rounded-full w-[80%] shadow-[1px_1px_3px_#fff,_2px_2px_6px_rgba(28,121,138,0.5)] border-2 border-[rgba(255,255,255,0.8)]'
            alt='Value - Team Work'
          />
        </li>

        <li className='row-start-1 row-end-2 col-start-[-4] col-end-[-1] text-right'>
          <img
            src={stacked_image5}
            className='rounded-full w-[80%] shadow-[1px_1px_3px_#fff,_2px_2px_6px_rgba(28,121,138,0.5)] border-2 border-[rgba(255,255,255,0.8)]'
            alt='Skill - System Integrations'
          />
        </li>
      </ul>
    </div>
  );
}
