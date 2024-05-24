import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyles";

// Global styles using styled-components
const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  html,
  body {
    margin: 0;
    padding: 0;
  }


  

  /* Additional Styles */
  body {
    overflow-x: hidden; /* Prevent horizontal overflow */
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
      <GlobalStyle />
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
