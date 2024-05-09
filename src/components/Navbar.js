import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BranchLogo from "../photos/BranchLogo.PNG"; // Import the logo image

// Styled components for the navbar
const Nav = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

const NavBrand = styled.div`
  font-size: 24px; /* Increase font size for better visibility */
  color: #fff;
  font-weight: bold;
  display: flex; /* Ensure flex layout for the logo */
  align-items: center; /* Align logo vertically */
`;

const Logo = styled.img`
  width: 60px; /* Increase width for larger logo */
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px; /* Add some spacing between the logo and text */
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const NavLink = styled.li`
  margin-right: 20px;
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
      {/* Wrap the NavBrand inside a Link component */}
      <NavBrand>
        <StyledLink to="/">
          <Logo src={BranchLogo} alt="Branch Art Logo" />{" "}
          {/* Use the logo image */}
        </StyledLink>
      </NavBrand>
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
