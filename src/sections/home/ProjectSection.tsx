import Badge from "../../components/Badge.tsx";
import ProjectCard from "../../components/ProjectCard.tsx";
import projects from "../../data/projects.ts";

const ProjectSection = () => {
    return (
        <section className="px-8 py-24 flex flex-col gap-12">
            <div className="flex flex-col gap-4">
                <Badge desc="Projects"/>
                <span className="self-center">Some of the noteworthy projects i have built:</span>
            </div>
            {
                projects.map((project, index) => {
                    return (
                        <ProjectCard projectName={project.name} img={project.img} description={project.description}
                                     technologies={project.technologies} key={index}/>
                    )
                })
            }
        </section>
    )
}

export default ProjectSection;