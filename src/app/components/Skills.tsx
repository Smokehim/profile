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
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4 font-bold">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-[#3b82f6] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-5 md:p-8 rounded-2xl group text-center"
            >
              <div className="text-[#3b82f6] mb-4 md:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="p-3 md:p-4 bg-[#3b82f6]/10 rounded-2xl">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-white text-xl mb-3 font-bold">{skill.name}</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
