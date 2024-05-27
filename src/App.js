import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

// Global styles using styled-components
const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Hide scrollbar for all browsers */
  body {
    overflow-x: hidden; /* Prevent horizontal overflow */
    padding: 0 20px; /* Add padding to the left and right */
    max-width: auto; /* Optionally set a max-width */
    margin: 0 auto; /* Center the content */
    
    /* Hide scrollbar */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
  }

  /* Hide scrollbar for Webkit browsers (Chrome, Safari, etc.) */
  body::-webkit-scrollbar {
    display: none; /* Webkit-based browsers */
  }
`;

// Container styled-component
const Container = styled.div`
  background-color: #18b8d4;
  height: 100vh;
  width: 100%;
  /* scroll-snap-type: y mandatory; */
  scroll-behavior: smooth;
  overflow-y: auto;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Main />
        <Footer />
      </Container>
    </>
  );
}

export default App;
