import React, { useState } from "react";
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
  position: relative; /* For positioning the hamburger icon */

  @media (max-width: 768px) {
    flex-direction: row; /* Align logo and hamburger icon in a row */
    justify-content: space-between; /* Space between logo and hamburger icon */
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center; /* Center logo horizontally */
  margin-bottom: 10px; /* Add space between the logo and the links */

  @media (max-width: 768px) {
    margin-bottom: 0; /* Remove bottom margin on smaller screens */
  }
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

  @media (max-width: 768px) {
    flex-direction: column; /* Stack links vertically */
    position: absolute; /* Position the dropdown menu */
    top: 90px; /* Position below the navbar */
    left: 0; /* Align to the left */
    right: 0; /* Align to the right */
    background-color: #333; /* Same background as the navbar */
    display: ${({ isOpen }) =>
      isOpen ? "flex" : "none"}; /* Toggle visibility */
    z-index: 1; /* Ensure it appears above other content */
  }
`;

const NavLink = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0; /* Remove margin on the last link */
  }

  @media (max-width: 768px) {
    margin: 10px 0; /* Add vertical margin on smaller screens */
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

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex; /* Show hamburger icon on smaller screens */
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 4px 0;
  transition: all 0.3s ease;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <LogoContainer>
        <LogoImage src={BranchLogo} alt="Branch Logo" />
      </LogoContainer>
      <HamburgerIcon onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </HamburgerIcon>
      <NavLinks isOpen={isOpen}>
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
