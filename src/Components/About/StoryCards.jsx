import React from 'react'

function StoryCards({ skill }) {
    return (
        <div key={skill.title} className={`bg-white sm:size-32 size-24 text-center text-primary-9 px-6 py-3 rounded-2xl flex flex-col items-center`}>
            <div className='text-center flex flex-col gap-1 items-center'>
                <skill.icon className="sm:size-11 size-7" />
                <span className={`sm:text-sm text-xs font-heavy-1200`}>
                    {skill.title}
                </span>
            </div>
            <span className='sm:text-sm text-xs font-heavy-576'>{skill.text}</span>
        </div>
    )
}

export default StoryCards