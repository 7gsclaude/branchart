import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BranchLogo from "../photos/BranchLogo.PNG"; // Import the logo image

// Styled components for the navbar
const Nav = styled.nav`
  background-color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column; /* Stack logo and links vertically */
  align-items: center; /* Center items horizontally */
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center; /* Center logo horizontally */
  margin-bottom: 10px; /* Add space between the logo and the links */
`;

const LogoImage = styled.img`
  width: 10%;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex; /* Display links in a row */
  justify-content: center; /* Center links horizontally */
`;

const NavLink = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0; /* Remove margin on the last link */
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0; /* Change color on hover */
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <LogoImage src={BranchLogo} alt="Branch Logo" />
      </LogoContainer>
      <NavLinks>
        <NavLink>
          <StyledLink to="/">Home</StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink to="/art">Art</StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink to="/realestate">RealEstate</StyledLink>
        </NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
