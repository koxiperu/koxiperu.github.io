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
    {
      year: "2025",
      title: "Oracle Database SQL Certified Associate (Oracle)",
      issuer: "Oracle"
    },
    {
      year: "2025",
      title: "Java Certified Foundations Associate (Oracle)",
      issuer: "Oracle"
    },
    {
      year: "2025",
      title: "Back-End Development - Fundamentals, Intermediate & Advanced",
      issuer: "CNFPC"
    },
    {
      year: "2024",
      title: "Cybersecurity Essentials",
      issuer: "DLH"
    },
    {
      year: "2024",
      title: "IBM DevOps and Software Engineering",
      issuer: "Coursera"
    },
    {
      year: "2024",
      title: "Data Science and Machine Learning with Python",
      issuer: "DLH"
    },
    {
      year: "2023",
      title: "Full Stack Web Developer Certificate",
      issuer: "CAP4LAB / CNFPC"
    },
    {
      year: "2023",
      title: "Google Data Analytics Specialisation",
      issuer: "Coursera"
    },
    {
      year: "2010",
      title: "Project Management in a Company (PMI PMBoK 2008)",
      issuer: "Internal Training"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">Education & Certificates</h2>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
          <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </span>
          Academic Education
        </h3>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mt-2 md:mt-0">
                  {edu.year}
                </span>
              </div>
              <div className="text-lg text-gray-600 font-medium mb-2">{edu.institution}</div>
              <p className="text-gray-500">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
          <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </span>
          Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((cert, index) => (
            <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-white hover:border-green-200 hover:shadow-sm transition-all">
              <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 leading-tight mb-1">{cert.title}</h5>
                <div className="text-sm text-gray-500 flex justify-between w-full gap-4">
                  <span>{cert.issuer}</span>
                  <span className="font-medium text-gray-400">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
