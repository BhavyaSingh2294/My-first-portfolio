import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Tours And Travel Website",
        description: "Developed a tours and travel website in group using Canva for designing UI ,intermediate level HTML, CSS and JavaScript",
        image: "/projects/project1.png",
        tags: ["HTML", "CSS", "JavaScript","firebase"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Automated Teller Machine",
        description: "Developed an ATM simulator using Java Awt, Swing for GUI and JDBC and MySQL for backend logic, implementing core banking functionalities.",
        tags: ["Java", "AWT/Swing", "JDBC","MySQL"],
        image: "/projects/project2.png",
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Job Nest -A Job Portal",
        description: "Developed and deployed a full-stack job portal, from initial concept to a live web application using the MERN stack (MongoDB, Express, React, Node.js).",
        tags: ["React", " Tailwind CSS", "JavaScript","Express.js","MongoDB","Node.js"],
        image: "/projects/project3.png",
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 4,
        title: "University Project Management System",
        description: "Built and deployed a full-stack MERN application to manage university projects, implementing features for task creation, user assignment, and progress tracking.",
        tags: ["React", " Tailwind CSS", "JavaScript","Express.js","MongoDB","Node.js"],
        image: "/projects/project4.png",
        demoUrl: "#",
        githubUrl: "#",
    },
    
];

export const ProjectsSection=()=> {

return(
    <section id="projects" className="py-24 px-4 relative">
    <div className=" container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Featured<span className="text-primary"> Projects</span>
        </h2>

<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
Here are some of the recent projects I've worked on, showcasing my skills in web development and programming.
Each project highlights my ability to create functional and user-friendly applications.
</p>

<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
{projects.map((project,key) => (
    <div 
    key={key}
     className=" group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
    >

<div className="h-48 overflow-hidden">
    <img
     src={project.image} 
     alt={project.title} 
     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
 </div>

 <div className="p-6">
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tags.map((tag) => (
        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            {tag}
        </span>
      ))}
 </div>


<h3 className="text-xl font-semibold mb-1">{project.title}</h3>
<p className="text-muted-foreground text-sm mb-4">
{project.description}
</p>
<div className="flex justify-between items-center">
<div className="flex space-x-3">
<a href={project.demoUrl} target="_blank"  className=" text-foreground/80 hover:text-primary transition-colors duration-300">
<ExternalLink size={20}/>
</a>

<a href={project.githubUrl} target="_blank"  className="text-foreground/80 hover:text-primary transition-colors duration-300">
<Github size={20}/>
</a>

</div>
</div>
</div>

</div>
))}
</div>

<div className="text-center mt-12">
<a 
 className="cosmic-button w-fit flex items-center mx-auto gap-2"
 target="_blank"
 href="https://github.com/BhavyaSingh2294"
 >
    Check My GitHub <ArrowRight size={16}/>
</a>
</div>


</div>
    </section>
);
}