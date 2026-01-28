import photo from '../assets/photo.jpg';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function Home({ setActivePage }) {
  return (
    <Section className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Subtle Depth Background */}
      <div className="absolute inset-0 bg-brand-dark -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-800/10 rounded-full blur-[160px] opacity-50"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] opacity-20"></div>
      </div>

      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {/* Hero Image */}
          <div className="relative no-star-interaction">
            <div className="absolute -inset-1 bg-white/5 rounded-full blur-sm"></div>
            <div className="w-52 h-52 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/10 shadow-2xl flex-shrink-0 relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all duration-1000">
              <img 
                src={photo} 
                alt="Anna Bushueva" 
                className="w-full h-full object-cover object-[center_30%]"
                fetchpriority="high"
              />
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="max-w-xl text-center md:text-left space-y-10 relative z-10">
            <div className="space-y-4 no-star-interaction">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tighter leading-[0.9]">
                Anna BUSHUEVA
              </h1>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h2 className="text-sm md:text-base font-bold text-brand-accent tracking-[0.3em] uppercase opacity-80">
                  Software Engineer
                </h2>
                <div className="hidden md:block h-px w-6 bg-white/10"></div>
                <h2 className="text-sm md:text-base font-medium text-slate-500 tracking-tight italic">
                  Physics & Mathematics Master
                </h2>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-lg md:text-xl font-normal max-w-lg no-star-interaction">
              Specializing in system analysis and backend architecture. 
              Bridging the gap between mathematical precision and robust software solutions.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  as="a"
                  href="/CV_Anna_Bushueva.pdf" 
                  download="CV_Anna_Bushueva.pdf"
                  variant="accent"
                  className="px-8"
                >
                    Download CV
                </Button>
                <Button 
                  onClick={() => setActivePage('contact')}
                  variant="outline"
                  className="px-8"
                >
                    Get in touch
                </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
