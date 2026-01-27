import { useState } from 'react';

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
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-white mb-6 border-b pb-2">About Me</h2>
      <div className="p-10 bg-brand-dark rounded-xl border border-dashed border-white/10 text-gray-300 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] no-star-interaction">
        <div className="text-lg leading-relaxed space-y-6">
          <div>
            I build modern backend and full-stack systems using{' '}
            <button
              onClick={() => toggle('FLOW')}
              className={`font-bold transition-all duration-300 px-3 py-1 rounded cursor-pointer ${
                activeAcronym === 'FLOW' 
                  ? 'bg-brand-blue text-white shadow-lg scale-105' 
                  : 'text-brand-blue hover:bg-brand-blue/10 hover:scale-105'
              }`}
            >
              F.L.O.W.
            </button>
          </div>

          {activeAcronym === 'FLOW' && (
            <ul className="bg-brand-dark-blue/50 p-6 rounded-lg border-l-4 border-brand-blue ml-4 animate-fade-in shadow-inner">
              {flowItems.map((item) => (
                <li key={item.letter} className="mb-2 last:mb-0">
                  <span className="font-bold text-brand-blue text-xl">{item.letter}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          )}

          <div>
            I ensure robust delivery and operations with{' '}
            <button
              onClick={() => toggle('STACK')}
              className={`font-bold transition-all duration-300 px-3 py-1 rounded cursor-pointer ${
                activeAcronym === 'STACK' 
                  ? 'bg-brand-orange text-white shadow-lg scale-105' 
                  : 'text-brand-orange hover:bg-brand-orange/10 hover:scale-105'
              }`}
            >
              S.T.A.C.K.
            </button>
          </div>

          {activeAcronym === 'STACK' && (
            <ul className="bg-brand-dark-blue/50 p-6 rounded-lg border-l-4 border-brand-orange ml-4 animate-fade-in shadow-inner">
              {stackItems.map((item) => (
                <li key={item.letter} className="mb-2 last:mb-0">
                  <span className="font-bold text-brand-orange text-xl">{item.letter}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          )}

          <p className="italic text-gray-400 mt-8 border-t border-white/5 pt-6 text-center">
            You could say I prioritize <span className="text-brand-orange font-bold">STACK</span> over <span className="text-brand-blue font-bold">FLOW</span> :)
          </p>
        </div>
      </div>
    </div>
  );
}