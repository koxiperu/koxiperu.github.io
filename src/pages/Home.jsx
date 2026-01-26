import photo from '../assets/photo.jpg';

export default function Home() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] gap-10 px-4 overflow-hidden">
      {/* Dynamic Background for Home Page */}
      <div className="absolute inset-0 bg-brand-dark -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-brand-orange/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-brand-purple shadow-[0_0_40px_rgba(155,81,224,0.3)] flex-shrink-0 relative z-10 transition-transform duration-500 hover:scale-105">
        <img 
          src={photo} 
          alt="Anna Bushueva" 
          className="w-full h-full object-cover object-[center_30%]"
        />
      </div>
      
      <div className="max-w-xl text-center md:text-left space-y-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Anna Bushueva
        </h1>
        <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange bg-clip-text text-transparent">
          Software Engineer / Backend Developer
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg font-light">
          IT professional with a master’s in applied physics and mathematics and 5+ years’
          experience in IT analysis and processes, with additional hands-on exposure to
          backend development and cloud tools.
        </p>
        <div className="pt-4 flex gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-gradient-to-r from-brand-purple to-brand-pink text-white rounded-xl hover:opacity-90 transition-all duration-300 font-bold shadow-xl shadow-brand-purple/20 transform hover:-translate-y-1">
                Download CV
            </button>
            <button className="px-8 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-medium">
                Contact Me
            </button>
        </div>
      </div>
    </div>
  );
}
