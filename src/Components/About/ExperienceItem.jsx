
function ExperienceItem({ experience }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 flex-wrap justify-between">
                <h4 className="text-h4-0 font-heavy-0">{experience.role}</h4>
                <p>{experience.duration.start} - {experience.duration.end}</p>
            </div>
            <div className="">
                <ul className="list-disc pl-5">
                    {experience.responsibilities.map((item, index) => (
                        <li key={index} className="list-disc ml-5">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default ExperienceItem