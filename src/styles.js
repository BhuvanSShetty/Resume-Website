export const experienceStyles = {
  section: "py-12 md:py-16 px-8 lg:px-24 max-w-[1600px] mx-auto relative z-10",
  headerContainer: "flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8",
  badge: "px-5 py-2 mb-6 inline-block rounded-full border border-[#bbc9d0]/20 bg-transparent text-[#bbc9d0] text-xs font-bold tracking-[0.2em] uppercase",
  title: "text-5xl md:text-7xl font-bold tracking-tight text-[#e5e2e1]",
  descriptionContainer: "max-w-md text-left md:text-right",
  descriptionText: "text-[#c2c7cb] text-lg font-medium leading-relaxed",
  listContainer: "flex flex-col gap-10",
  card: "group relative bg-[#1b1b1b]/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-[#bbc9d0]/10 hover:border-[#bbc9d0]/30 transition-all duration-700 hover:bg-[#1b1b1b]/60 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]",
  cardHeader: "flex flex-row items-start gap-4 md:gap-6 mb-8 border-b border-[#bbc9d0]/10 pb-8",
  logoContainer: "w-12 h-12 md:w-16 md:h-16 flex-shrink-0 mt-1",
  logo: "w-full h-full object-contain",
  infoContainer: "flex flex-col flex-grow",
  infoRow: "flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-4",
  roleTitle: "text-2xl md:text-3xl font-black text-[#f8f9fa] tracking-tight group-hover:text-white transition-colors leading-tight",
  companyName: "text-lg md:text-xl text-[#bbc9d0] font-semibold mt-1 leading-snug",
  periodBadge: "self-start md:self-auto text-sm text-[#c2c7cb] font-bold tracking-wide bg-[#131313]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#bbc9d0]/10 flex items-center gap-2 shadow-sm shrink-0",
  periodDot: "w-1.5 h-1.5 rounded-full bg-[#bbc9d0] animate-pulse",
  expDescription: "text-[#c2c7cb] text-base leading-relaxed mb-8 font-medium max-w-4xl",
  bulletsContainer: "space-y-4 border-l-2 border-[#bbc9d0]/10 pl-6 py-2",
  bulletRow: "flex gap-4 text-[15px] font-medium text-[#c2c7cb] leading-relaxed",
  bulletIcon: "text-[#bbc9d0] mt-1 text-xs opacity-70",
};

export const navbarStyles = {
  navContainer: "fixed top-4 md:top-8 left-0 right-0 flex justify-between items-center px-4 md:px-12 z-[110] w-full max-w-[1600px] mx-auto pointer-events-none",
  logoContainer: "flex-1 flex justify-start pointer-events-auto",
  logoLink: "flex items-center px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border border-[#bbc9d0]/10 bg-[#1b1b1b]/70 backdrop-blur-xl hover:bg-[#1b1b1b]/90 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
  logoText: "font-bold text-[15px] sm:text-lg whitespace-nowrap tracking-wide text-[#e5e2e1]",
  navPill: "hidden md:flex flex-none items-center gap-8 px-8 py-3 rounded-full border border-[#bbc9d0]/10 bg-[#1b1b1b]/70 backdrop-blur-xl text-[13px] font-bold tracking-wide pointer-events-auto shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
  navItem: "text-[#c2c7cb] hover:text-[#bbc9d0] transition-colors uppercase",
  resumeContainer: "flex-1 flex justify-end pointer-events-auto",
  resumeLink: "flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border border-[#bbc9d0]/20 bg-[#bbc9d0]/10 hover:bg-[#bbc9d0]/20 backdrop-blur-xl text-[#bbc9d0] text-[13px] sm:text-sm font-bold transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
  resumeIcon: "material-symbols-outlined text-[15px] sm:text-base"
};

