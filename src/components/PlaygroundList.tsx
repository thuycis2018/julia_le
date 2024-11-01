import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

export default function PlaygroundList() {
  return (
    <div>
      <ul className='text-left'>
        <li className='p-5'>
          <FontAwesomeIcon icon={faCloud} className='mr-2' />
          <a
            href='https://fpga.cosma-design.com/'
            title='FPGA Desin Services'
            target='_blank'
          >
            https://fpga.cosma-design.com/
          </a>
        </li>
        <li className='p-5'>
          <FontAwesomeIcon icon={faCloud} className='mr-2' />
          <a
            href='https://coffee.cosma-design.com/'
            title='Coffee'
            target='_blank'
          >
            https://coffee.cosma-design.com/
          </a>
        </li>
      </ul>
    </div>
  );
}
