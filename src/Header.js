import React, { useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { slideIn } from "./GlobalStyle";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderWrapper = styled.header`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #141414;
  border-bottom: 1px solid #e5e5e5;
  animation: ${slideIn} 1s ease-out;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #e50914;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #141414;
    padding: 20px;
    border-top: 1px solid #e5e5e5;
  }
`;

const NavLink = styled(ScrollLink)`
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #e50914;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #e50914;
  color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #b00710;
  }

  @media (max-width: 768px) {
    padding: 10px;
    text-align: center;
    width: 100%;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: #ffffff;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Logo>Sarthak Bansal</Logo>
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Nav open={menuOpen}>
        <NavLink
          to="about"
          smooth={true}
          duration={1000}
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="skills"
          smooth={true}
          duration={1000}
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </NavLink>
        <NavLink
          to="projects"
          smooth={true}
          duration={1000}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </NavLink>
        <NavLink
          to="contact"
          smooth={true}
          duration={1000}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
        <ResumeButton href="/Sarthak_Resume.pdf" download>
          Download Resume
        </ResumeButton>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
