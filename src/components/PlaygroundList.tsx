import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCloud } from '@fortawesome/free-solid-svg-icons';

export default function PlaygroundList() {
    return (
      <div>      
        <ul className="text-left">
          <li className="p-5"><FontAwesomeIcon icon={faCloud} className="mr-2" /><a href="https://fpga.cosma-design.com/" title="FPGA Desin Services" target="_blank">https://fpga.cosma-design.com/</a> is a responsive web site with Bootstrap css and css animations.</li>
          <li className="p-5"><FontAwesomeIcon icon={faCloud} className="mr-2" /><a href="https://coffee.cosma-design.com/" title="Coffee" target="_blank">https://coffee.cosma-design.com/</a> has another design using plain html and Bootstrap css.</li>
          <li className="p-5"><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /><a href="https://j-le.pages.dev/" title="https://j-le.pages.dev/" target="_blank">https://j-le.pages.dev/</a> is built with TypeScript, GraphQL, Tailwind CSS, Vite, and Redux. Deployment is managed using Cloudflare, which deploys changes automatically whenever there is a push to the main branch in the GitHub repository.</li>
          <li className="p-5"><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /><a href="https://julia-le.vercel.app/" title="Next.JS app" target="_blank">https://julia-le.vercel.app/</a> is built with Next.js, TypeScript, GraphQL, and Tailwind CSS. Deployment is handled by Vercel, which automatically deploys changes whenever there is a push to the main branch in the GitHub repository.</li>
        </ul>
      </div>
    );
}