import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: [
        { name: "Python, PHP, Java", level: "Advanced" },
        { name: "Flask, Django, FastAPI", level: "Advanced" },
        { name: "Angular, Laravel, Springboot", level: "Intermediate" },
        { name: "CI/CD, DevOps, DevSecOps", level: "Intermediate" },
        { name: "Git, GitHub", level: "Advanced" },
        { name: "Docker, Kubernetes", level: "Intermediate" },
        { name: "Linux, Bash scripting", level: "Advanced" },
        { name: "HTML, CSS, JS", level: "Advanced" },
        { name: "AWS Ecosystem", level: "Intermediate" },
        { name: "(Rest) API, Postman", level: "Advanced" },
        { name: "SQL, RDBMS", level: "Advanced" },
        { name: "Network Architecture", level: "Intermediate" },
        { name: "Agile, Scrum, Jira", level: "Advanced" }
      ]
    },
    {
      title: "Engineering Mindset",
      skills: [
        { name: "Systems Thinking", level: "" },
        { name: "Analytical Problem-Solving", level: "" },
        { name: "Architecture Precision", level: "" },
        { name: "Adaptive Methodology", level: "" },
        { name: "Committed Team Leadership", level: "" }
      ]
    },
    {
      title: "Linguistic Proficiency",
      skills: [
        { name: "Russian", level: "Native" },
        { name: "English", level: "Proficient" },
        { name: "French", level: "Independent" },
        { name: "Luxembourgish", level: "Basic" }
      ]
    }
  ];

  return (
    <Section>
      <Container className="max-w-5xl">
        <header className="mb-16 no-star-interaction">
          <h2 className="text-xs font-bold tracking-[0.4em] text-slate-500 uppercase mb-3">
            Technical Stack
          </h2>
          <div className="flex items-center gap-6">
            <h3 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
              Skills & Competencies
            </h3>
            <div className="h-px flex-grow bg-white/5"></div>
          </div>
        </header>
        
        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-8 no-star-interaction">
              <h4 className="text-xl font-bold text-white/90 flex items-center gap-4">
                <span className="text-brand-accent font-mono">0{idx + 1}.</span>
                {category.title}
                <div className="h-px w-12 bg-white/10"></div>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <Card 
                    key={sIdx} 
                    variant="interactive"
                    className="p-4 md:p-5 flex justify-between items-center group border-white/[0.03]"
                  >
                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 bg-brand-accent/10 text-brand-accent rounded-md border border-brand-accent/20">
                        {skill.level}
                      </span>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}