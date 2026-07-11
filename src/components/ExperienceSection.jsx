import React from 'react';
import rvLogo from '../assets/rv_logo.png';
import progressLogo from '../assets/progress-software-vector-logo.png';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Progress ShareFile',
    period: 'July 2026 - Present',
    description: '',
    logo: progressLogo,
    bullets: [
      'Working on the eSign and DocGen team, contributing to the development of secure electronic signature solutions and automated document generation platforms.',
      'Collaborating with cross-functional teams to design, implement, and optimize software features.'
    ]
  },
  {
    role: 'Student Placement Coordinator',
    company: 'RV Institute of Technology and Management, Bengaluru',
    period: '2025 - Present',
    description: '',
    logo: rvLogo,
    bullets: [
      'Coordinating campus recruitment activities between students, recruiters, and the Training & Placement Cell.',
      'Managing placement communications, interview schedules, student registrations, and recruitment operations for multiple hiring drives.',
      'Assisting in organizing pre-placement talks, aptitude sessions, mock interviews, and student engagement initiatives.',
      'Supporting students with resume building, LinkedIn optimization, and placement preparation activities.',
      'Collaborating with teams to streamline placement workflows and improve coordination efficiency.'
    ]
  }
];

const ExperienceSection = () => {

  return (
    <section id="experience" className="py-12 md:py-16 px-8 lg:px-24 max-w-[1600px] mx-auto relative z-10">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
        <div>
          <div className="px-5 py-2 mb-6 inline-block rounded-full border border-[#bbc9d0]/20 bg-transparent text-[#bbc9d0] text-xs font-bold tracking-[0.2em] uppercase">
            Career Journey
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#e5e2e1]">Experience</h2>
        </div>
        <div className="max-w-md text-left md:text-right">
          <p className="text-[#c2c7cb] text-lg font-medium leading-relaxed">
            Professional roles and hands-on experience building software solutions.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative bg-[#1b1b1b]/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-[#bbc9d0]/10 hover:border-[#bbc9d0]/30 transition-all duration-700 hover:bg-[#1b1b1b]/60 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
            
            <div className="flex flex-row items-start gap-4 md:gap-6 mb-8 border-b border-[#bbc9d0]/10 pb-8">
              {exp.logo && (
                <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 mt-1">
                  <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                </div>
              )}
              
              <div className="flex flex-col flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#f8f9fa] tracking-tight group-hover:text-white transition-colors leading-tight">{exp.role}</h3>
                    <div className="text-lg md:text-xl text-[#bbc9d0] font-semibold mt-1 leading-snug">{exp.company}</div>
                  </div>
                  
                  <div className="self-start md:self-auto text-sm text-[#c2c7cb] font-bold tracking-wide bg-[#131313]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#bbc9d0]/10 flex items-center gap-2 shadow-sm shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bbc9d0] animate-pulse"></span>
                    {exp.period}
                  </div>
                </div>
              </div>
            </div>
            
            {exp.description && (
              <p className="text-[#c2c7cb] text-base leading-relaxed mb-8 font-medium max-w-4xl">
                {exp.description}
              </p>
            )}

            <div className="space-y-4 border-l-2 border-[#bbc9d0]/10 pl-6 py-2">
              {exp.bullets.map((bullet, i) => (
                <div key={i} className="flex gap-4 text-[15px] font-medium text-[#c2c7cb] leading-relaxed">
                  <span className="text-[#bbc9d0] mt-1 text-xs opacity-70">
                    ✦
                  </span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
