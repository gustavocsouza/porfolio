import ProjectCard from "../ProjectCard";

const projects = [1,2,3,4,5,6]

export default function Projects() {
  return (
    <div id="projects" className="h-screen p-16">
      <h4 className="text-3xl text-center font-extralight mb-4">Projetos</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {projects.map((p) => <ProjectCard key={p}/>)}
        
      </div>
    </div>
  )
}
