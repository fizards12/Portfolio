import React from 'react'
import GlassyContainer from './UI/GlassyContainer'
import { FiLink } from 'react-icons/fi'
import { motion } from 'motion/react'

function ProjectCard({ project, className, ...props }) {
    const { image, brief, title, preview, skills } = project
    return (
        <motion.div {...props} className={`${className || ''} overflow-visible grid-cols-1`}>
            <GlassyContainer className={`p-3 !rounded-xl h-full !max-w-[450px] w-full group !bg-secondary-8/20 shadow-lg backdrop-blur-lg`}>
                <figure className={`w-full flex flex-col gap-2`}>
                    <div className='overflow-hidden w-full h-56 relative flex justify-center items-center rounded-xl'>
                        <img src={image} className='min-h-full object-cover group-hover:scale-150 duration-500 group-hover:rotate-12 transition-all' />
                        <div className='absolute right-0 bottom-0 m-2 z-10'>
                            <a className='btn p-0 btn-accent btn-outline !btn-circle' href={preview}>
                                <FiLink size={25} />
                            </a>
                        </div>
                    </div>
                    <figcaption className={`flex flex-col gap-2`}>
                        <h3 className='text-h3-576 max-sm:text-h3-0 text-primary-4 font-heavy-576'>{title}</h3>
                        <div className='flex gap-2 flex-wrap'>
                            {skills.map((skill) => (
                                <span key={skill} className='btn min-h-0 h-fit max-sm:text-xs btn-accent px-3 py-2 rounded-md btn-outline'>{skill}</span>
                            ))}
                        </div>
                        <p className='text-lnk-lg max-sm:text-lnk-md font-heavy-0 text-secondary-6'>{brief}</p>
                    </figcaption>
                </figure>
            </GlassyContainer>
        </motion.div>
    )
}

export default ProjectCard