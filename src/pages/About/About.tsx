import React from "react";
import Page from "../../components/Navbar/Page/Page";
import "./About.scss";
import * as faIcons from "react-icons/fa";
import * as siIcons from "react-icons/si";
import * as aiIcons from "react-icons/ai";
import * as diIcons from "react-icons/di";
import SkillsButton from "../../components/SkillsButton/SkillsButton";

interface AboutProps {

};

const About: React.FC<AboutProps> = ({

}) => {

    return (
        <Page>
            <div className="about">
                <div className="main">
                    <div className="main__header">
                        <div className="description">
                            <div className="image">
                                <img src={require("../../assets/profile.png")} />
                            </div>
                            <div className="description__container">
                                <h1>Nathan Thai</h1>
                                <h3>Software Engineer</h3>
                            </div>
                        </div>
                    </div>
                    <div className="main__content">
                        <div className="biography">
                            <p>
                                Hi, my name is Nathan but I also go by Nate.
                                I am a Junior Software Engineer with professional
                                experience in developing Web Applications and Mobile
                                Applications.
                            </p>
                            <p>
                                I have worked primarily with ReactJs and NodeJs.
                            </p>
                        </div>
                        <div className="skills">
                            {/* <div className="skills__icon">
                                <div className="icon"><faIcons.FaReact /></div>
                                <div className="label">React</div>
                            </div> */}
                            <SkillsButton label="React" icon={<faIcons.FaReact />} />
                            <SkillsButton label="NodeJS" icon={<faIcons.FaNodeJs />} />
                            <SkillsButton label="React Native" icon={<faIcons.FaReact />} />
                            <SkillsButton label="ExpressJS" icon={<siIcons.SiExpress />} />
                            <SkillsButton label="CSS3" icon={<faIcons.FaCss3 />} />
                            <SkillsButton label="Sass" icon={<faIcons.FaSass />} />
                            <SkillsButton label="TypeScript" icon={<siIcons.SiTypescript />} />
                            <SkillsButton label="HTML5" icon={<faIcons.FaHtml5 />} />
                            <SkillsButton label="JWT" icon={<siIcons.SiJsonwebtokens />} />
                            <SkillsButton label="React-Redux" icon={<siIcons.SiRedux />} />
                            <SkillsButton label="PHP" icon={<siIcons.SiPhp />} />
                            <SkillsButton label="MySQL" icon={<siIcons.SiMysql />} />
                            <SkillsButton label="Django" icon={<diIcons.DiDjango  />} />
                            <SkillsButton label="Python" icon={<siIcons.SiPython />} />
                            <SkillsButton label="C" icon={<siIcons.SiCoursera />} />
                            <SkillsButton label="C#" icon={<siIcons.SiCsharp />} />
                        </div>
                        <div className="social">
                            <div>
                                <span>
                                    <a href="https://www.linkedin.com/in/nathan-thai-943636180/"><faIcons.FaLinkedin /></a>
                                </span>
                                <span>
                                    <a href="https://github.com/viietwalkerr"><faIcons.FaGithub /></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default About;