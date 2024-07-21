// Style
import styled from "styled-components";

const Project = ({ title, tools, description, image, demo, github }) => {
  return (
    <StyledProject>
      <div className="project-img">
        <img src={image} alt={`Project Image for ${title}`} />
      </div>
      <div className="project-desc">
        <p className="project-title">{title}</p>
        <StyledTools>
          {tools.map((tool, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: tool }} />
          ))}
        </StyledTools>
        <p className="project-summary">{description}</p>
        <div className="buttons">
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <button className="demo-button">Try Project</button>
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
  flex-direction: column;
  max-width: 550px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  margin: 0 auto;

  .project-img {
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      display: block;
    }
  }

  .project-desc {
    background-color: #f9c04d;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    @media (max-width: 809px) {
      padding: 1rem;
    }

    .project-title {
      padding: 0.25rem 0;
      font-family: "Signika", sans-serif;
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: 0.025rem;
      line-height: 1.5rem;
      padding-bottom: 0.5rem;
    }

    .project-summary {
      padding: 0.25rem 0;
      font-family: "Open Sans", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      padding-bottom: 0.5rem;
    }

    .buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;

      .demo-button {
        background-color: #5390b0;
        color: #ffffff;
        font-family: "Signika", sans-serif;
        font-weight: 600;
        border: none;
        padding: 0.75rem 2rem;
        font-size: 1.1rem;
        margin-top: 1rem;
        margin-right: 1.25rem;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: color 0.3s ease;

        &:hover {
          background-color: #274555;
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

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

const StyledTools = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0.75rem 0;

  li {
    margin-right: 0.5rem;
    font-size: 0.8rem;
  }
`;
