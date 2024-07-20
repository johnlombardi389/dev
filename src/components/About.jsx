import styled from "styled-components";
// Icons
import { FaLaptopCode, FaPencilRuler, FaBook } from "react-icons/fa";

const About = () => {
  return (
    <StyledAbout id="about">
      <AboutContent>
        <AboutText>
          <h2>Hey, it's me! I'm John</h2>
          <p>
            A Front-End Web Developer dedicated to crafting impactful digital
            communication experiences. With a keen eye for detail and a deep
            understanding of design principles, I specialize in transforming
            design concepts into responsive, accessible, and high-quality user
            experiences. I love making websites and apps that just make your day
            better.
          </p>
        </AboutText>
        <AboutList>
          <AboutListItem>
            <FaLaptopCode />
            <p>
              My professional journey prioritizes continuous growth and
              learning. I dedicate myself to refining my skills and keeping up
              with the latest industry trends and best practices.
            </p>
          </AboutListItem>
          <AboutListItem>
            <FaPencilRuler />
            <p>
              My career path combines design and coding, offering a distinctive
              outlook on projects. Originally a product designer, I seamlessly
              transitioned to development. This enables me to easily translate
              design mockups into websites, applications, and emails.
            </p>
          </AboutListItem>
          <AboutListItem>
            <FaBook />
            <p>
              I also love to cook and you'll often find me experimenting in the
              kitchen.
            </p>
          </AboutListItem>
        </AboutList>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.section`
  max-width: 1200px;
  margin: 5rem auto 2rem;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutText = styled.div`
  max-width: 800px;
  h2 {
    font-family: "Signika", sans-serif;
    font-size: 2rem;
    color: #274555;
    letter-spacing: 0.075rem;
    margin-top: 5rem;
    margin-bottom: 1rem;
    padding-left: 0;
    padding-right: 2rem;
    text-align: center;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 2rem;
  }

  @media (max-width: 1200px) {
    margin: 0 2rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    h2 {
      text-align: center;
    }
    p {
      margin-bottom: 0;
    }
  }
`;

const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  max-width: 800px;
  margin: 0 2rem;
`;

const AboutListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: start;
  margin-right: 2rem;
  svg {
    width: 3rem;
    height: 3rem;
    color: #ff7761;
    margin-right: 1rem;
    padding-bottom: 0.75rem;
  }
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 2rem;

    a {
      color: #274555;
      font-weight: 700;
    }
  }
`;
