import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  padding: 100px 20px;
  background-color: #141414;
  color: white;

  @media (max-width: 768px) {
    padding: 80px 15px;
  }

  @media (max-width: 480px) {
    padding: 60px 10px;
  }
`;

const ProjectsHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 60px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;
  align-items: center;
  padding: 30px;
  border: 2px solid #e50914;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 40px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 30px;
    padding: 15px;
  }
`;

const ProjectImageLink = styled.a`
  display: block;
  width: 60%;
  margin-right: 30px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectDetails = styled.div`
  max-width: 40%;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 20px;
  color: #e50914;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const ProjectButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  color: white;
  background-color: #e50914;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #b00710;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
  }
`;

const Projects = () => (
  <ProjectsSection id="projects">
    <ProjectsHeading>Projects</ProjectsHeading>
    <Project>
      <ProjectImageLink href="https://prodomania.vercel.app/" target="_blank">
        <ProjectImage src="/Prodomania.png" alt="Project 1" />
      </ProjectImageLink>
      <ProjectDetails>
        <ProjectTitle>Prodomania E-comm Website</ProjectTitle>
        <ProjectDescription>
          This is a fully functional and responsive e-commerce website built
          using React.js, HTML, and CSS. The website provides a seamless
          shopping experience, featuring a clean and intuitive user interface.
          It is designed to adapt to various screen sizes, ensuring a consistent
          and enjoyable experience across desktops, tablets, and mobile devices.
        </ProjectDescription>
        <ButtonContainer>
          <ProjectButton
            href="https://github.com/Sarthakcoderr/E-commerce-Site"
            target="_blank"
          >
            GitHub Code
          </ProjectButton>
          <ProjectButton href="https://prodomania.vercel.app/" target="_blank">
            Live Project
          </ProjectButton>
        </ButtonContainer>
      </ProjectDetails>
    </Project>
    <Project>
      <ProjectImageLink href="https://today-s-plan.vercel.app/" target="_blank">
        <ProjectImage src="/to-do.png" alt="Project 2" />
      </ProjectImageLink>
      <ProjectDetails>
        <ProjectTitle>Today's Plan</ProjectTitle>
        <ProjectDescription>
          This React JS application tackles daily tasks with a user-friendly
          interface. Create, manage, and track your to-dos for a boost in
          productivity. Prioritize tasks for optimal organization, and mark them
          complete for a satisfying progress visualization. The included dark
          mode offers a comfortable user experience in low-light settings. This
          app empowers you to stay on top of your schedule and achieve a sense
          of accomplishment.
        </ProjectDescription>
        <ButtonContainer>
          <ProjectButton
            href="https://github.com/Sarthakcoderr/Today-s-Plan"
            target="_blank"
          >
            GitHub Code
          </ProjectButton>
          <ProjectButton
            href="https://today-s-plan.vercel.app/"
            target="_blank"
          >
            Live Project
          </ProjectButton>
        </ButtonContainer>
      </ProjectDetails>
    </Project>
    {/* Add more projects as needed */}
  </ProjectsSection>
);

export default Projects;
