import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled components for the navbar
const Nav = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
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
