import React from 'react'
import Layout from '../../Components/UI/Layout/Layout'
import PortfolioImage from "../../assets/hero_bg/portfolio-bg.png"
import Section, { Content, Heading } from "../../Components/UI/Section/Section";
import db from '../../db';
import ProjectCard from '../../Components/ProjectCard';

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

function Portfolio() {
  return (
    <>
      <Layout.Header img={PortfolioImage} alt={"Mahmoud Sameh"} title={"Portfolio"} className={`font-heavy-1200 uppercase text-primary-2`} />
      <Layout.Body>
        <Section>
          <Heading title={"Portfolio"} />
          <Content viewport={{ once: true,amount: 0.1 }} variants={container} initial="hidden" whileInView="show"
          className={`grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4`}>
            {
              db.projects.map((project)=>{
                return <ProjectCard viewport={{ once: true,amount: 0.1 }} variants={item} key={project.id} project={project} className={`mx-auto`} />
              })
            }
          </Content>
        </Section>
      </Layout.Body>
    </>
  )
}

export default Portfolio