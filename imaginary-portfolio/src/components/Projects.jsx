import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  
  const projectData = [
    {
      id: 1,
      title: "Campus Gigs",
      description: "A freelance marketplace platform supporting user authentication, contracts, escrow-style transactions, and virtual wallet management..",
      tech: ["Express.js", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Advanced Git Workflow Automation & Quality Assurance",
      description: "Designed enterprise-grade Git workflows modelled after large-scale open-source projects, implementing operations like interactive rebasing and cherry-pick patch migration.",
      tech: ["Git", "Bash"]
    },
     {
      id: 3,
      title: "Corporate Company Profile Booklet",
      description: "•	Coordinated the development of a corporate profile booklet for an engineering firm.",
      tech: ["Powerpoint", "Canva"]
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800 text-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div key={project.id} className="bg-slate-700 p-6 rounded-xl border border-slate-600 hover:border-indigo-400 transition-colors">
              <FolderGit2 className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-300 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((skill, index) => (
                  <span key={index} className="bg-slate-800 text-indigo-300 text-xs px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}