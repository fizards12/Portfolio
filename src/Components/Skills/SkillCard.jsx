import React from 'react'
import classNames from 'classnames'
import {motion} from "motion/react"
function SkillCard({ skill = { title: "React", Icon: FaReact, color: { color: "secondary", degree: "5" } }, className = "", ...props }) {
    const colorDegree = `${skill.color.color}-${skill.color.degree}`
    const textColor = `text-${colorDegree}`
    const borderColor = `border-${colorDegree}`
    return (
        <motion.div className={classNames('flex flex-col items-center gap-2 w-fit', className)} {...props}>
            <div className={classNames('size-32 flex justify-center items-center isolate relative rounded-full border-[6px]', textColor, borderColor)}>
                <skill.Icon className='' size={70} />
            </div>
            <span className={classNames('text-2xl font-heavy-1200 uppercase tracking-widest', textColor)}>{skill.title}</span>
        </motion.div>
    )
}

export default SkillCard