import React from "react";
import styled, { keyframes } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HowardSelfie from "../photos/HowardSelfie.png"; // Import the image


const HomePageContainer = styled.div`
  padding: 20px;
  
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const OpeningStatement = styled.h1`
  font-size: 48px;
  line-height: 1.5;
  text-align: left;
  margin: 0;
  color: white;
`;


const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
`;

const TextContainer = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const SecondSummary = styled.h3`
  z-index: 2;
  font-size: 20px;
  line-height: 2.5;
  text-align: justify;
  padding: 10px;
  color: white;
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid white;
    border-radius: 8px;
    transform: scale(1);
    opacity: 1;
    transition: transform 2s, opacity 2s; /* Add transition for smoothness */
  }

  &:hover::before {
    animation: pulseAnimation 2s infinite; /* Apply animation on hover */
  }

  @keyframes pulseAnimation {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;


const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 40%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 5px;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-top: 50px solid white;
    border-right: 50px solid transparent;
    border-bottom: 50px solid transparent;
    width: 40%;
    z-index: 0;
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const TopImage = styled.img`
  width: 60%;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  margin-top: 20px;
  margin-left: auto;
  justify-content: right;
  clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
  animation: ${floatAnimation} 3s ease-in-out infinite;
`;

const Home = () => {
  return (
    <HomePageContainer>
      <Header>
        <OpeningStatement>
          WELCOME
          <br />
          TO MY
          <br />
          ARTISTIC REALM{" "}
        </OpeningStatement>
        
      </Header>

      <ContentContainer>
        <TextContainer>
          <SecondSummary>
            I'm Howard, an abstract artist passionate about bringing depth and
            texture to my creations. Utilizing acrylic paint along with a
            variety of mixed media, I strive to produce artworks that evoke
            emotion and intrigue.
            <br />
            Currently, I am the artist in residence at Ward 8, where my works
            are proudly displayed. Additionally, I specialize in selling
            properties across the United States and in Mexico, offering a
            diverse range of options for clients seeking their dream homes or
            investment opportunities.
          </SecondSummary>
        </TextContainer>
        <ImageContainer>
          <TopImage src={HowardSelfie} alt="Top Image" />
        </ImageContainer>
      </ContentContainer>
    </HomePageContainer>
  );
};

export default Home;
