import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function PlayGroundSection() {
    return (
        <div className="mb-8 text-center p-5 lg:w-[650px] mx-auto">
        <h2 className="mb-5 text-lg font-bold">Current Playgrounds:</h2>
        <ul className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 text-left">
          <li className="p-5"><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /><a href="https://julia-le.pages.dev/" title="https://julia-le.pages.dev/">https://julia-le.pages.dev/</a> is built with Typescript, Tailwind CSS, Vite and Redux. Deployment: using Cloudflare with static files. Alternatively, AWS S3 can be used to host static web site.</li>
          <li className="p-5"><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /><a href="https://graphql-github.pages.dev/" target="_blank" title="Open Cloudflare page">https://graphql-github.pages.dev/</a> is built with React and Apollo client for frontend, and Node.js Express server to relaying requests/responses between frontend and GitHub GraphQL endpoints. I'm exploring a serverless option which uses AWS S3, AWS API Gateway and AWS Lambda.</li>
        </ul>
      </div>
    );
}