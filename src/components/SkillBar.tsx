interface Skill {
  name: string;
  level: number; // level as a percentage (e.g., 80 for 80%)
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 90 },
  { name: 'MySQL PostgreSQL', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Django/Python', level: 80 },
  { name: 'CSS', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Node.js', level: 75 },
  { name: 'AWS', level: 70 }, 
];

export default function SkillsSection() {
  return (
    <div className="max-w-4xl mx-auto my-8 p-4">
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-green-2 h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
