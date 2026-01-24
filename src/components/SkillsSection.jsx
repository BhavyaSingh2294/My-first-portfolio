import {useState} from 'react';
import {cn} from "../lib/utils";

const skills =[
    // Frontend Skills
    {name:"HTML/CSS", level:90, category:"frontend"},
    {name:"JavaScript", level:85, category:"frontend"},
    {name:"React", level:80, category:"frontend"},
    {name:"Tailwind CSS", level:70, category:"frontend"},
    {name:"Next.js", level:50, category:"frontend"},
    {name:"Java AWT/Swings/Applet", level:50, category:"frontend"},


    // Backend Skills
    {name:"Node.js", level:75, category:"backend"},
    {name:"Express.js", level:70, category:"backend"},
    {name:"MongoDB Compass/Atlas", level:60, category:"backend"},
    {name:"MySQL", level:75, category:"backend"},
    {name:"RESTful APIs", level:65, category:"backend"},
    {name:"JDBC", level:60, category:"backend"},

    //  DevOps Tools
    {name:"Git/GitHub", level:80, category:"devops"},
    {name:"Docker/DockerHub", level:60, category:"devops"},
    {name:"Kubernetes", level:50, category:"devops"},
    {name:"CI/CD Pipeline", level:70, category:"devops"},
    {name:"Jenkins", level:80, category:"devops"},
    {name:"Terraform", level:40, category:"devops"},
    {name:"Ansible", level:50, category:"devops"},
  

    // Cloud Platforms
    {name:"AWS", level:65, category:"cloud"},
    {name:"Virtual Machines", level:70, category:"cloud"},

    // Programming Languages
    {name:"Python", level:60, category:"programming"},
    {name:"Java", level:90, category:"programming"},    
    {name:"C++", level:60, category:"programming"},
    {name:"C", level:70, category:"programming"},
    {name:"Linux/Bash/Shell", level:50, category:"programming"},
    {name:"DSA", level:50, category:"programming"},

    // Software Tools 
    {name:"Visual Studio Code", level:85, category:"Software Tools"},
    {name:"Eclipse/IntelliJ/Codeblocks", level:85, category:"Software Tools"},
    {name:"Figma/Canva/Powerpoint/Scratch", level:65, category:"Software Tools"},
    {name:"Excel/Tableau/PowerBI", level:85, category:"Software Tools"},
    {name:"Cisco Packet Tracer", level:60, category:"Software Tools"},
    {name:"Arudino_IDE/tinkerCad", level:75, category:"Software Tools"},
    {name:"Postman/ThunderClient", level:60, category:"Software Tools"},
    {name:"Obsedian", level:60, category:"Software Tools"}, 

    // Soft Skills
    {name:"Communication", level:90, category:"Soft Skills"},
    {name:"Team-Collaboration", level:85, category:"Soft Skills"},
    {name:"Leadership", level:80, category:"Soft Skills"},
    {name:"Problem-Solving", level:65, category:"Soft Skills"},
    {name:"Adaptability", level:75, category:"Soft Skills"},
    {name:"Time Management", level:80, category:"Soft Skills"},
    
];


const categories = ["all","frontend","backend","devops","cloud" ,"programming","Software Tools","Soft Skills"];


export const SkillsSection=()=>{

     const [activeCategory,setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill)=> activeCategory === "all" || skill.category === activeCategory
);

    return (
    <section 
    id="skills"
    className="py-24 px-4 realtive bg-secondary/30"
    >
    <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary">Skills</span>
    </h2>

{/*managing and selecting the heading of the skills to which one to choose*/}

<div className="flex flex-wrap justify-center gap-4 mb-12">
{categories.map((category,key)=>(
    <button key={key} 
    onClick={()=> setActiveCategory(category)}
    className={cn(
    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
    activeCategory === category ? "bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bg-secondary"
   
    )}
    >
        {category}
    </button>
))}
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{filteredSkills.map((skill,key)=>(
<div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"
>
<div className="text-left mb-4">
    <h3 className="font-semibold  text-lg">{skill.name}</h3>
</div>

<div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
    <div 
    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
    style={{width:skill.level + "%"}}
    />
</div>

<div className=" text-right mt-1 ">
    <span className="text-sm text-muted-foreground">{skill.level}%</span>
</div>

</div>

))}

</div>


    </div>
    </section>
);
};