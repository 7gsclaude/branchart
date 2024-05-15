import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HowardSelfie from "../photos/HowardSelfie.png"; // Import the image
import IMG_6212 from "../photos/IMG_6212.JPG"; // Import the image
import IMG_3027 from "../photos/IMG_3027.JPG"; // Import the image
import FloatingImage from "../components/FloatingImage"; // Import the FloatingImage component

// Styled components for the homepage
const HomePageContainer = styled.div`
  padding: 20px;
`;

const Summary = styled.p`
  position: relative;
  z-index: 2;
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  text-align: justify;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 1);
  border-radius: 8px;
  background-color: #3818d4;
  color: white;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const ArtTitle = styled.h3`
  text-align: center;
`;

const ArtSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ArtList = styled(Slider)`
  width: 60%;
  max-width: 500px;
  margin-bottom: 20px;
  margin: 0 auto;
  .slick-slide div {
    outline: none;
  }
`;

const ArtImage = styled.img`
  width: 60%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const ArtItem = styled.div`
  margin: 0 5px;
`;

const ArtDescription = styled.div`
  padding: 10px;
`;

const ArtName = styled.h4`
  margin-top: 10px;
`;

const ArtPrice = styled.p`
  margin-top: 5px;
`;

const TopImage = styled.img`
  width: 200px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

const Home = () => {
  return (
    <HomePageContainer>
      <SummaryContainer>
        {/* Floating placeholder image */}
        <FloatingImage src={IMG_6212} alt="Floating Image" />
        <Summary>
          Welcome to my artistic realm! I'm Howard, an abstract artist
          passionate about bringing depth and texture to my creations. Utilizing
          acrylic paint along with a variety of mixed media, I strive to produce
          artworks that evoke emotion and intrigue.
          <br />
          Currently, I am the artist in residence at Ward 8, where my works are
          proudly displayed. Feel free to explore my art and connect with me at
          howardbranchart@gmail.com.
        </Summary>
        <TopImage src={HowardSelfie} alt="Top Image" />
      </SummaryContainer>

      <ArtSection>
        <ArtTitle>My Artwork</ArtTitle>
        <ArtList>
          <ArtItem>
            <ArtImage src={IMG_6212} alt="Artwork" />
            <ArtDescription>
              <ArtName>Artwork 1</ArtName>
              <ArtPrice>$100</ArtPrice>
            </ArtDescription>
          </ArtItem>
          <ArtItem>
            <ArtImage src={IMG_3027} alt="Artwork" />
            <ArtDescription>
              <ArtName>Artwork 2</ArtName>
              <ArtPrice>$150</ArtPrice>
            </ArtDescription>
          </ArtItem>
          <ArtItem>
            <ArtImage src="https://via.placeholder.com/150" alt="Artwork" />
            <ArtDescription>
              <ArtName>Artwork 3</ArtName>
              <ArtPrice>$200</ArtPrice>
            </ArtDescription>
          </ArtItem>
        </ArtList>
      </ArtSection>
    </HomePageContainer>
  );
};

export default Home;