export const aboutStyles = {
  section: "py-12 md:py-16 px-8 lg:px-24 max-w-[1600px] mx-auto text-[#c2c7cb] relative z-10",
  philosophyGrid: "grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-center",
  philosophyTextCol: "md:col-span-8",
  philosophyTag: "text-xs uppercase tracking-[0.2em] text-primary mb-4 font-bold",
  philosophyTitle: "text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-on-surface leading-tight",
  philosophyHighlight: "text-primary-container",
  philosophyDesc: "text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed",
  philosophyImgCol: "md:col-span-4 flex items-end",
  philosophyImgContainer: "w-full aspect-square bg-surface-container rounded-lg overflow-hidden relative border border-outline-variant/10 shadow-2xl",
  philosophyImg: "w-full h-full object-cover transition-all duration-700 brightness-75 hover:brightness-100",
  philosophyOverlay: "absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60",
  philosophyBadgeContainer: "absolute bottom-4 left-4 right-4",
  philosophyBadge: "bg-background/80 backdrop-blur-md p-4 rounded-lg border border-outline-variant/20",
  philosophyBadgeTag: "text-xs font-bold text-primary uppercase mb-1",
  philosophyBadgeText: "text-sm font-semibold",
  academicsContainer: "mb-16 scroll-mt-32",
  sectionTitle: "text-base md:text-lg uppercase tracking-[0.2em] text-[#bbc9d0] mb-12 font-black",
  academicsGrid: "grid grid-cols-1 md:grid-cols-3 gap-6",
  academicCard: "bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 flex flex-col justify-between min-h-[240px] hover:border-primary/20 transition-all",
  academicCardAlt: "bg-surface-container p-8 rounded-lg border border-outline-variant/10 flex flex-col justify-between min-h-[240px] hover:border-primary/20 transition-all",
  academicLogo: "h-20 w-auto max-w-[160px] bg-white rounded-xl p-1.5 mb-6 object-contain shadow-lg opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300",
  academicLogoAlt: "h-20 w-auto max-w-[160px] bg-white rounded-xl p-2 mb-6 object-contain shadow-lg opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300",
  academicLogoBox: "h-20 w-20 md:w-24 bg-white rounded-xl mb-6 shadow-lg overflow-hidden flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300",
  academicLogoBoxImg: "h-full w-full object-contain scale-[1.4] opacity-90 group-hover:opacity-100 transition-all duration-300",
  academicTitle: "text-2xl font-bold text-on-surface",
  academicSubtitle: "text-on-surface-variant text-sm mt-2",
  scoreContainer: "mt-8",
  scoreText: "text-4xl font-extrabold text-primary",
  scoreLabel: "text-sm font-normal text-on-surface-variant",
  achievementsContainer: "mb-16 scroll-mt-32",
  textAchievementsGrid: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
  textAchievementCard: "bg-surface-container-highest/40 border border-outline-variant/20 p-5 rounded-xl flex items-center gap-5 group hover:bg-surface-container-highest/60 hover:border-primary/30 transition-all",
  iconContainer: "bg-primary/10 p-3 rounded-full flex-shrink-0",
  icon: "material-symbols-outlined text-primary text-2xl",
  achievementTag: "text-[10px] font-black text-primary-container tracking-widest uppercase mb-1",
  achievementTitle: "text-sm md:text-base font-bold text-on-surface leading-tight",
  imageAchievementsGrid: "grid grid-cols-1 lg:grid-cols-3 gap-6",
  featAchievementLg: "lg:col-span-2 bg-surface-container-highest/40 border border-primary/20 rounded-xl overflow-hidden flex flex-col group min-h-[350px]",
  featAchievementSm: "lg:col-span-1 bg-surface-container-highest/40 border border-outline-variant/20 rounded-xl overflow-hidden flex flex-col group min-h-[350px]",
  featHeader: "p-6 flex items-center gap-5",
  featIconContainer: "bg-primary/10 p-3.5 rounded-full flex-shrink-0",
  featIcon: "material-symbols-outlined text-primary text-2xl md:text-3xl",
  featTitle: "text-base md:text-lg font-bold text-on-surface leading-tight",
  featImgContainerLg: "flex-1 w-full border-t border-primary/10 bg-black/20 flex items-center justify-center p-6",
  featImgContainerSm: "flex-1 w-full border-t border-outline-variant/10 bg-black/20 flex items-center justify-center p-6",
  featImg: "max-h-[200px] md:max-h-[240px] w-auto object-contain rounded-lg shadow-2xl border border-white/5 group-hover:scale-105 transition-transform duration-700",
  volunteerSection: "mt-16 relative bg-[#1b1b1b]/40 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-[#bbc9d0]/10 overflow-hidden shadow-2xl group transition-all hover:bg-[#1b1b1b]/60 hover:border-[#bbc9d0]/20",
  volunteerGlow: "absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(187,201,208,0.05)_0%,_transparent_70%)] rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-[radial-gradient(ellipse_at_center,_rgba(187,201,208,0.1)_0%,_transparent_70%)]",
  volunteerContent: "flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 relative z-10",
  volunteerLeft: "max-w-xl",
  volunteerTagContainer: "flex items-center gap-3 mb-6",
  volunteerTag: "px-4 py-1.5 rounded-full border border-[#bbc9d0]/20 bg-transparent text-[#bbc9d0] text-[10px] font-bold tracking-[0.2em] uppercase",
  volunteerTagLine: "h-[1px] w-12 bg-[#bbc9d0]/20",
  volunteerTitle: "text-4xl md:text-5xl font-extrabold text-[#f8f9fa] tracking-tight mb-6 leading-tight",
  volunteerTitleHighlight: "text-transparent bg-clip-text bg-gradient-to-r from-[#bbc9d0] to-[#5f6c73]",
  volunteerDesc: "text-[#c2c7cb] text-lg leading-relaxed font-medium",
  volunteerRight: "flex flex-row items-center gap-6 md:gap-8 pl-0 lg:pl-12 lg:border-l-2 border-[#bbc9d0]/10",
  volunteerStatsText: "text-left lg:text-center",
  volunteerStatsNumber: "text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#f8f9fa] to-[#5f6c73]",
  volunteerStatsLabel: "text-[#c2c7cb] text-[11px] uppercase tracking-[0.2em] mt-3 font-semibold",
  volunteerIconBox: "hidden sm:flex items-center justify-center w-16 h-16 rounded-full border border-[#bbc9d0]/20 bg-[#131313]/50 shadow-[0_0_20px_rgba(187,201,208,0.05)]",
  volunteerIcon: "material-symbols-outlined text-3xl text-[#bbc9d0]/80"
};

