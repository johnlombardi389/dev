// Style
import styled from "styled-components";
// Icons
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>Website designed and coded by John Lombardi (That's me again!)</p>
        <IconContainer>
          <a
            href="https://www.linkedin.com/in/johnlombardi389/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/johnlombardi389"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="mailto:johnlombardi389@gmail.com">
            <FaEnvelope />
          </a>
        </IconContainer>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  bottom: 0;
  width: 100%;
  background-color: #172932;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  padding: 2rem 0;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  a {
    color: #fff;
    margin: 0 1rem;
    transition: color 0.3s;

    &:hover {
      color: #ff7761;
    }
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;
