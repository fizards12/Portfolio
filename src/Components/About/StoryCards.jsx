import React from 'react'

function StoryCards({ skill }) {
    return (
        <div key={skill.title}>
            <div className='flex gap-2 items-center min-w-max'>
                <div>
                    <skill.icon className="size-7" />
                </div>
                <span>{skill.text}</span>
            </div>
        </div>
    )
}

export default StoryCards