export const audioPlayerStyles = {
  containerBase: "transition-opacity duration-1000 delay-1000",
  containerVisible: "opacity-100",
  containerHidden: "opacity-0 pointer-events-none",
  playerWrapper: "fixed bottom-6 right-6 z-50 flex items-center bg-primary/10 hover:bg-primary/20 backdrop-blur-md border border-primary/20 rounded-full p-1.5 transition-all duration-300 shadow-lg shadow-primary/5 hover:scale-105 group",
  sliderContainerBase: "hidden md:flex overflow-hidden transition-all duration-500 ease-in-out items-center justify-center",
  sliderContainerVisible: "w-28 opacity-100",
  sliderContainerHidden: "w-0 opacity-0",
  sliderInput: "w-20 mx-2 h-1 bg-primary/30 rounded-lg appearance-none cursor-pointer accent-primary",
  button: "p-3 rounded-full text-primary flex items-center justify-center transition-transform",
  iconPlaying: "animate-pulse",
  iconPaused: "opacity-70"
};

export const enterScreenStyles = {
  containerBase: "fixed top-0 left-0 w-full h-dynamic z-[100] flex flex-col items-center justify-center transition-all duration-[1200ms] ease-in-out overflow-hidden",
  containerEntered: "opacity-0 scale-[1.2] blur-[15px] pointer-events-none",
  containerVisible: "opacity-100 scale-100 blur-none",
  loadingBase: "absolute inset-0 flex flex-col items-center justify-center transition-all duration-700",
  loadingVisible: "opacity-100",
  loadingHidden: "opacity-0 blur-md scale-105 pointer-events-none",
  loadingText: "text-[#bbc9d0] font-bold text-5xl md:text-7xl tracking-tighter tabular-nums mb-6",
  progressBarContainer: "w-48 md:w-64 h-[2px] bg-[#bbc9d0]/10 rounded-full overflow-hidden relative",
  progressBarFill: "absolute top-0 left-0 h-full bg-[#f8f9fa] transition-all duration-200 ease-out",
  greetingContainerBase: "absolute inset-0 flex flex-col items-center justify-center transition-all duration-[1000ms] pointer-events-none",
  greetingTextBase: "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#f8f9fa] flex flex-wrap justify-center gap-x-3 gap-y-2 transition-all duration-[1000ms]",
  greetingTextGreeting: "scale-100",
  greetingTextReady: "scale-110 opacity-0 blur-xl",
  greetingTextDefault: "scale-95",
  greetingSpanBase: "transition-all duration-1000 ease-out",
  greetingSpanHighlight: "text-transparent bg-clip-text bg-gradient-to-r from-[#bbc9d0] to-[#5f6c73] transition-all duration-1000 ease-out",
  greetingSpanVisible: "opacity-100 translate-y-0 blur-none",
  greetingSpanHidden: "opacity-0 translate-y-8 blur-md",
  readyContainerBase: "absolute inset-0 flex flex-col items-center justify-center z-20 w-full px-4 transition-all duration-1000",
  readyContainerVisible: "opacity-100",
  readyContainerHidden: "opacity-0 pointer-events-none delay-0",
  readyContentWrapper: "flex flex-col items-center justify-center w-full max-w-4xl",
  readyTagBase: "px-6 py-2 mb-6 md:mb-8 rounded-full border border-[#bbc9d0]/20 bg-[#1b1b1b]/50 backdrop-blur-md text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c2c7cb] uppercase transition-all duration-1000 ease-out",
  readyTagVisible: "opacity-100 translate-y-0 blur-none",
  readyTagHidden: "opacity-0 translate-y-8 blur-md",
  readyTitleBase: "text-6xl sm:text-8xl md:text-[7rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#f8f9fa] to-[#5f6c73] leading-none pb-4 text-center mb-4 transition-all duration-[1200ms] ease-out",
  readyTitleVisible: "opacity-100 translate-y-0 blur-none scale-100",
  readyTitleHidden: "opacity-0 translate-y-12 blur-lg scale-105",
  readyDescBase: "max-w-2xl px-6 text-center transition-all duration-1000 ease-out",
  readyDescVisible: "opacity-100 translate-y-0 blur-none",
  readyDescHidden: "opacity-0 translate-y-8 blur-md",
  readyDescText: "text-[#c2c7cb] text-base md:text-xl font-medium tracking-wide leading-relaxed",
  readyActionBase: "flex flex-col items-center mt-16 transition-all duration-1000 ease-out",
  readyActionVisible: "opacity-100 translate-y-0 blur-none",
  readyActionHidden: "opacity-0 translate-y-8 blur-md",
  readyActionNotice: "flex items-center gap-2 text-[#c2c7cb]/60 text-xs sm:text-sm mb-6 animate-pulse font-medium uppercase tracking-widest",
  readyActionIcon: "material-symbols-outlined text-base",
  readyButton: "group flex items-center gap-2 bg-[#cdd5da] hover:bg-white text-[#131313] px-10 py-4 rounded-full font-extrabold text-[15px] transition-all duration-300 shadow-[0_0_40px_rgba(187,201,208,0.15)] hover:shadow-[0_0_60px_rgba(187,201,208,0.3)] hover:scale-105 hover:-translate-y-1",
  readyButtonIcon: "material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform"
};

