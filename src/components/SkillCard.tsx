type SkillCardProps = {
    name: string,
    img: string
}

const SkillCard = ({name, img} : SkillCardProps) => {
    return (
        <div className="flex flex-col items-center text-center gap-2">
            <img alt={name} src={img} className="size-16"/>
            <span className="text-gray-600 text-lg">{name}</span>
        </div>
    )
}

export default SkillCard;