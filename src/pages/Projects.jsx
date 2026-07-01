import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Projects() {
  const projects = [
    {
      codename: 'EduJob_Tracker',
      title: 'EduJob Application Tracker',
      description:
        'Full-stack SPA to manage job and academic applications. Stateless JWT security with role-based access, a real-time analytics dashboard with automated deadline alerts, and document management backed by PostgreSQL.',
      tech: ['Java 21', 'Spring Boot', 'PostgreSQL', 'React 19', 'Tailwind'],
      link: 'https://github.com/koxiperu/edujobapp-backend',
    },
    {
      codename: 'StockViser',
      title: 'StockViser',
      description:
        'AI-enhanced portfolio tracker that synchronises real-time market news with stock symbols and runs asynchronous sentiment analysis to automate due diligence for retail investors.',
      tech: ['PHP 8', 'Laravel 10', 'OpenAI API', 'MySQL', 'Docker'],
      link: 'https://github.com/koxiperu/StockViser',
    },
    {
      codename: 'CV_Orchestrator',
      title: 'AI-Agentic Application Orchestrator',
      description:
        'End-to-end automation that generates tailored CVs and motivation letters with LLMs — dynamically analysing job descriptions and mapping them to a master profile with LaTeX-perfect output.',
      tech: ['Python', 'FastAPI', 'Gemini API', 'Jinja2', 'LaTeX'],
      link: null,
    },
  ];

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
          {projects.map((project) => (
            <Card key={project.codename} variant="interactive" className="no-star-interaction group flex flex-col h-full overflow-hidden border-white/[0.03]">
              <div className="aspect-video mb-8 bg-slate-900/50 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <span className="text-slate-600 font-mono tracking-widest text-[10px] uppercase">
                  {project.codename}
                </span>
              </div>
              <div className="space-y-6 flex-grow">
                <h4 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors duration-500">
                  {project.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 bg-white/5 text-slate-500 rounded-md border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-10 mt-auto">
                {project.link ? (
                  <Button
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="w-full text-xs font-bold tracking-widest uppercase py-3"
                  >
                    View on GitHub
                  </Button>
                ) : (
                  <div className="w-full text-center text-[10px] font-bold tracking-widest uppercase py-3 text-slate-600 border border-white/5 rounded-sm">
                    Private Repository
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center no-star-interaction">
          <p className="text-slate-600 text-sm italic tracking-wide">
            More repositories on{' '}
            <a
              href="https://github.com/koxiperu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-accent transition-colors not-italic font-mono"
            >
              github.com/koxiperu
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