export const footerStyles = {
  footer: "w-full pt-16 pb-10 px-6 md:px-12 bg-[#1b1b1b]/40 backdrop-blur-xl border-t border-[#bbc9d0]/10 mt-20",
  container: "max-w-[1440px] mx-auto",
  mainRow: "flex flex-col md:flex-row justify-between items-center md:items-start gap-8",
  brandCol: "flex flex-col items-center md:items-start gap-2",
  brandName: "text-[#e5e2e1] font-bold text-xl tracking-tight",
  brandRole: "text-[#bbc9d0]/60 text-sm font-medium",
  linksCol: "flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-4",
  link: "text-[#c2c7cb] hover:text-white transition-colors text-sm font-bold tracking-wide",
  copyright: "mt-12 flex justify-center items-center text-[#bbc9d0]/40 text-xs gap-4"
};

export const heroStyles = {
  section: "min-h-dynamic flex items-center px-8 lg:px-24 max-w-[1600px] mx-auto pt-32 pb-20",
  gridContainer: "grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 w-full relative z-10",
  textCol: "lg:col-span-7 flex flex-col justify-center",
  
  titleBase: "text-5xl md:text-[5.5rem] lg:text-[7rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#f8f9fa] to-[#5f6c73] leading-[0.9] mb-8 transition-all duration-[1200ms] ease-out",
  titleVisible: "opacity-100 translate-y-0 blur-none scale-100",
  titleHidden: "opacity-0 translate-y-12 blur-xl scale-105",

  descBase: "text-[#c2c7cb] text-lg md:text-xl font-medium tracking-wide max-w-xl leading-relaxed mb-10 transition-all duration-1000 ease-out",
  descVisible: "opacity-100 translate-y-0 blur-none",
  descHidden: "opacity-0 translate-y-8 blur-md",

  buttonsContainerBase: "flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 transition-all duration-1000 ease-out",
  buttonsVisible: "opacity-100 translate-y-0 blur-none",
  buttonsHidden: "opacity-0 translate-y-8 blur-md",

  exploreButton: "group flex items-center gap-2 bg-[#cdd5da] hover:bg-white text-[#131313] px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 shadow-[0_0_30px_rgba(187,201,208,0.1)] hover:shadow-[0_0_40px_rgba(187,201,208,0.2)] hover:scale-105",
  exploreButtonIcon: "material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform",
  academicsButton: "flex items-center gap-2 text-[#bbc9d0] hover:text-white px-6 py-4 rounded-full font-semibold transition-colors",

  socialContainerBase: "flex items-center gap-6 pl-4 border-l-2 border-[#bbc9d0]/10 transition-all duration-1000 ease-out",
  socialVisible: "opacity-100 translate-y-0 blur-none",
  socialHidden: "opacity-0 translate-y-8 blur-md",
  socialLink: "text-[#c2c7cb] hover:text-[#bbc9d0] transition-colors hover:scale-110 transform duration-200",

  imageColBase: "lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
  imageColVisible: "opacity-100 translate-x-0 blur-none scale-100",
  imageColHidden: "opacity-0 translate-x-12 blur-xl scale-95",
  imageGlow: "absolute inset-0 bg-[#bbc9d0]/5 blur-[120px] rounded-full animate-pulse z-0",
  imageGlass: "relative w-full max-w-sm md:max-w-md aspect-[4/5] rounded-[2.5rem] border border-[#bbc9d0]/10 bg-[#1b1b1b]/30 p-2 backdrop-blur-md overflow-hidden group z-10 shadow-2xl shadow-black/40",
  imageInner: "w-full h-full rounded-[2rem] overflow-hidden relative border border-[#bbc9d0]/5",
  imageOverlay: "absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/20 to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40",
  imageContent: "w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-105 brightness-90 group-hover:brightness-100"
};

