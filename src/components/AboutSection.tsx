import { YEAR_WEB_DEV } from './constants';

export default function AboutSection() {
    return (
        <>
            <div className="p-4 mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-4 grid-rows-auto">
                <h1 className="text-brown-1 text-4xl ml-4 pt-5 md:p-0 col-span-1 flex justify-center items-center">About Me</h1>               
                <article className="my-8 mx-auto max-w-[1000px] col-span-1 md:col-span-3">
                    <p className="border-l border-[#dedede] pl-4 text-xl leading-[1.75]">
                    As a Software Engineer based in San Diego, I bring over  {YEAR_WEB_DEV}  years of expertise in full-stack development, eCommerce, and system integrations. I am passionate about collaboration and known for driving projects forward by uniting the right people and keeping a clear focus on results. Have you ever been in a meeting where changes are discussed but no one takes the initiative? That is where I step in and I ensure those changes get implemented and things get done.                               
                    </p>
                </article>
            </div>
        </>
    );
  }
