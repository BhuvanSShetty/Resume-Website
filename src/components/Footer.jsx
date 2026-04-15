import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0e0e0e] w-full py-20 px-6 md:px-12 border-t border-outline-variant/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-[1440px] mx-auto">
        <div className="text-[0.75rem] uppercase tracking-[0.1em] font-headline text-primary-container text-center md:text-left">
          © 2025 Bhuvan S Shetty <br className="md:hidden" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <a href="https://github.com/BhuvanSShetty" target="_blank" rel="noopener noreferrer" className="text-primary-container hover:text-primary transition-colors text-[0.75rem] uppercase tracking-[0.1em] font-headline font-bold">GitHub</a>
          <a href="https://www.linkedin.com/in/bhuvansshetty/" target="_blank" rel="noopener noreferrer" className="text-primary-container hover:text-primary transition-colors text-[0.75rem] uppercase tracking-[0.1em] font-headline font-bold">LinkedIn</a>
          <a href="#" className="text-primary-container hover:text-primary transition-colors text-[0.75rem] uppercase tracking-[0.1em] font-headline font-bold">Twitter</a>
          <a href="mailto:Bhuvansshetty90@gmail.com" className="text-primary-container hover:text-primary transition-colors text-[0.75rem] uppercase tracking-[0.1em] font-headline font-bold">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