export const projectsStyles = {
  section: "py-12 md:py-16 px-8 lg:px-24 max-w-[1600px] mx-auto relative z-10",
  badge: "px-5 py-2 mb-6 inline-block rounded-full border border-[#bbc9d0]/20 bg-transparent text-[#bbc9d0] text-xs font-bold tracking-[0.2em] uppercase",
  title: "text-5xl md:text-7xl font-bold tracking-tight text-[#e5e2e1] mb-12",
  gridContainer: "grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8",
  
  projectCardBase: "group relative bg-[#1b1b1b]/40 backdrop-blur-xl rounded-[3rem] p-3 md:p-4 border border-[#bbc9d0]/10 hover:border-[#bbc9d0]/30 transition-all duration-700 hover:bg-[#1b1b1b]/60 shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]",
  imageContainer: "relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 border border-[#bbc9d0]/5 bg-[#131313]",
  image: "w-full h-full object-cover object-top transition-transform duration-[2000ms] group-hover:scale-105 opacity-90 group-hover:opacity-100",
  imageOverlay: "absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#131313] via-[#131313]/50 to-transparent opacity-95 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none",
  
  categoryBadgeContainer: "absolute bottom-6 left-6 z-20",
  categoryBadge: "bg-[#1b1b1b]/80 backdrop-blur-md text-[#bbc9d0] px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-[#bbc9d0]/20 shadow-lg inline-block",
  
  periodBadgeContainer: "absolute top-6 right-6 z-20",
  periodBadge: "text-xs text-[#c2c7cb] font-bold tracking-wide bg-[#131313]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#bbc9d0]/10 flex items-center gap-2 shadow-lg",
  periodDot: "w-1.5 h-1.5 rounded-full bg-[#bbc9d0] animate-pulse",

  contentContainer: "px-4 md:px-8 pb-8",
  projectTitle: "text-3xl md:text-4xl font-black mb-4 text-[#f8f9fa] tracking-tight group-hover:text-white transition-colors",
  projectDesc: "text-[#c2c7cb] text-[15px] md:text-base leading-relaxed mb-8 font-medium",
  
  bulletsContainer: "space-y-4 mb-10 border-l-2 border-[#bbc9d0]/10 pl-6 py-2",
  bulletRow: "flex gap-4 text-[14.5px] font-medium text-[#c2c7cb] leading-relaxed",
  bulletIcon: "text-[#bbc9d0] mt-1 text-xs opacity-70",

  actionsContainer: "flex flex-wrap gap-x-6 gap-y-4 mt-auto",
  deployButton: "inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-[#bbc9d0] text-[#131313] font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(187,201,208,0.15)] text-sm",
  deployIcon: "material-symbols-outlined text-lg",
  codeButton: "inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full border border-[#bbc9d0]/20 text-[#bbc9d0] font-bold hover:bg-[#bbc9d0]/10 transition-all text-sm",
  codeIcon: "material-symbols-outlined text-lg"
};

