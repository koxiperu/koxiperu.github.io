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
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Education & Certificates</h2>
      
      <div className="mb-20">
        <h3 className="text-4xl font-bold text-brand-purple mb-10 flex items-center no-star-interaction">
          Academic Education
        </h3>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 relative items-start">
              <div className="md:w-1/4 flex-shrink-0 flex items-start gap-4 md:pr-4">
                <div className="flex-1 md:text-right flex flex-col justify-start pt-1">
                  <div className="font-bold text-brand-purple text-lg leading-tight">{edu.year}</div>
                  <div className="text-brand-purple font-medium text-md leading-tight">{edu.institution}</div>
                </div>
                <div className="hidden md:flex flex-col items-center pt-2 self-stretch">
                  <span className="w-2 h-full bg-brand-orange rounded-full shadow-[0_0_8px_rgba(242,153,74,0.6)]"></span>
                </div>
              </div>

              <div className="md:w-3/4 bg-brand-dark p-6 rounded-xl border border-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] no-star-interaction transition-all relative z-10 group">
                <h4 className="text-2xl font-bold text-white group-hover:text-brand-purple transition-colors mb-4">{edu.degree}</h4>
                <p className="text-white">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-brand-purple mb-10 flex items-center no-star-interaction">
           Certifications
        </h3>
        <div className="space-y-8">
          {certificates.map((cert, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 relative items-start">
              <div className="md:w-1/4 flex-shrink-0 flex items-start gap-4 md:pr-4">
                <div className="flex-1 md:text-right flex flex-col justify-start pt-1">
                  <div className="font-bold text-brand-purple text-lg leading-tight">{cert.year}</div>
                  <div className="text-brand-purple font-medium text-md leading-tight">{cert.issuer}</div>
                </div>
                <div className="hidden md:flex flex-col items-center pt-2 self-stretch">
                  <span className="w-2 h-full bg-brand-orange rounded-full shadow-[0_0_8px_rgba(242,153,74,0.6)]"></span>
                </div>
              </div>

              <div className="md:w-3/4 bg-brand-dark p-6 rounded-xl border border-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] no-star-interaction transition-all relative z-10 group">
                <h4 className="text-xl font-bold text-white group-hover:text-brand-purple transition-colors">{cert.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}