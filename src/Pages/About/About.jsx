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
      <Layout.Body className="overflow-hidden container">
        <Section>
          <Heading title={"my story"} />
          <Content className={`flex tracking-widest flex-col bg-primary-10/40 rounded-lg p-10 text-secondary-2 max-w-screen-lg mx-auto gap-4`}
            {...contentAnimation}
          >
            <div className={`font-heavy-576 flex-1 flex`}>
              <div className="size-52 overflow-hidden">
                <img src={Myface} alt="Mahmoud Sameh" className="w-full h-fit" />
              </div>
              <p className="flex-1">
                {mystory.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
              {mystory.skills.map((skill) => (
                <StoryCards key={skill.title} skill={skill} />
              ))}
            </div>
          </Content>
        </Section>
        <Section>
          <Heading title={"Experience"} />
          <Content {...contentAnimation} className={`flex flex-col max-w-screen-lg mx-auto gap-4`}>
            <div className="text-2xl font-heavy-576 max-h-max w-full p-5 bg-white rounded-2xl text-center">
              <p>
                I have experience in web development, including React, Node.js, and MongoDB. I have worked on various projects, including personal and collaborative ones.
              </p>
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
