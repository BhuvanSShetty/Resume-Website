import React from 'react';
import csAbstract from '../assets/cs_abstract.png';
import aikyamRunnerUp from '../assets/aikyam_runner_up.JPG';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden">
      {/* Engineering Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 items-center">
        <div className="md:col-span-8">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-bold">Engineering Philosophy</p>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-on-surface leading-tight">
            Reliability and <span className="text-primary-container">Performance </span> in Every Line of Code.
          </h2>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            I approach software engineering with a focus on system reliability, scalability, and performance, ensuring that applications handle increasing load while maintaining low latency and clean architecture.
          </p>
        </div>
        <div className="md:col-span-4 flex items-end">
          <div className="w-full aspect-square bg-surface-container rounded-lg overflow-hidden relative border border-outline-variant/10 shadow-2xl">
            <img
              className="w-full h-full object-cover transition-all duration-700 brightness-75 hover:brightness-100"
              src={csAbstract}
              alt="Structural Engineering Core"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-background/80 backdrop-blur-md p-4 rounded-lg border border-outline-variant/20">
                <p className="text-xs font-bold text-primary uppercase mb-1">Current Membership</p>
                <p className="text-sm font-semibold">Pegasus Club (Web Development)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Foundation Stats */}
      <div className="mb-32">
        <h2 className="text-xs uppercase tracking-[0.2em] text-primary mb-12 font-bold">Academic Foundation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 flex flex-col justify-between min-h-[240px] hover:border-primary/20 transition-all">
            <div>
              <span className="material-symbols-outlined text-primary-container mb-4 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
              <h3 className="text-2xl font-bold text-on-surface">RV Institute of Technology (RVITM)</h3>
              <p className="text-on-surface-variant text-sm mt-2">B.E. in Computer Science & Engineering (2027)</p>
            </div>
            <div className="mt-8">
              <p className="text-4xl font-extrabold text-primary">8.62 <span className="text-sm font-normal text-on-surface-variant">CGPA</span></p>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 flex flex-col justify-between min-h-[240px] hover:border-primary/20 transition-all">
            <div>
              <span className="material-symbols-outlined text-primary-container mb-4 text-3xl">school</span>
              <h3 className="text-2xl font-bold text-on-surface">Karkala Jnanasudha PU</h3>
              <p className="text-on-surface-variant text-sm mt-2">Class of 2023</p>
            </div>
            <div className="mt-8">
              <p className="text-4xl font-extrabold text-primary">94.14% <span className="text-sm font-normal text-on-surface-variant">Aggregate</span></p>
            </div>
          </div>

          <div className="bg-surface-container p-8 rounded-lg border border-outline-variant/10 flex flex-col justify-between min-h-[240px] hover:border-primary/20 transition-all">
            <div>
              <span className="material-symbols-outlined text-primary-container mb-4 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              <h3 className="text-2xl font-bold text-on-surface">Silicon City Academy</h3>
              <p className="text-on-surface-variant text-sm mt-2">Secondary Education (2021)</p>
            </div>
            <div className="mt-8">
              <p className="text-4xl font-extrabold text-primary">83.2% <span className="text-sm font-normal text-on-surface-variant">Aggregate</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Bento Section */}
      <div className="mb-32">
        <h2 className="text-xs uppercase tracking-[0.2em] text-primary mb-12 font-bold">Key Achievements</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { tag: 'ACADEMIC', title: '100/100 in Computer Science (PUC)', icon: 'terminal' },
            { tag: 'ACADEMIC', title: '100/100 in ADA Lab & Web Developement  (RVITM)', icon: 'code' },
            { tag: 'COMPETITION', title: '1st Place Winner - Science Fest 2019', icon: 'military_tech' },
            { tag: 'GAT HACKATHON', title: '7th Place in GAT Hackathon 2026', icon: 'military_tech' },
            { tag: 'KSSEM HACKATHON', title: 'Placed with in top 10 in KSSEM Hackathon 2025', icon: 'military_tech' }
          ].map((item, idx) => (
            <div key={idx} className="bg-surface-container-highest/40 border border-outline-variant/20 p-6 rounded-xl flex items-center gap-6 flex-1 min-w-[300px]">
              <div className="bg-primary/10 p-4 rounded-full">
                <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
              </div>
              <div>
                <p className="text-[10px] font-black text-primary-container tracking-widest uppercase mb-1">{item.tag}</p>
                <p className="text-lg font-bold text-on-surface">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Aikyam 2026 Featured Achievement */}
        <div className="mt-8 bg-surface-container-highest/40 border border-primary/20 rounded-xl overflow-hidden">
          <div className="p-6 flex items-center gap-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <span className="material-symbols-outlined text-primary text-3xl">military_tech</span>
            </div>
            <div>
              <p className="text-[10px] font-black text-primary-container tracking-widest uppercase mb-1">AIKYAM 2026</p>
              <p className="text-lg font-bold text-on-surface">Runner up in AIKYAM 2026 RVITM</p>
            </div>
          </div>
          <div className="px-5 pb-5 flex justify-center">
            <div className="rounded-lg overflow-hidden border border-outline-variant/10 w-fit">
              <img
                src={aikyamRunnerUp}
                alt="Runner up at AIKYAM 2026 RVITM"
                className="max-h-[400px] block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Work */}
      <div className="glass-panel p-12 rounded-xl border border-outline-variant/20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-widest text-on-secondary-container mb-4 font-bold">Social Impact</p>
            <h2 className="text-4xl font-bold text-on-tertiary-container mb-4">Empowering via U&I</h2>
            <p className="text-on-secondary-container leading-relaxed">
              Applying principles of structure and growth to community impact as a Teaching Volunteer, mentoring students to reach their full potential.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-5xl font-black text-primary">Volunteer</p>
              <p className="text-[10px] uppercase tracking-widest text-on-secondary-container mt-2">Teaching & Mentorship</p>
            </div>
            <div className="w-px h-16 bg-outline-variant/30 hidden md:block"></div>
            <span className="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
