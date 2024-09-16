import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function PlayGroundSection() {
    return (
      <div>      
        <ul className="text-left">
          <li className="p-5"><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /><a href="https://julia-le.pages.dev/" title="https://julia-le.pages.dev/">https://julia-le.pages.dev/</a> is built with TypeScript, GraphQL, Tailwind CSS, Vite, and Redux. Deployment is done using Cloudflare with static files. Alternatively, AWS S3 can be used to host the static website.</li>
          <li className="p-5"><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /><a href="https://nextjs-openai-chi.vercel.app/" title="Next.JS app" target="_blank">https://nextjs-openai-chi.vercel.app/</a> is built with Next.js, TypeScript, GraphQL, and Tailwind CSS. Deployment is handled by Vercel, which automatically deploys changes whenever there is a push to the main branch in the GitHub repository.</li>
          <li className="p-5"><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /><a href="https://graphql-github.pages.dev/" target="_blank" title="Open Cloudflare page">https://graphql-github.pages.dev/</a> is built with React and Apollo Client for the frontend, and a Node.js Express server to relay requests and responses between the frontend and GitHub GraphQL endpoints. Deployment is managed using Cloudflare, which deploys changes automatically whenever there is a push to the main branch in the GitHub repository.</li>
        </ul>
      </div>
    );
}