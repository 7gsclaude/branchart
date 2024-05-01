import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled components for the navbar
const Nav = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

const NavBrand = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
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
      <NavBrand>Branch Art</NavBrand>
      <NavLinks>
        <NavLink>
          <StyledLink to="/">Home</StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink to="/art">Art</StyledLink>
        </NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;