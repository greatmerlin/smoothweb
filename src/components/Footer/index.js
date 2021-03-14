import React from "react";
import { FooterContainer,FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,FooterLinkTitel, FooterLink} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitel>About us</FooterLinkTitel>
              <FooterLink to="/signin">The Team</FooterLink>
              <FooterLink to="/signin">Partnerships</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitel>Press</FooterLinkTitel>
              <FooterLink to="/signin">TV</FooterLink>
              <FooterLink to="/signin">Radio</FooterLink>
              <FooterLink to="/signin">Internet</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitel>Contact us</FooterLinkTitel>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Become a sponsor</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitel>Social Media</FooterLinkTitel>
              <FooterLink to="/signin">Twitter</FooterLink>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Telegram</FooterLink>
              <FooterLink to="/signin">Medium</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
