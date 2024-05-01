import Navbar from './components/Navbar';
import React from 'react';
import styled from 'styled-components';
import Main from "./components/Main";

const Container = styled.div`
  background-color: #C198FA;
  height: 100vh;
  width: 100%;
  /* scroll-snap-type: y mandatory; */
  scroll-behavior: smooth;
  overflow-y: auto;
`;

function App() {
  return (
    <div>
      <Container>
        <Navbar />
        <Main />
      </Container>
    </div>
  );
}

export default App;
