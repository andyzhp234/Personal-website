import React from "react";
import Icon from "../../../components/Icon";
import SectionContainer from "../../../components/SectionContainer";
import SectionTitle from "../../../components/SectionTitle";
import IconTypescript from "../../../assets/icon-skills/icon-typescript.png";
import IconJavascript from "../../../assets/icon-skills/icon-javascript.png";
import IconReact from "../../../assets/icon-skills/icon-react.png";
import IconRedux from "../../../assets/icon-skills/icon-redux.png";
import IconHTML from "../../../assets/icon-skills/icon-html.png";
import IconCSS from "../../../assets/icon-skills/icon-css.png";
import IconSass from "../../../assets/icon-skills/icon-sass.png";
import IconJest from "../../../assets/icon-skills/icon-jest.png";
import IconNode from "../../../assets/icon-skills/icon-nodejs.png";
import IconPython from "../../../assets/icon-skills/icon-python.png";
import IconDjango from "../../../assets/icon-skills/icon-django.png";
import IconRedis from "../../../assets/icon-skills/icon-redis.png";
import IconPostgresql from "../../../assets/icon-skills/icon-postgresql.png";
import IconMongodb from "../../../assets/icon-skills/icon-mongodb.png";
import IconMaterialui from "../../../assets/icon-skills/icon-materialui.png";
import IconTailwindcss from "../../../assets/icon-skills/icon-tailwindcss.png";
import IconGit from "../../../assets/icon-skills/icon-git.png";
import IconAWS from "../../../assets/icon-skills/icon-aws.png";
import IconJQuery from "../../../assets/icon-skills/icon-jquery.png";
import IconCPP from "../../../assets/icon-skills/icon-cpp.png";
import IconC from "../../../assets/icon-skills/icon-c.png";
import { fadeUpObserver } from "../../../utils/scrollAnimation";

export default function Skills() {
  const textRef = React.useRef<any>(null);
  React.useEffect(() => {
    fadeUpObserver.observe(textRef.current);
  }, []);

  return (
    <SectionContainer>
      <SectionTitle>Skills</SectionTitle>
      {/* <div className="flex flex-wrap justify-center px-2 lg:px-10">
        <Icon imgSrc={IconCPP} text="C++" />
        <Icon imgSrc={IconC} text="C" />
        <Icon imgSrc={IconJavascript} text="Javascript" />
        <Icon imgSrc={IconTypescript} text="Typescript" />
        <Icon imgSrc={IconPython} text="Python" />
        <Icon imgSrc={IconReact} text="React" />
        <Icon imgSrc={IconRedux} text="Redux" />
        <Icon imgSrc={IconHTML} text="HTML" />
        <Icon imgSrc={IconCSS} text="CSS" />
        <Icon imgSrc={IconTailwindcss} text="Tailwind CSS" />
        <Icon imgSrc={IconMaterialui} text="Material UI" />
        <Icon imgSrc={IconSass} text="Sass" />
        <Icon imgSrc={IconJQuery} text="JQuery" />
        <Icon imgSrc={IconJest} text="Jest" />
        <Icon imgSrc={IconNode} text="Node.js" />
        <Icon imgSrc={IconDjango} text="Django" />
        <Icon imgSrc={IconRedis} text="Redis" />
        <Icon imgSrc={IconPostgresql} text="PostgreSQL" />
        <Icon imgSrc={IconMongodb} text="MongoDB" />
        <Icon imgSrc={IconAWS} text="AWS" />
        <Icon imgSrc={IconGit} text="Git" />
      </div> */}
      <div className="fade-up-hidden flex-col px-40" ref={textRef}>
        <div>
          <div className="pb-5 pt-0 text-[24px] font-bold lg:text-[26px]">
            Programming Languages
          </div>
          <div className="grid grid-cols-5 gap-1 text-[15px] lg:text-[20px]">
            <p>C/C++</p>
            <p>Javascript</p>
            <p>Typescript</p>
            <p>Python</p>
          </div>
        </div>

        <div>
          <div className="pb-5 pt-10 text-[24px] font-bold lg:text-[26px]">
            Embedded Systems and Hardware Design
          </div>
          <div className="grid grid-cols-5 gap-1 text-[15px] lg:text-[20px]">
            <p>Verilog</p>
            <p>ModelSim</p>
            <p>QuestaSim</p>
            <p>Linux</p>
            <p>QT</p>
            <p>STM32</p>
          </div>
        </div>

        <div>
          <div className="pb-5 pt-10 text-[24px] font-bold lg:text-[26px]">
            Full-Stack Development
          </div>
          <div className="grid grid-cols-5 gap-1 text-[15px] lg:text-[20px]">
            <p>React</p>
            <p>Redux</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Tailwind CSS</p>
            <p>Material UI</p>
            <p>Sass</p>
            <p>JQuery</p>
            <p>Jest</p>
            <p>Node.js</p>
            <p>Django</p>
            <p>Redis</p>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
            <p>AWS</p>
            <p>Git</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
