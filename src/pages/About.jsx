import { useState } from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

export default function About() {
  const [activeAcronym, setActiveAcronym] = useState(null);

  const toggle = (acronym) => {
    setActiveAcronym(activeAcronym === acronym ? null : acronym);
  };

  const flowItems = [
    { letter: 'F', text: 'rameworks (Flask, Django, FastAPI, Spring Boot, Laravel)' },
    { letter: 'L', text: 'anguages (Java, Python, PHP)' },
    { letter: 'O', text: 'OP principles' },
    { letter: 'W', text: 'eb & frontend technologies (Angular, React, HTML/CSS/JS)' }
  ];

  const stackItems = [
    { letter: 'S', text: 'cripting' },
    { letter: 'T', text: 'esting (CI/CD, DevOps, automation)' },
    { letter: 'A', text: 'PIs' },
    { letter: 'C', text: 'loud services (AWS)' },
    { letter: 'K', text: 'nowledge of IT systems, networking, and backend architecture' }
  ];

  return (
    <Section>
      <Container className="max-w-4xl">
        <header className="mb-16 no-star-interaction">
          <h2 className="text-xs font-bold tracking-[0.4em] text-slate-500 uppercase mb-3">
            Systemic Approach
          </h2>
          <div className="flex items-center gap-6">
            <h3 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
              Philosophy
            </h3>
            <div className="h-px flex-grow bg-white/5"></div>
          </div>
        </header>

        <Card variant="default" className="space-y-12 border-white/[0.03] rounded-md">
          <div className="text-lg leading-relaxed text-slate-400 space-y-12 no-star-interaction">
            {/* STACK SECTION - Now on Top */}
            <div className="relative">
              <p className="inline align-middle">
                Ensuring production-grade resilience and automated delivery with a solid
              </p>
              <button
                onClick={() => toggle('STACK')}
                aria-expanded={activeAcronym === 'STACK'}
                aria-controls="stack-list"
                className={`ml-3 align-middle transition-all duration-500 px-4 py-1.5 rounded-sm inline-flex items-center gap-3 cursor-pointer focus:outline-none border ${
                  activeAcronym === 'STACK' 
                    ? 'bg-brand-accent/10 text-brand-accent border-brand-accent/40 shadow-sm shadow-brand-accent/10' 
                    : 'text-slate-500 border-white/10 bg-white/5 hover:border-white/20 hover:text-slate-300'
                }`}
              >
                <span className="font-mono font-bold tracking-tighter">S.T.A.C.K.</span>
                <svg className={`w-3 h-3 transition-transform duration-500 ${activeAcronym === 'STACK' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeAcronym === 'STACK' && (
                <div 
                  id="stack-list"
                  className="mt-8 bg-brand-dark/40 p-8 rounded-md border border-white/5 animate-fade-in"
                >
                  <ul className="grid grid-cols-1 gap-6">
                    {stackItems.map((item) => (
                      <li key={item.letter} className="flex gap-0.5 items-baseline">
                        <span className="font-mono font-bold text-brand-accent text-2xl leading-none">{item.letter}</span>
                        <span className="text-slate-300 font-normal text-lg">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* FLOW SECTION - Now on Bottom */}
            <div className="relative">
              <p className="inline align-middle">
                I architect backend infrastructures through a methodology focused on logical consistency:
              </p>
              <button
                onClick={() => toggle('FLOW')}
                aria-expanded={activeAcronym === 'FLOW'}
                aria-controls="flow-list"
                className={`ml-3 align-middle transition-all duration-500 px-4 py-1.5 rounded-sm inline-flex items-center gap-3 cursor-pointer focus:outline-none border ${
                  activeAcronym === 'FLOW' 
                    ? 'bg-brand-accent/10 text-brand-accent border-brand-accent/40 shadow-sm shadow-brand-accent/10' 
                    : 'text-slate-500 border-white/10 bg-white/5 hover:border-white/20 hover:text-slate-300'
                }`}
              >
                <span className="font-mono font-bold tracking-tighter">F.L.O.W.</span>
                <svg className={`w-3 h-3 transition-transform duration-500 ${activeAcronym === 'FLOW' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeAcronym === 'FLOW' && (
                <div 
                  id="flow-list"
                  className="mt-8 bg-brand-dark/40 p-8 rounded-md border border-white/5 animate-fade-in"
                >
                  <ul className="grid grid-cols-1 gap-6">
                    {flowItems.map((item) => (
                      <li key={item.letter} className="flex gap-0.5 items-baseline">
                        <span className="font-mono font-bold text-brand-accent text-2xl leading-none">{item.letter}</span>
                        <span className="text-slate-300 font-normal text-lg">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <footer className="text-slate-500 mt-16 pt-10 border-t border-white/5 text-center text-sm tracking-widest italic">
              Not Stack over Flow — but <span className="text-slate-300 font-mono font-bold mx-1">Stack for Flow</span>
            </footer>
          </div>
        </Card>
      </Container>
    </Section>
  );
}