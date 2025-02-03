type ExpCardProps = {
    img: string,
    jobName: string,
    descriptions: string[],
    date: string
}

const ExpCard = ({jobName, img, descriptions, date} : ExpCardProps) => {
    return (
        <div className="flex gap-12 md:flex-row flex-col md:max-w-[896px] w-full md:justify-between shadow-lg p-8 rounded-xl">
            <img alt="experience-img" src={img} className="size-16"/>
            <div className="flex flex-col-reverse md:flex-row gap-4">
                <div className="flex flex-col items-start gap-4">
                    <span className="text-gray-900 font-semibold text-xl">{jobName}</span>
                    <ul className="list-disc">
                        {
                            descriptions?.map((desc, index) => {
                                return (
                                    <li key={index}>{desc}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <span className="text-gray-700">{date}</span>
            </div>
        </div>
    )
}

export default ExpCard;