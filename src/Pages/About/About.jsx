import React, { useCallback, useEffect, useRef } from "react";
import AboutImage from "../../assets/hero_bg/about-bg.png";
import Myface from "../../assets/myFace.png";
import Layout from "../../Components/UI/Layout/Layout";
import Section, { Content, Heading } from "../../Components/UI/Section/Section";
import { FaSearchLocation, FaWhatsapp } from "react-icons/fa";
import StoryCards from "../../Components/About/StoryCards";
import advancedCert from "../../assets/certifcates/Advanced.PNG";
import professionalCert from "../../assets/certifcates/Professional.PNG";
import bachelorCert from "../../assets/certifcates/Bachelor.jpg";
import { createPortal } from "react-dom";
import CertModal from "../../Components/About/CertModal";
import ExperienceItem from "../../Components/About/ExperienceItem";
const mystory = {
  description: 'My Name is Mahmoud Sameh. A Communication and Electronics Engineer and fresh Full-Stack Web Developer with experience as front-end developer. I , and I finished Reactjs Course that on MaharaTech, the three courses of Web Development track introduced by FWD, and finished Codevolution playlists of React, React Hooks, and React Router.',
  skills: [
    { title: "Phone", text: "+201012345678", icon: FaWhatsapp },
    { title: "Location", text: "Alexandria, Egypt", icon: FaSearchLocation },
  ]
}
const certifcates = [
  {
    cert: advancedCert,
    name: "Advanced Web Development",
  },
  {
    cert: bachelorCert,
    name: "Bachelor's Degree",
  },
  {
    cert: professionalCert,
    name: "Professional Web Development",
  },
]

const experience = [
  {
    role: "Frontend Developer – Spheremail (Part Time)",
    duration: {
      start: "04/2025",
      end: "Present"
    },
    responsibilities: [
      "Working on SaaS Virtual Mailbox platform that provide a dashboard for Mail Receiving Agencies (CMRAs) to handle their customers’ mailboxes and also for their customers to handle their mail items.",
      "Maintaining the front-end architecture for the application using VueJs framework, and other applicationsbelongs to the company.",
      "Actively participated in cross-functional teams, collaborating with backend developers to refine API endpointsand align user interface behavior with backend logic, and collaborate with Test Developers to deliver newfeatures with free bugs.",
      "update and deploy features to production that was developed by past frontend developers but was postponed for awhile."
    ]
  },
  {
    role: "Frontend Developer – ensoulify (Part Time)",
    duration: {
      start: "12/2024",
      end: "03/2025"
    },
    responsibilities: [
      "Working on Full-Stack SaaS ERP System for Invoice and Receipt Management that facilitates dealing with Egyptian Tax Authority (ETA-SDK), and provides a AI-Powered GPC search.",
      "maintaining the front-end architecture for the application using VueJs framework.",
      "Collaborating closely with backend developers to optimize API interactions and enhancing user experience",
      "Translating Figma designs into high-quality, responsive front-end components achieving pixel-perfect accuracy."
    ]
  },
  {
    role: "Front-end Developer Intern - ensoulify",
    duration: {
      start: "06/2024",
      end: "11/2024"
    },
    responsibilities: [
      "Working on Full-Stack SaaS ERP System for Invoice and Receipt Management that facilitates dealing with Egyptian Tax Authority (ETA-SDK), and provides a AI-Powered GPC search.",
      "maintaining the front-end architecture for the application using VueJs framework.",
      "Collaborating closely with backend developers to optimize API interactions and enhancing user experience",
      "Translating Figma designs into high-quality, responsive front-end components achieving pixel-perfect accuracy."
    ]
  },
]

const contentAnimation = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { delay: 0.5, type: 'spring', stiffness: 50, damping: 10 },
  viewport: { once: true, amount: 0.1 }
}

const About = () => {
  const certModal = useRef(null);
  const [selectedCert, setSelectedCert] = React.useState(certifcates[0]);
  const openCertModal = useCallback((cert) => {
    setSelectedCert(cert);
    certModal.current.showModal();
  }, []);
  return (
    <>
      <Layout.Header
        img={AboutImage}
        alt={"Mahmoud Sameh"}
        title={"About"}
        className={`font-heavy-1200 uppercase text-primary-2`}
      />
      <Layout.Body className="overflow-hidden *:container *:mx-auto">
        <Section>
          <Heading title={"my story"} />
          <Content className={`flex max-md:flex-col max-[540px]:text-sm tracking-wide bg-primary-10/40 rounded-lg p-10 text-secondary-2 max-w-screen-lg mx-auto gap-4`}
            {...contentAnimation}
          >
            <div className="size-52 mx-auto overflow-hidden rounded-full bg-secondary-8/20">
              <img src={Myface} alt="Mahmoud Sameh" className="w-full h-fit" />
            </div>
            <div className={`font-heavy-576 flex-1 flex flex-col gap-4`}>
              <p>
                {mystory.description}
              </p>
              <div className="flex flex-wrap gap-8">
                {mystory.skills.map((skill) => (
                  <StoryCards key={skill.title} skill={skill} />
                ))}
              </div>
            </div>
          </Content>
        </Section>
        <Section className="">
          <Heading title={"Experience"} />
          <Content {...contentAnimation} className={`flex flex-col gap-4`}>
            <div className="rounded-lg p-10 text-secondary-2 flex flex-col gap-8">
              {experience.map((exp, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className="bg-secondary-10/50 rounded-lg p-5 max-w-screen-md transition-transform duration-300 hover:scale-105">
                    <ExperienceItem experience={exp} />
                  </div>
                </div>
              ))}
            </div>
          </Content>
        </Section>
        <Section>
          <Heading title={"Certications"} />
          <Content {...contentAnimation}>
            <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-4 justify-center items-start">
              {certifcates.map((cert, index) => (
                <div key={cert.name} className={"bg-secondary-10/50 rounded-2xl cursor-pointer !p-5 col-span-1 transition-[transform] duration-300 hover:scale-105 " + (index === 1 ? "md:row-span-2" : "md:row-span-1")} onClick={() => openCertModal(cert)}>
                  <img src={cert.cert} alt={cert.name} className="w-full rounded-2xl h-full object-contain" />
                </div>
              ))}
            </div>
          </Content>
        </Section>
      </Layout.Body>
      {createPortal(<CertModal ref={certModal} cert={selectedCert} />, document.getElementById('root'))}
    </>
  );
};

export const loader = () => { };

export default About;
