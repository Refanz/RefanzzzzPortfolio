import Badge from "./Badge.tsx";
import {LuSquareArrowOutUpRight} from "react-icons/lu";

type projectCardProps = {
    projectName: string,
    img: string,
    description: string,
    technologies: string[]
}

const ProjectCard = ({projectName, img, description, technologies}: projectCardProps) => {
    return (
        <div className="flex justify-between lg:flex-row flex-col items-center p-12 shadow-lg rounded-xl">
            <div className="md:p-12 p-8">
                <img alt="project-img" src={img} className="md:min-w-[480px]"/>
            </div>
            <div className="flex flex-col gap-6 md:p-12 p-8">
                <span className="text-gray-900 font-semibold">{projectName}</span>
                <p>{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {
                        technologies?.map((tech, index) => {
                            return (
                                <Badge key={index} desc={tech}/>
                            )
                        })
                    }
                </div>
                <LuSquareArrowOutUpRight className="size-6"/>
            </div>
        </div>
    )
}

export default ProjectCard;