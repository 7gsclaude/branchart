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
    box-sizing: border-box;
  }

  /* Additional Styles */
  body {
    overflow-x: hidden; /* Prevent horizontal overflow */
    padding: 0 20px; /* Add padding to the left and right */
    max-width: auto; /* Optionally set a max-width */

    /* Hide scrollbar for Webkit-based browsers */
    ::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for Firefox */
    scrollbar-width: none;
  }
`;

// Container styled-component
const Container = styled.div`
  background-color: #18b8d4;
  height: 100vh;
  width: 100%;
  scroll-behavior: smooth;
  overflow-y: auto;

  /* Hide scrollbar for Webkit-based browsers */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;
`;

// Content styled-component to add margin
const Content = styled.div`
  margin: 0 40px; /* Add margin to the left and right */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Content>
          <Main />
        </Content>
        <Footer />
      </Container>
    </>
  );
}

export default App;
