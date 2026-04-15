import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pt-40 pb-20">
      <div className="md:col-span-8 flex flex-col justify-center">
        {/* Profile Label */}
        <div className="flex items-center gap-4 mb-10 group cursor-default">
          <div className="h-px w-8 bg-primary-container transition-all group-hover:w-16"></div>
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
            Bhuvan S Shetty · Backend Engineer
          </p>
        </div>

        <h1 className="text-[3.5rem] md:text-[6rem] font-extrabold tracking-[-0.04em] leading-[0.9] text-on-surface mb-8">
          Architecting the <br />
          <span className="text-gradient">Core System.</span>
        </h1>

        <div className="max-w-xl">
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-12">
            I build scalable backend systems and high-performance APIs, focusing on reliability, clean architecture, and efficient data handling.
            Currently pursuing a Bachelor’s degree in Computer Science at RV Institute of Technology and Management , Bengaluru.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary-gradient px-8 py-4 rounded-lg font-bold flex items-center gap-2 group transition-all">
              View Projects
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Portrait Column */}
      <div className="md:col-span-4 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="relative w-full aspect-[4/5] bg-surface-container-low rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-outline-variant/20 group">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 z-10 transition-opacity group-hover:opacity-10"></div>
          <img
            src="/src/assets/bhuvan_portrait.png"
            alt="Bhuvan S Shetty Profile"
            className="w-full h-full object-cover transition-all duration-1000 scale-100 group-hover:scale-110 brightness-95 group-hover:brightness-105"
          />
          {/* Subtle Scanline Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(187,201,208,0.1)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
