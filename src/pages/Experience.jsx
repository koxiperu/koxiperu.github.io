import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

export default function Experience() {
  const experiences = [
    {
      role: "Junior Backend Developer",
      company: "Moniflo",
      location: "Luxembourg",
      period: "Apr 2024 - Oct 2024",
      description: [
        "Developed, tested, and deployed backend services for an investment app, delivered end-to-end functionality through the full DevOps pipeline.",
        "Built and maintained internal tools for operations and compliance teams, applying data science to detect potential money laundering and automate suspicious activity reports."
      ]
    },
    {
      role: "Volunteer",
      company: "Ukrainian Humanitarian Center",
      location: "Contern, Luxembourg",
      period: "Mar 2022 - Jul 2022",
      description: [
        "Volunteered at the humanitarian center, assisting with various operational tasks."
      ]
    },
    {
      role: "Career Break",
      company: "Family Commitments & Relocation",
      location: "",
      period: "2018 - 2022",
      description: [
        "Took a career break to focus on family commitments and relocation."
      ]
    },
    {
      role: "Deputy Director",
      company: "1C-MIPT",
      location: "Moscow, Russia",
      period: "2011 - 2017",
      description: [
        "Maintained company documentation and core business processes to support smooth operations.",
        "Developed and implemented KPIs for the employee compensation plan.",
        "Project Manager: Managed projects for adapting, implementing, and automating business processes with information ERP systems.",
        "Business Analyst: Organized client meetings and presentations, providing analytical support from requirements gathering to rollout. Acted as the liaison between the development team and business clients to ensure effective communication."
      ]
    },
    {
      role: "Sales Trainee",
      company: "CitiBank",
      location: "Moscow, Russia",
      period: "Feb 2011 - May 2011",
      description: [
        "Communicated with potential clients and guided them through credit card registration ensuring smooth onboarding for new customers."
      ]
    },
    {
      role: "Assistant Consultant Trainee",
      company: "The Concept",
      location: "Moscow, Russia",
      period: "2009 - 2010",
      description: [
        "Supported collaboration with clients by providing assistance with communication, coordination and documentation."
      ]
    }
  ];

  return (
    <Section>
      <Container className="max-w-5xl">
        <header className="mb-16 no-star-interaction">
          <h2 className="text-xs font-bold tracking-[0.4em] text-slate-500 uppercase mb-3">
            Career Journey
          </h2>
          <div className="flex items-center gap-6">
            <h3 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
              Experience
            </h3>
            <div className="h-px flex-grow bg-white/5"></div>
          </div>
        </header>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 relative items-start">
              
              <div className="md:w-1/4 flex-shrink-0 flex items-start gap-6 md:pr-4 no-star-interaction">
                <div className="flex-1 md:text-right flex flex-col justify-start pt-1">
                  <div className="font-mono font-bold text-brand-accent text-sm tracking-tighter mb-1">{exp.period}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">{exp.location}</div>
                  <div className="text-slate-300 font-semibold text-base leading-tight">{exp.company}</div>
                </div>
                <div className="hidden md:flex flex-col items-center pt-2 self-stretch">
                  <span className="w-1 h-full bg-white/5 rounded-full relative">
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-accent/40 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.4)]"></span>
                  </span>
                </div>
              </div>
              
              <Card variant="default" className="md:w-3/4 no-star-interaction group border-white/[0.03]">
                <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors duration-500 mb-6">{exp.role}</h3>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-400 leading-relaxed">
                      <span className="mr-3 mt-2.5 w-1 h-1 bg-brand-accent/30 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}