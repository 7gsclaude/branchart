import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMG_6212 from "../photos/IMG_6212.JPG"; // Import the image
import IMG_3027 from "../photos/IMG_3027.JPG"; // Import the image
import HowardSelfie from "../photos/HowardSelfie.png"; // Import the image


// Styled components for the homepage
const HomePageContainer = styled.div`
  padding: 20px;
`;



const Summary = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 10px;
  margin-left: 70px; /* Move the summary to the right */
  padding: 10px; /* Add padding for better spacing */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Add a shadow effect */
`;


const ArtTitle = styled.h3`
  text-align: center; /* Center the text horizontally */
`;

const ArtSection = styled.section`
  display: flex;
  flex-direction: column; /* Arrange children in a column */
  align-items: center; /* Center children horizontally */
  justify-content: center;
`;

const ArtList = styled(Slider)`
  width: 60%; /* Set the width of the carousel */
  max-width: 500px; /* Set a maximum width for the carousel */
  margin-bottom: 20px;
  margin: 0 auto; /* Center the carousel horizontally */
  .slick-slide div {
    outline: none;
  }
`;

const ArtImage = styled.img`
  width: 60%; /* Make the image fill the entire width of its container */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Ensure the image is treated as a block element */
  margin: 0 auto; /* Center the image horizontally */
`;


const ArtItem = styled.div`
  margin: 0 5px;
`;


const ArtDescription = styled.div`
  padding: 10px; /* Add padding around the description */
`;

const ArtName = styled.h4`
  margin-top: 10px; /* Add some space above the artwork name */
`;

const ArtPrice = styled.p`
  margin-top: 5px; /* Add some space above the artwork price */
`;

const TopImage = styled.img`
  width: 60%;
  max-width: 400px; /* Adjust max-width as needed */
  margin-bottom: 10px; /* Add some spacing between the image and summaries */
`;

const TopHalf = styled.div`
  display: flex;
  flex-direction: row; /* Arrange children in a row */
  align-items: center; /* Center children vertically */
  justify-content: center; /* Center children horizontally */
  margin-bottom: 20px; /* Add some space at the bottom */
  `;


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => {
   <Slider {...settings}/>

  return (
    <HomePageContainer>
      <TopHalf>
        <TopImage src={HowardSelfie} alt="Top Image" />

        <Summary>
          Welcome to my artistic realm! I’m Howard, an abstract artist
          passionate about bringing depth and texture to my creations. Utilizing
          acrylic paint along with a variety of mixed media, I strive to produce
          artworks that evoke emotion and intrigue. Currently, I am the artist
          in residence at Ward 8, where my works are proudly displayed. Feel
          free to explore my art and connect with me. howardbranchart@gmail.com
        </Summary>
      </TopHalf>
      <ArtSection>
        <ArtTitle>My Artwork</ArtTitle>
        <ArtList {...settings}>
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