export const shootingStarsStyles = {
  container: "fixed inset-0 z-10 pointer-events-none overflow-hidden",
  starAbsolute: "absolute",
  streak: "relative w-full h-[2px] bg-gradient-to-r from-white to-transparent",
  starHead: "absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-white rounded-full shadow-[0_0_20px_5px_rgba(255,255,255,1),_0_0_40px_10px_rgba(255,255,255,0.7)]"
};

export const techCoreStyles = {
  section: "py-12 md:py-16 px-8 lg:px-24 max-w-[1600px] mx-auto relative z-10",
  headerRow: "flex flex-col md:flex-row justify-between items-end mb-16 gap-8",
  badge: "px-5 py-2 mb-6 inline-block rounded-full border border-[#bbc9d0]/20 bg-transparent text-[#bbc9d0] text-xs font-bold tracking-[0.2em] uppercase",
  title: "text-5xl md:text-7xl font-bold tracking-tight text-[#e5e2e1]",
  descContainer: "max-w-md text-left md:text-right",
  desc: "text-[#c2c7cb] text-lg font-medium leading-relaxed",
  
  gridContainer: "grid grid-cols-1 md:grid-cols-4 gap-6",
  
  // Card styles
  cardWide: "md:col-span-2 bg-[#1b1b1b]/50 backdrop-blur-xl p-12 rounded-[2.5rem] flex flex-col justify-between group hover:bg-[#1b1b1b]/80 transition-all duration-500 border border-[#bbc9d0]/10 hover:border-[#bbc9d0]/30 shadow-2xl shadow-black/20",
  cardSmall: "bg-[#1b1b1b]/50 backdrop-blur-xl p-10 rounded-[2.5rem] group hover:bg-[#1b1b1b]/80 transition-all duration-500 border border-[#bbc9d0]/10 hover:border-[#bbc9d0]/30 shadow-2xl shadow-black/20 flex flex-col",
  
  // Icons & headers
  cardHeaderFlex: "flex justify-between items-start mb-12",
  iconLarge: "material-symbols-outlined text-5xl text-[#bbc9d0]",
  iconMedium: "material-symbols-outlined text-4xl text-[#bbc9d0]",
  iconContainerSmall: "mb-10",
  iconContainerWide: "mb-8",
  masteryBadge: "text-[0.65rem] bg-[#bbc9d0]/10 text-[#bbc9d0] px-4 py-1.5 rounded-full font-bold uppercase tracking-[0.2em] border border-[#bbc9d0]/20",
  
  cardTitleLarge: "text-3xl font-bold mb-4 text-[#e5e2e1]",
  cardTitleLargeNoDesc: "text-3xl font-bold mb-8 text-[#e5e2e1]",
  cardTitleSmall: "text-2xl font-bold mb-6 text-[#e5e2e1]",
  cardDesc: "text-[#c2c7cb] mb-10 text-base font-medium",
  
  // Lists
  pillList: "flex flex-wrap gap-3",
  pillListSpaced: "flex flex-wrap gap-4",
  pillLang: "bg-transparent px-5 py-2 rounded-full text-sm font-semibold text-[#bbc9d0] border border-[#bbc9d0]/20 group-hover:bg-[#bbc9d0]/5 transition-colors",
  pillFramework: "bg-[#bbc9d0]/10 px-6 py-2.5 rounded-full text-sm font-bold text-[#bbc9d0] border border-[#bbc9d0]/20",
  pillTool: "flex items-center gap-2 bg-transparent px-5 py-2.5 rounded-full border border-[#bbc9d0]/10 group-hover:border-[#bbc9d0]/30 transition-colors",
  pillToolText: "text-sm font-semibold text-[#c2c7cb] group-hover:text-white",

  itemListContainer: "space-y-4 mt-auto",
  itemRow: "flex items-center gap-3",
  itemDot: "w-1.5 h-1.5 bg-[#bbc9d0] rounded-full opacity-50",
  itemText: "text-[15px] font-semibold text-[#c2c7cb] group-hover:text-[#bbc9d0] transition-colors"
};
