import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function PlayGroundSection() {
    return (
        <div className="w-full max-w-3xl p-6 m-6 bg-white rounded-2xl border border-gray-200 shadow-lg mx-auto hover:shadow-2xl transition-shadow duration-300">
        
        <ul className="text-left">
          <li className="p-5"><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /><a href="https://julia-le.pages.dev/" title="https://julia-le.pages.dev/">https://julia-le.pages.dev/</a> is built with TypeScript, Tailwind CSS, Vite and Redux. Deployment: using Cloudflare with static files. Alternatively, AWS S3 can be used to host static web site.</li>
          <li className="p-5"><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /><a href="https://graphql-github.pages.dev/" target="_blank" title="Open Cloudflare page">https://graphql-github.pages.dev/</a> is built with React and Apollo client for frontend, and Node.js Express server to relay requests/responses between the frontend and GitHub GraphQL endpoints. Deployment: using CloudFlare to deploy changes whenever there is a PUSH to main branch in GitHub repo.</li>
        </ul>
      </div>
    );
}