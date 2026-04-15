import React from 'react';

const TechCore = () => {
  const skills = {
    languages: ['C++', 'C', 'Python(Basic)', 'Java(Basic)', 'Javascript'],
    tools: ['Git/GitHub', 'VS Code', 'Postman', 'GCC', 'Browser DevTools'],
    frameworks: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
    storage: ['MongoDB', 'MySQL', 'SQL', 'PostgreSQL', 'Redis'],
    devops: ['Docker', 'Docker Compose', 'Vercel', 'AWS']
  };

  return (
    <section id="tech-core" className="bg-surface-container-low py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <p className="text-primary-container tracking-[0.1em] uppercase text-[0.75rem] font-bold mb-4">Stack & Expertise</p>
            <h2 className="text-[3.5rem] font-bold tracking-tight text-on-surface">The Technical Core</h2>
          </div>
          <div className="max-w-md text-left md:text-right">
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Equipped with a diverse stack for building reliable, distributed, and high-performance systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Languages */}
          <div className="md:col-span-2 bg-surface p-10 rounded-xl flex flex-col justify-between group hover:bg-surface-container transition-all border border-outline-variant/5">
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-4xl text-primary">terminal</span>
                <span className="text-[0.6rem] bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-bold uppercase tracking-widest">Mastery</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Languages</h3>
              <p className="text-on-surface-variant mb-8 text-sm">Foundational logic and systems programming across various paradigms.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((lang) => (
                <span key={lang} className="bg-surface-container-highest px-4 py-1.5 rounded-full text-xs font-semibold text-color-primary border border-outline-variant/10">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Infrastructure & DevOps */}
          <div className="bg-surface p-10 rounded-xl group hover:bg-surface-container transition-all border border-outline-variant/5">
            <div className="mb-12">
              <span className="material-symbols-outlined text-4xl text-primary">cloud_done</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Infra & DevOps</h3>
            <div className="space-y-4">
              {skills.devops.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Databases / Storage */}
          <div className="bg-surface p-10 rounded-xl group hover:bg-surface-container transition-all border border-outline-variant/5">
            <div className="mb-12">
              <span className="material-symbols-outlined text-4xl text-primary">database</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Storage</h3>
            <div className="space-y-4">
              {skills.storage.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Developer Tools */}
          <div className="md:col-span-2 bg-surface p-10 rounded-xl group hover:bg-surface-container transition-all border border-outline-variant/5">
            <div className="mb-8">
              <span className="material-symbols-outlined text-4xl text-primary">build_circle</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Developer Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((tool) => (
                <div key={tool} className="flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/5">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span className="text-xs font-semibold text-on-surface-variant group-hover:text-on-surface">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="md:col-span-2 bg-surface p-10 rounded-xl group hover:bg-surface-container transition-all border border-outline-variant/5">
            <div className="mb-8">
              <span className="material-symbols-outlined text-4xl text-primary">layers</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((framework) => (
                <span key={framework} className="bg-primary-container/20 px-4 py-1.5 rounded-full text-xs font-bold text-primary border border-primary/10">
                  {framework}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCore;
