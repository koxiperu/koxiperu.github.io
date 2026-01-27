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
      
      <div className="mb-12">
        <h3 className="text-4xl font-bold text-brand-purple mb-6 flex items-center no-star-interaction">
          <span className="w-2 h-8 bg-brand-orange rounded-full mr-3 shadow-[0_0_8px_rgba(242,153,74,0.6)]"></span>
          Academic Education
        </h3>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-brand-dark p-6 rounded-xl border border-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] no-star-interaction transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                <span className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium mt-2 md:mt-0">
                  {edu.year}
                </span>
              </div>
              <div className="text-lg text-brand-orange font-medium mb-2">{edu.institution}</div>
              <p className="text-gray-400">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-brand-pink mb-6 flex items-center no-star-interaction">
           <span className="w-2 h-8 bg-brand-orange rounded-full mr-3 shadow-[0_0_8px_rgba(242,153,74,0.6)]"></span>
           Certifications
        </h3>
        <div className="grid gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-brand-dark p-6 rounded-xl border border-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] no-star-interaction transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h4 className="text-xl font-bold text-white">{cert.title}</h4>
                <span className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium mt-2 md:mt-0">
                  {cert.year}
                </span>
              </div>
              <div className="text-lg text-brand-orange font-medium">{cert.issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}