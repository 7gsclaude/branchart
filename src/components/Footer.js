import React from "react";
import styled from "styled-components";

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: #711472;
  color: #fff;
  padding: 5px;
  text-align: center;
`;

const SocialMedia = styled.div`
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>Follow us on social media:</div>
      <SocialMedia>
        <SocialLink
          href="https://www.facebook.com/your_facebook_page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f">Facebook</i>
        </SocialLink>
        <SocialLink
          href="https://www.twitter.com/your_twitter_page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter">Twitter</i>
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/your_instagram_page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram">Instagram</i>
        </SocialLink>
        {/* Add more social media links as needed */}
      </SocialMedia>
      <div>
        Visit <a href="https://www.lofty.com">Lofty</a> for real estate.
      </div>
    </FooterContainer>
  );
};

export default Footer;
