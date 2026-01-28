import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Projects() {
  return (
    <Section>
      <Container className="max-w-5xl">
        <header className="mb-16 no-star-interaction">
          <h2 className="text-xs font-bold tracking-[0.4em] text-slate-500 uppercase mb-3">
            Selected Work
          </h2>
          <div className="flex items-center gap-6">
            <h3 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
              Projects
            </h3>
            <div className="h-px flex-grow bg-white/5"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2].map((i) => (
            <Card key={i} variant="interactive" className="no-star-interaction group flex flex-col h-full overflow-hidden border-white/[0.03]">
              <div className="aspect-video mb-8 bg-slate-900/50 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <span className="text-slate-600 font-mono tracking-widest text-[10px] uppercase">
                  Project_Visualization_0{i}.exe
                </span>
              </div>
              <div className="space-y-6 flex-grow">
                <h4 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors duration-500">
                  Enterprise Backend System {i}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  Advanced architecture implementing scalable microservices and high-throughput data pipelines. 
                  Focused on system resilience and performance optimization in cloud environments.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Python', 'FastAPI', 'Docker', 'AWS'].map(tech => (
                    <span key={tech} className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 bg-white/5 text-slate-500 rounded-md border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-10 mt-auto">
                <Button variant="outline" className="w-full text-xs font-bold tracking-widest uppercase py-3">
                  View Case Study
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center no-star-interaction">
          <p className="text-slate-600 text-sm italic tracking-wide">
            Additional repositories available on my technical profiles.
          </p>
        </div>
      </Container>
    </Section>
  );
}
