type BadgeProps = {
    desc: string;
}

const Badge = ({desc} : BadgeProps) => {
    return (
        <span className="text-sm px-5 py-1 bg-gray-200 rounded-xl w-fit self-center">{desc}</span>
    )
}

export default Badge;