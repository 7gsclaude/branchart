import React from "react";
import styled from "styled-components";

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: #c198fa;
  color: #fff;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    .footer-text {
      display: none; /* Hide all text elements */
    }
  }
`;

const SocialMedia = styled.div`
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 0; /* Remove margin on smaller screens */
  }
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 10px; /* Add margin to create space between icons */
  font-size: 20px;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 40px; /* Enlarge icons on smaller screens */
    margin-right: 20px; /* Increase space between icons */
  }
`;

// Adjusted styles for the social links on hover
const StyledSocialLink = styled(SocialLink)`
  &:hover {
    color: #ff0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-text">Follow us on social media:</div>
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
      <div className="footer-text">
        Visit{" "}
        <a href="https://www.lofty.com" className="footer-text">
          Lofty
        </a>{" "}
        for real estate.
      </div>
      <a href="mailto:howardbranchart@gmail.com" className="footer-text">
        Contact us via Email Click Here!
      </a>
    </FooterContainer>
  );
};

export default Footer;
