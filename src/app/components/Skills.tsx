import { Code2, Database, Palette, Layers } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      name: 'Next.js',
      icon: <Code2 size={32} />,
      description: 'Full-stack React framework',
    },
    {
      name: 'Node.js',
      icon: <Code2 size={32} />,
      description: 'Backend development',
    },
    {
      name: 'React',
      icon: <Code2 size={32} />,
      description: 'Frontend library',
    },
    {
      name: 'MySQL',
      icon: <Database size={32} />,
      description: 'Database management',
    },
    {
      name: 'Figma',
      icon: <Layers size={32} />,
      description: 'UI/UX design',
    },
    {
      name: 'Photoshop',
      icon: <Palette size={32} />,
      description: 'Graphic design',
    },
    {
      name: 'Graphic Design',
      icon: <Palette size={32} />,
      description: 'Posters & event cards',
    },
  ];

  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-[#3b82f6] mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-lg hover:bg-[#334155] transition-all hover:scale-105 group"
            >
              <div className="text-[#3b82f6] mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-white text-lg mb-2">{skill.name}</h3>
              <p className="text-[#94a3b8] text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
