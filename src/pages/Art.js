import React from "react";
import styled from "styled-components";

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
  flex-direction: row; /* Set the flex direction to row */
`;

const ArtItem = styled.div`
  margin: 10px;
  width: 300px; /* Set a fixed width for each art item */
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

const Art = () => {
  return (
    <ArtPageContainer>
      <h2>Art Gallery</h2>
      <ArtSection>
        <ArtItem>
          <ArtImage src="https://via.placeholder.com/300" alt="Artwork 1" />
          <ArtDescription>
            Artwork 1 Description Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </ArtDescription>
        </ArtItem>
        <ArtItem>
          <ArtImage src="https://via.placeholder.com/300" alt="Artwork 2" />
          <ArtDescription>
            Artwork 2 Description Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </ArtDescription>
        </ArtItem>
        {/* Add more ArtItem components as needed */}
      </ArtSection>
    </ArtPageContainer>
  );
};

export default Art;
