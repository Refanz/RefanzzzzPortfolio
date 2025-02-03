import Badge from "../../components/Badge.tsx";
import ExpCard from "../../components/ExpCard.tsx";
import experiences from "../../data/experiences.ts";

const ExperienceSection = () => {
    return (
        <section className="px-8 py-24 flex flex-col items-center gap-12">
            <div className="flex flex-col gap-4">
                <Badge desc="Experiences"/>
                <span className="text-center">Here is quick summary of ny most recent experiences:</span>
            </div>
            {
                experiences?.map((exp, index) => {
                    return (
                        <ExpCard key={index} img={exp.img} jobName={exp.jobName} descriptions={exp.descriptions} date={exp.date}/>
                    )
                })
            }
        </section>
    )
}

export default ExperienceSection;