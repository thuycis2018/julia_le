export default function StackedImages() {
    return (
        <div className= "container mx-auto mb-10 p-4">
            <ul className="teamMembers list-none grid grid-cols-10 items-center mx-auto">
                <li className="row-start-1 row-end-2 col-start-1 col-end-4 order-1">
                <img src="/images/team_s.jpg" className="rounded-full w-[80%] shadow-[1px_1px_3px_#fff,_2px_2px_6px_rgba(28,121,138,0.5)] border-2 border-[rgba(255,255,255,0.8)]" alt="Skill - Project Management" />
                </li>
                
                <li className="row-start-1 row-end-2 col-start-3 col-end-6">
                <img src="/images/computer3_s.jpg" className="rounded-full w-[80%] shadow-[1px_1px_3px_#fff,_2px_2px_6px_rgba(28,121,138,0.5)] border-2 border-[rgba(255,255,255,0.8)]" alt="Skill -  Web Development" />
                </li>

                <li className="row-start-1 row-end-2 col-start-4 col-end-8 order-1 text-center">
                <img src="/images/computer2_s.jpg" className="rounded-full w-[70%] shadow-[1px_1px_3px_#fff,_2px_2px_6px_rgba(28,121,138,0.5)] border-2 border-[rgba(255,255,255,0.8)]" alt="Value -  Work Hard" />
                </li>

                <li className="row-start-1 row-end-2 col-start-[-3] col-end-6 text-right">
                <img src="/images/team2_s.jpg" className="rounded-full w-[80%] shadow-[1px_1px_3px_#fff,_2px_2px_6px_rgba(28,121,138,0.5)] border-2 border-[rgba(255,255,255,0.8)]" alt="Value - Team Work" />
                </li>

                <li className="row-start-1 row-end-2 col-start-[-4] col-end-[-1] text-right">
                <img src="/images/computer_s.jpg" className="rounded-full w-[80%] shadow-[1px_1px_3px_#fff,_2px_2px_6px_rgba(28,121,138,0.5)] border-2 border-[rgba(255,255,255,0.8)]" alt="Skill - System Integrations" />
                </li>
            </ul>
        </div>
    );
  }