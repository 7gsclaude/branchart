import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMG_6212 from "../photos/IMG_6212.JPG"; // Import the image
import IMG_3027 from "../photos/IMG_3027.JPG"; // Import the image

// Styled components for the art page
const ArtPageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArtSection = styled.section`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ArtItem = styled.div`
  margin: 10px;
  width: 300px;
`;

const ArtImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const ArtDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  text-align: center;
`;

const ArtCarousel = styled(Slider)`
  width: 60%;
  max-width: 500px;
  margin: 0 auto;
`;

const Art = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ArtPageContainer>
      <h2>Art Gallery</h2>
      <ArtCarousel {...settings}>
        <div>
          <ArtImage src={IMG_6212} alt="Artwork 1" />
          <ArtDescription>
            <strong>Carousel 1</strong>
            <br />
            Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ArtDescription>
        </div>
        <div>
          <ArtImage src={IMG_3027} alt="Artwork 2" />
          <ArtDescription>
            <strong>Carousel 2</strong>
            <br />
            Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ArtDescription>
        </div>
        {/* Add more carousel slides as needed */}
      </ArtCarousel>
      <ArtSection>
        <ArtItem>
          <ArtImage src="https://via.placeholder.com/300" alt="Artwork 3" />
          <ArtDescription>
            <strong>Artwork 1</strong>
            <br />
            Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ArtDescription>
        </ArtItem>
        <ArtItem>
          <ArtImage src="https://via.placeholder.com/300" alt="Artwork 4" />
          <ArtDescription>
            <strong>Artwork 2</strong>
            <br />
            Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ArtDescription>
        </ArtItem>
        {/* Add more ArtItem components as needed */}
      </ArtSection>
    </ArtPageContainer>
  );
};

export default Art;
