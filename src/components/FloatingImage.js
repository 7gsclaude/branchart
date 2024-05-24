import React from "react";
import styled, { keyframes } from "styled-components";

// Define the floating animation
const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Define the side-to-side animation
const sideToSideAnimation = keyframes`
  0% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(-5px);
  }
`;

// Styled component for the animated placeholder image
const FloatingImageWrapper = styled.div`
  position: fixed; /* Change position to fixed */
  top: 50%; /* Position vertically in the center */
  left: 20px; /* Adjust the distance from the left side */
  transform: translateY(-50%); /* Adjust vertical centering */
`;

const PlaceholderImage = styled.img`
  width: 150px; /* Adjust the width of the placeholder image */
  height: auto;
  border-radius: 50%; /* Make the image round */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); /* Add a shadow effect */
  animation: ${floatAnimation} 3s ease-in-out infinite,
    ${sideToSideAnimation} 5s ease-in-out infinite;
`;

const FloatingImage = ({ src, alt }) => {
  return (
    <FloatingImageWrapper>
      <PlaceholderImage src={src} alt={alt} />
    </FloatingImageWrapper>
  );
};

export default FloatingImage;
