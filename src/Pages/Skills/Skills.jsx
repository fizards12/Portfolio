import React from 'react'
import Layout from '../../Components/UI/Layout/Layout'
import SkillsImage from '../../assets/hero_bg/skills-bg.png'
import { FaJsSquare, FaNodeJs } from 'react-icons/fa'
import { SiDaisyui, SiExpress, SiMongodb, SiMui, SiReactrouter, SiTypescript } from 'react-icons/si'
import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa6'
import { RiVuejsFill } from 'react-icons/ri'
import { GiPineapple } from 'react-icons/gi'
import { TbBrandRedux } from 'react-icons/tb'
import Section, { Content, Heading } from '../../Components/UI/Section/Section'
import SkillCard from '../../Components/Skills/SkillCard'

const skillsSections = [
  {
    title: "Languages",
    skills: [
      {
        title: "JavaScript",
        level: 5,
        Icon: FaJsSquare,
        color: {
          color: 'yellow',
          degree: '500'
        }
      },
      {
        title: "TypeScript",
        level: 5,
        Icon: SiTypescript,
        color: {
          color: 'secondary',
          degree: '5'
        }
      },
    ]
  },
  {
    title: "Frontend",
    skills: [
      {
        title: "HTML",
        level: 5,
        color: {
          color: 'orange',
          degree: '400'
        },
        Icon: FaHtml5
      },
      {
        title: "CSS",
        level: 5,
        color: {
          color: 'secondary',
          degree: '6'
        },
        Icon: FaCss3Alt
      },
      {
        title: "Bootstrap",
        level: 5,
        color: {
          color: 'primary',
          degree: '6'
        },
        Icon: FaBootstrap
      },
      {
        title: "Material-UI",
        level: 5,
        color: {
          color: 'secondary',
          degree: '5'
        },
        Icon: SiMui
      },
      {
        title: "React",
        level: 5,
        color: {
          color: 'secondary',
          degree: '4'
        },
        Icon: FaReact
      },
      {
        title: "React Router",
        level: 5,
        color: {
          color: 'red',
          degree: '800'
        },
        Icon: SiReactrouter
      },
      {
        title: "DaisyUI",
        level: 5,
        color: {
          color: 'yellow',
          degree: '50'
        },
        Icon: SiDaisyui
      },
      {
        title: "Vue",
        level: 5,
        color: {
          color: 'green',
          degree: '600'
        },
        Icon: RiVuejsFill
      },
      {
        title: "Pinia Store",
        level: 5,
        color: {
          color: 'yellow',
          degree: '500'
        },
        Icon: GiPineapple
      },
      {
        title: "Redux",
        level: 5,
        color: {
          color: 'primary',
          degree: '4'
        },
        Icon: TbBrandRedux
      },

    ]
  },
  {
    title: "Backend",
    skills: [
      {
        title: "NodeJS",
        level: 5,
        Icon: FaNodeJs,
        color: {
          color: 'green',
          degree: '700'
        }
      },
      {
        title: "Express",
        level: 5,
        color: {
          color: 'neutral',
          degree: '300'
        },
        Icon: SiExpress
      },
      {
        title: "MongoDB",
        level: 5,
        color: {
          color: 'green',
          degree: '400'
        },
        Icon: SiMongodb
      },
    ]
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  },
}

const item = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    },
  }
}

const Skills = () => {
  return (
    <>
      <Layout.Header img={SkillsImage}
        alt={"Mahmoud Sameh"}
        title={"Skills"}
        className={`font-heavy-1200 uppercase text-primary-2`} />
      <Layout.Body className='container max-w-screen-xl pb-24'>
        <div>
          {skillsSections.map((section) => (
            <Section key={section.title}>
              <Heading title={section.title} />
              <Content viewport={{ once: true,amount: 0.1 }} variants={container} initial="hidden" whileInView="show" className={`flex flex-wrap gap-12 justify-center`}>
                {section.skills.map((skill) => (
                  <SkillCard viewport={{ once: true,amount: 0.1 }} variants={item} key={skill.title} skill={skill} />
                ))}
              </Content>
            </Section>
          ))}
        </div>
      </Layout.Body>
    </>
  )
}

export default Skills