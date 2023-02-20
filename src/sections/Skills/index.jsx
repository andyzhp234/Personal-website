import React from "react";
import Title from "../../components/Title";
import Icon from "../../components/Icon";
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
import IconSQL from "../../assets/icon-skills/icon-sql.png";
import IconGit from "../../assets/icon-skills/icon-git.png";

export default function Skills() {
  return (
    <div className="lg:py-22 px-6 py-20 md:px-10 xl:px-52" data-aos="fade-up">
      <Title>Skills</Title>
      <div className="flex flex-wrap justify-center px-2 lg:px-10">
        <Icon imgSrc={IconJavascript} text="Javascript" />
        <Icon imgSrc={IconPython} text="Python" />
        <Icon imgSrc={IconReact} text="React" />
        <Icon imgSrc={IconRedux} text="Redux" />
        <Icon imgSrc={IconHTML} text="HTML" />
        <Icon imgSrc={IconCSS} text="CSS" />
        <Icon imgSrc={IconSass} text="Sass" />
        <Icon imgSrc={IconJest} text="Jest" />
        <Icon imgSrc={IconNode} text="Node.js" />
        <Icon imgSrc={IconDjango} text="Django" />
        <Icon imgSrc={IconRedis} text="Redis" />
        <Icon imgSrc={IconSQL} text="SQL" />
        <Icon imgSrc={IconGit} text="Git" />
      </div>
    </div>
  );
}
