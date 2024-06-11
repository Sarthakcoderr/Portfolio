// src/GlobalStyle.js
import { createGlobalStyle, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #141414;
    color: #ffffff;
    animation: ${fadeIn} 1s ease-out;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  section {
    padding-top: 80px; /* Adjust this value if needed */
  }
`;

export { GlobalStyle, slideIn };
