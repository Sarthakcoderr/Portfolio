import React from "react";
import styled, { keyframes } from "styled-components";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ContactSection = styled.section`
  padding: 10px 20px 100px 20px;
  text-align: center;
  background-color: #141414;
  animation: ${fadeIn} 1.5s ease-out;
`;

const ContactDetails = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  padding: 30px;
  border: 2px solid #e50914;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 10px 20px;
  font-size: 22px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #e50914;
  }

  svg {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 10px 0;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin: 8px 0;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 40px;
  padding: 10px 20px;
  background-color: #e50914;
  color: #ffffff;
  border-radius: 5px;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b00710;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;

const Contact = () => (
  <ContactSection id="contact">
    <h2>Get In Touch</h2>
    <ContactDetails>
      <ContactItem href="mailto:sarthak.nick@gmail.com">
        <FaEnvelope />
        sarthak.nick@gmail.com
      </ContactItem>
      <ContactItem href="tel:+919756300365">
        <FaPhone />
        +91-9756300365
      </ContactItem>
      <ContactItem
        href="https://github.com/sarthakcoderr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        Sarthak Bansal
      </ContactItem>
      <ContactItem
        href="https://www.linkedin.com/in/sarthak-bansal-77028a1b7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
        Sarthak Bansal
      </ContactItem>
    </ContactDetails>
    <DownloadButton href="/Sarthak_Resume.pdf" download>
      Download Resume
    </DownloadButton>
  </ContactSection>
);

export default Contact;
