import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

export default function Education() {
  const education = [
    {
      degree: "Master's in Applied Mathematics and Physics",
      institution: "Moscow Institute of Physics and Technology",
      year: "2009 - 2011",
      description: "Focus on advanced mathematical modeling and physical systems analysis."
    },
    {
      degree: "Bachelor's in Applied Mathematics and Physics",
      institution: "Moscow Institute of Physics and Technology",
      year: "2005 - 2009",
      description: "Strong foundation in calculus, linear algebra, and computational physics."
    }
  ];

  const certificates = [
    { year: "2025", title: "Oracle Database SQL Certified Associate (Oracle)", issuer: "Oracle" },
    { year: "2025", title: "Java Certified Foundations Associate (Oracle)", issuer: "Oracle" },
    { year: "2025", title: "Back-End Development - Fundamentals, Intermediate & Advanced", issuer: "CNFPC" },
    { year: "2024", title: "Cybersecurity Essentials", issuer: "DLH" },
    { year: "2024", title: "IBM DevOps and Software Engineering", issuer: "Coursera" },
    { year: "2024", title: "Data Science and Machine Learning with Python", issuer: "DLH" },
    { year: "2023", title: "Full Stack Web Developer Certificate", issuer: "CAP4LAB / CNFPC" },
    { year: "2023", title: "Google Data Analytics Specialisation", issuer: "Coursera" },
    { year: "2010", title: "Project Management in a Company (PMI PMBoK 2008)", issuer: "Internal Training" }
  ];

  return (
    <Section>
      <Container className="max-w-5xl">
        <header className="mb-16 no-star-interaction">
          <h2 className="text-xs font-bold tracking-[0.4em] text-slate-500 uppercase mb-3">
            Academic Background
          </h2>
          <div className="flex items-center gap-6">
            <h3 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
              Education
            </h3>
            <div className="h-px flex-grow bg-white/5"></div>
          </div>
        </header>
        
        <div className="mb-24">
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 relative items-start">
                <div className="md:w-1/4 flex-shrink-0 flex items-start gap-6 md:pr-4 no-star-interaction">
                  <div className="flex-1 md:text-right flex flex-col justify-start pt-1">
                    <div className="font-mono font-bold text-brand-accent text-sm tracking-tighter mb-1">{edu.year}</div>
                    <div className="text-slate-300 font-semibold text-base leading-tight">{edu.institution}</div>
                  </div>
                  <div className="hidden md:flex flex-col items-center pt-2 self-stretch">
                    <span className="w-1 h-full bg-white/5 rounded-full relative">
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-accent/40 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.4)]"></span>
                    </span>
                  </div>
                </div>

                <Card variant="default" className="md:w-3/4 no-star-interaction group border-white/[0.03]">
                  <h4 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors duration-500 mb-4">{edu.degree}</h4>
                  <p className="text-slate-400 leading-relaxed">{edu.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div>
          <header className="mb-12 no-star-interaction">
            <h4 className="text-xl font-bold text-white/90 flex items-center gap-4">
              <span className="text-brand-accent font-mono">02.</span>
              Certifications
              <div className="h-px w-12 bg-white/10"></div>
            </h4>
          </header>
          
          <div className="space-y-8">
            {certificates.map((cert, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 relative items-start">
                <div className="md:w-1/4 flex-shrink-0 flex items-start gap-6 md:pr-4 no-star-interaction">
                  <div className="flex-1 md:text-right flex flex-col justify-start pt-1">
                    <div className="font-mono font-bold text-brand-accent text-sm tracking-tighter mb-1">{cert.year}</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-tight">{cert.issuer}</div>
                  </div>
                  <div className="hidden md:flex flex-col items-center pt-2 self-stretch">
                    <span className="w-1 h-full bg-white/5 rounded-full relative">
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-accent/20 rounded-full"></span>
                    </span>
                  </div>
                </div>

                <Card variant="interactive" className="md:w-3/4 p-4 md:p-6 no-star-interaction group border-white/[0.03]">
                  <h4 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors duration-500">{cert.title}</h4>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}