import React from "react";
import styled from "styled-components";

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: #c198fa;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const SocialMedia = styled.div`
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 10px; /* Add margin to create space between icons */
  font-size: 20px;
  transition: color 0.3s ease;
`;

// Adjusted styles for the social links on hover
const StyledSocialLink = styled(SocialLink)`
  &:hover {
    color: #ff0;
  }
`;

const EmailLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-top: 10px; /* Add margin to create space between links */
  display: block; /* Ensure the link takes the full width */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>Follow us on social media:</div>
      <SocialMedia>
        <StyledSocialLink
          href="https://www.facebook.com/your_facebook_page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
        </StyledSocialLink>
        <StyledSocialLink
          href="https://www.instagram.com/your_instagram_page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i> {/* Instagram icon */}
        </StyledSocialLink>
        {/* Add more social media links as needed */}
      </SocialMedia>
      <div>
        Visit <a href="https://www.lofty.com">Lofty</a> for real estate.
      </div>
      <EmailLink href="mailto:howardbranchart@gmail.com">
        Contact us via Email Click Here! 
      </EmailLink>
    </FooterContainer>
  );
};

export default Footer;
