import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import IMG_2916 from "./photos/IMG_2916.jpg"; // Import the image

// Global styles using styled-components
const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow-x: hidden; /* Prevent horizontal overflow */
  
  }

  /* Hide scrollbar for Webkit-based browsers */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;
`;

// Container styled-component
const Container = styled.div`
  /* background-image: url(${IMG_2916});  Set background image */
  background-size: cover; /* Ensure the background image covers the entire container */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Do not repeat the background image */
  min-height: 100vh;
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
      <Container src={IMG_2916} alt="background image">
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
