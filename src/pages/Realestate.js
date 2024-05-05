import React from "react";
import styled from "styled-components";

const DisplayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const EstateCard = styled.div`
  width: 40%;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px); /* Move the card up slightly on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  }
`;

const EstateImage = styled.img`
  width: 50%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Location = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const DateSold = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

const Description = styled.div`
  font-size: 14px;
  color: #666;
`;

const estatesData = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/300",
    location: "Los Angeles, CA",
    dateSold: "March 2024",
    description: "Cozy apartment near downtown LA",
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/300",
    location: "New York City, NY",
    dateSold: "February 2024",
    description: "Luxury loft in Manhattan",
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/300",
    location: "Miami, FL",
    dateSold: "January 2024",
    description: "Beachfront condo with ocean view",
  },
  {
    id: 4,
    imageUrl: "https://via.placeholder.com/300",
    location: "San Francisco, CA",
    dateSold: "December 2023",
    description: "Modern penthouse in the heart of SF",
  },  
  
  // Add more estate data as needed
];

const DisplayPage = () => {
  return (
    <DisplayContainer>
      {estatesData.map((estate) => (
        <EstateCard key={estate.id}>
          <EstateImage src={estate.imageUrl} alt="Estate" />
          <Location>{estate.location}</Location>
          <DateSold>Sold: {estate.dateSold}</DateSold>
          <Description>{estate.description}</Description>
        </EstateCard>
      ))}
    </DisplayContainer>
  );
};

export default DisplayPage;
