import React from "react";
import styled, { keyframes } from "styled-components";
import { Typewriter } from "react-simple-typewriter";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AboutSection = styled.section`
  padding: 100px 50px 60px;
  text-align: center;
  background-color: #141414;
  color: white;
  animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    padding: 80px 30px 40px;
  }

  @media (max-width: 480px) {
    padding: 60px 20px 30px;
  }
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 2px solid #e50914;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
  }
`;

const Name = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const AnimatedText = styled.div`
  font-size: 22px;
  color: #e50914;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const AboutMeHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const AboutMeText = styled.p`
  font-size: 20px;
  text-align: left;
  padding: 20px 80px;
  line-height: 1.5;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 20px 60px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 20px 40px;
    margin-bottom: 20px;
  }
`;

const About = () => (
  <AboutSection id="about">
    <ProfileImage src="/dp.png" alt="Sarthak Bansal" />
    <Name>Hello there, I am Sarthak Bansal</Name>
    <AnimatedText>
      <Typewriter
        words={["A Software Developer", "A Front-End Developer"]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </AnimatedText>
    <AboutMeHeading>About Me</AboutMeHeading>
    <AboutMeText>
      I am a recent graduate with a strong foundation in programming concepts,
      algorithms, and data structures. My passion lies in crafting clean,
      efficient, and maintainable code. I also possess a keen eye for design and
      user experience, ensuring a positive user journey.
      <br />A lifelong learner, I am constantly exploring and adapting to new
      technologies to stay ahead of the curve in this dynamic field. I thrive in
      collaborative environments and enjoy tackling complex problems as part of
      a team. I am eager to contribute my skills and enthusiasm to your team and
      help create innovative solutions that make a real impact.
    </AboutMeText>
  </AboutSection>
);

export default About;
