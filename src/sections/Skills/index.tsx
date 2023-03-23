import React from "react";
import Icon from "../../components/Icon";
import IconTypescript from "../../assets/icon-skills/icon-typescript.png";
import IconJavascript from "../../assets/icon-skills/icon-javascript.png";
import IconReact from "../../assets/icon-skills/icon-react.png";
import IconRedux from "../../assets/icon-skills/icon-redux.png";
import IconHTML from "../../assets/icon-skills/icon-html.png";
import IconCSS from "../../assets/icon-skills/icon-css.png";
import IconSass from "../../assets/icon-skills/icon-sass.png";
import IconJest from "../../assets/icon-skills/icon-jest.png";
import IconNode from "../../assets/icon-skills/icon-nodejs.png";
import IconPython from "../../assets/icon-skills/icon-python.png";
import IconDjango from "../../assets/icon-skills/icon-django.png";
import IconRedis from "../../assets/icon-skills/icon-redis.png";
import IconPostgresql from "../../assets/icon-skills/icon-postgresql.png";
import IconMongodb from "../../assets/icon-skills/icon-mongodb.png";
import IconMaterialui from "../../assets/icon-skills/icon-materialui.png";
import IconTailwindcss from "../../assets/icon-skills/icon-tailwindcss.png";
import IconGit from "../../assets/icon-skills/icon-git.png";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";

export default function Skills() {
  return (
    <SectionContainer>
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-wrap justify-center px-2 lg:px-10">
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
        <Icon imgSrc={IconJest} text="Jest" />
        <Icon imgSrc={IconNode} text="Node.js" />
        <Icon imgSrc={IconDjango} text="Django" />
        <Icon imgSrc={IconRedis} text="Redis" />
        <Icon imgSrc={IconPostgresql} text="PostgreSQL" />
        <Icon imgSrc={IconMongodb} text="MongoDB" />
        <Icon imgSrc={IconGit} text="Git" />
      </div>
    </SectionContainer>
  );
}
