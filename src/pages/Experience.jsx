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
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 relative">
            {/* Timeline line for desktop */}
            <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-px bg-gray-200 -ml-px transform -translate-x-1/2"></div>
            
            <div className="md:w-1/4 flex-shrink-0 md:text-right md:pr-8 relative z-10">
              <div className="font-bold text-gray-800 text-lg">{exp.period}</div>
              <div className="text-sm text-gray-500 font-medium">{exp.location}</div>
            </div>
            
            <div className="md:w-3/4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative z-10">
              <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
              <div className="text-blue-600 font-medium mb-3">{exp.company}</div>
              <ul className="space-y-2 text-gray-600">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}