export default function Skills() {
  const skillCategories = [
    {
      title: "Hard Skills",
      skills: [
        { name: "Python, PHP, Java", level: "Advanced" },
        { name: "Flask, Django, FastAPI", level: "Advanced" },
        { name: "Angular, Laravel, Springboot", level: "Intermediate" },
        { name: "CI/CD, DevOps, DevSecOps", level: "Intermediate" },
        { name: "Git, GitHub", level: "Advanced" },
        { name: "Docker, Kubernetes", level: "Intermediate" },
        { name: "Linux, Bash scripting", level: "Advanced" },
        { name: "HTML, CSS, JS", level: "Advanced" },
        { name: "AWS (S3, DynamoDB, Event Bridge, Cloud Watch, Workflows, Serverless)", level: "Intermediate" },
        { name: "(Rest) API, PostMan", level: "Advanced" },
        { name: "SQL, RDBMS", level: "Advanced" },
        { name: "Networks", level: "Intermediate" },
        { name: "Jira, Agile, Scrum", level: "Advanced" }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "System thinking", level: "" },
        { name: "Problem-solving", level: "" },
        { name: "Analytical mind", level: "" },
        { name: "Precision and accuracy", level: "" },
        { name: "Time Management", level: "" },
        { name: "Adaptability", level: "" },
        { name: "Curiosity", level: "" },
        { name: "Committed team member", level: "" }
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "Russian", level: "Native" },
        { name: "English", level: "Proficient" },
        { name: "French", level: "Independent" },
        { name: "Luxembourgish", level: "Basic" }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">Skills & Competencies</h2>
      
      <div className="space-y-10">
        {skillCategories.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold text-blue-600 mb-6 flex items-center">
              <span className="w-2 h-6 bg-blue-600 rounded-full mr-3"></span>
              {category.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group"
                >
                  <span className="text-gray-700 font-medium group-hover:text-gray-900">
                    {skill.name}
                  </span>
                  {skill.level && (
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-gray-100 text-gray-500 rounded-md">
                      {skill.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
