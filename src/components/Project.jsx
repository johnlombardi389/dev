// Style
import styled from "styled-components";
// Images
import ProjectOne from "../assets/project1.jpeg";

const Project = ({ title, tools, description, image, demo, github }) => {
  return (
    <StyledProject>
      <div className="project-img">
        <img src={image} alt={`Project Image for ${title}`} />
      </div>
      <div className="project-desc">
        <p className="project-title">{title}</p>
        {/* <StyledTools>
          {tools.map((tool, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: tool }} />
          ))}
        </StyledTools> */}
        <p className="project-summary">{description}</p>
        <div className="buttons">
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <button className="demo-button">View Email</button>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="github-button">See Code</button>
          </a>
        </div>
      </div>
    </StyledProject>
  );
};

export default Project;

const StyledProject = styled.div`
  display: flex;
  align-items: stretch;
  max-width: 550px;

  .project-img {
    flex: 1;
    display: flex;
    align-items: stretch;
    height: auto;
    z-index: 2;
    /* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); */

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .project-desc {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    background-color: #f9c04d;
    padding: 2rem;
    /* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2); */

    .project-title {
      padding: 0.5rem 0;
      font-family: "Signika", sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.075rem;
      line-height: 1.5rem;
      padding-bottom: 1rem;
    }

    .project-summary {
      padding: 0.5rem 0;
      font-family: "Open Sans", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      padding-bottom: 1rem;
    }

    .buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;

      .demo-button {
        background-color: #274555;
        color: #ffffff;
        font-family: "Signika", sans-serif;
        font-weight: 600;
        border: none;
        padding: 1rem 2rem;
        font-size: 1.1rem;
        margin-top: 1rem;
        margin-right: 2rem;
        cursor: pointer;
        transition: color 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          background-color: #172932;
          color: #f9a11b;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      }

      .github-button {
        margin-top: 0.5rem;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        font-size: 0.9rem;
        text-decoration: underline;
        color: #274555;
        background: none;
        border: none;
        cursor: pointer;
        margin-top: 1rem;
        &:hover {
          color: black;
        }
      }
    }
  }

  /* @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  } */
`;

const StyledTools = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding-bottom: 2rem;

  li {
    margin-right: 0.5rem;
    font-size: 0.8rem;
  }
`;
