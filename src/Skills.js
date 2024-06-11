import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SkillsSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #141414;
  animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    padding: 50px 15px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

const SkillsList = styled.ul`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const SkillItem = styled.li`
  background-color: #e50914;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const Skills = () => (
  <SkillsSection id="skills">
    <h2>Skills</h2>
    <SkillsList>
      <SkillItem>JavaScript</SkillItem>
      <SkillItem>React.js</SkillItem>
      <SkillItem>CSS</SkillItem>
      <SkillItem>HTML</SkillItem>
      <SkillItem>C++</SkillItem>
      <SkillItem>SQL</SkillItem>
      <SkillItem>Data structures and Algorithms</SkillItem>
      <SkillItem>Git</SkillItem>
    </SkillsList>
  </SkillsSection>
);

export default Skills;
