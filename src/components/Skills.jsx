import styled, { keyframes } from "styled-components";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiPython,
  SiTailwindcss,
  SiSass,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiFigma,
  SiBootstrap,
  SiGit,
  SiDjango,
} from "react-icons/si";
import Mjml from "../assets/mjmlIcon.png";

const jiggleAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
  75% {
    transform: rotate(-2deg);
  }
  100% {
    transform: rotate(0);
  }
`;

const Skills = () => {
  return (
    <StyledSkills id="skills">
      <SkillsList>
        <SkillItem>
          <SiHtml5 /> HTML
        </SkillItem>
        <SkillItem>
          <SiCss3 /> CSS
        </SkillItem>
        <SkillItem>
          <SiJavascript /> JavaScript
        </SkillItem>
        <SkillItem>
          <SiReact /> React
        </SkillItem>
        <SkillItem>
          <img src={Mjml} alt="MJML Logo" /> MJML
        </SkillItem>
        <SkillItem>
          <SiTailwindcss /> Tailwind CSS
        </SkillItem>
        <SkillItem>
          <SiSass /> Sass
        </SkillItem>
        <SkillItem>
          <SiBootstrap /> Bootstrap
        </SkillItem>
        <SkillItem>
          <SiPython /> Python
        </SkillItem>
        <SkillItem>
          <SiAdobephotoshop /> Photoshop
        </SkillItem>
        <SkillItem>
          <SiAdobeillustrator /> Illustrator
        </SkillItem>
        <SkillItem>
          <SiAdobeindesign /> InDesign
        </SkillItem>
        <SkillItem>
          <SiFigma /> Figma
        </SkillItem>
        <SkillItem>
          <SiGit /> Git
        </SkillItem>
      </SkillsList>
    </StyledSkills>
  );
};

export default Skills;

const StyledSkills = styled.section`
  /* max-width: 1200px;
  margin: 2rem auto; */
  background-color: red;
  padding: 2rem 0;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 2rem auto;
`;

const SkillItem = styled.li`
  padding: 0.5rem 1.25rem;
  border-radius: 1.5rem;
  background-color: #f0f0f0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;

  svg,
  img {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 0.5rem;
  }

  &:hover {
    animation: ${jiggleAnimation} 0.5s ease infinite;
  }
`;
