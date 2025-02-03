import Badge from "../../components/Badge.tsx";
import skills from "../../data/skills.ts";
import SkillCard from "../../components/SkillCard.tsx";

const SkillSection = () => {
    return (
        <section className="px-8 py-24 flex flex-col items-center">
            <div className="flex flex-col gap-4 w-full">
                <Badge desc="Skills"/>
                <span
                    className="text-xl text-gray-600 text-center">The skills, tools, technologies i am really good at:</span>
                <div className="mt-6 grid md:grid-cols-8 sm:grid-cols-4 grid-cols-3 gap-5">
                    {
                        skills.map((skill, index) => {
                            return (
                                <SkillCard key={index} name={skill.name} img={skill.img}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SkillSection;