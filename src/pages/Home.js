import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled components for the homepage
const HomePageContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
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

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 10px;
`;

const Summary2 = styled(Paragraph)`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 10px;
  margin-left: 40px; /* Adjusted margin to fit with the design */
  padding: 10px;
  border-radius: 5px; /* Rounded corners */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Shadow effect */
`;

const Summary3 = styled(Paragraph)`
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
  width: 100%;
  max-width: 500px; /* Adjust max-width as needed */
  margin-bottom: 20px; /* Add some spacing between the image and summaries */
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
      <Title>Howard Branch</Title>

      <TopImage src="https://via.placeholder.com/500x200" alt="Top Image" />

      <Summary>
        My Goal is to bring the beauty of art to the world. I am a self taught
        artist. I have a passion for creating art that is unique and beautiful.
        I love to experiment with different styles and techniques, and I am
        always looking for new ways to express myself through my art.
      </Summary>

      <Summary2>
        In hac habitasse platea dictumst. Vivamus porttitor dolor in velit
        maximus, at lacinia purus interdum. Mauris non magna id purus tincidunt
        malesuada.
      </Summary2>
      <Summary3>
        Donec non dui sit amet erat interdum feugiat. Nam convallis nisl vel
        ligula fringilla, a fringilla quam cursus. Etiam eget enim et orci
        tincidunt hendrerit.
      </Summary3>
      <ArtSection>
        <ArtTitle>My Artwork</ArtTitle>
        <ArtList {...settings}>
          <ArtItem>
            <ArtImage src="https://via.placeholder.com/150" alt="Artwork" />
            <ArtDescription>
              <ArtName>Artwork 1</ArtName>
              <ArtPrice>$100</ArtPrice>
            </ArtDescription>
          </ArtItem>
          <ArtItem>
            <ArtImage src="https://via.placeholder.com/150" alt="Artwork" />
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
