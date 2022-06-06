import React from 'react'
import {FaFacebook,FaInstagram,FaYoutube,FaLinkedin} from 'react-icons/fa';
import { 
    FooterContainer,
    FooterLinksWrapper,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLink,
    FooterLinkTitle,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const toggleHome = () => {
    scroll.scrollToTop();}

const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Me</FooterLinkTitle>
                            <FooterLink to="/signin">xxxxxxx</FooterLink>
                            <FooterLink to="/signin">xxxxxxx</FooterLink>
                            <FooterLink to="/signin">xxxxxxx</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Contact me</FooterLinkTitle>
                            <FooterLink to="/signin">xxxxxxx</FooterLink>
                            <FooterLink to="/signin">xxxxxxx</FooterLink>
                            <FooterLink to="/signin">xxxxxxx</FooterLink>
                        </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Useful Links</FooterLinkTitle>
                            <FooterLink to="/signin">xxxxxxx</FooterLink>
                            <FooterLink to="/signin">xxxxxxx</FooterLink>
                            <FooterLink to="/signin">xxxxxxx</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Overview</FooterLinkTitle>
                            <FooterLink to="/signin">xxxxxxx</FooterLink>
                            <FooterLink to="/signin">xxxxxxx</FooterLink>
                            <FooterLink to="/signin">xxxxxxx</FooterLink>
                        </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo  to='/' onClick={toggleHome}>MyPortfolio</SocialLogo>
                    <WebsiteRights>Merentitis Dimitrios {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='//www.facebook.com/' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//www.youtube.com/' target="_blank" aria-label="Youtube">
                            <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='//gr.linkedin.com/in/dimitrios-merentitis-software-engineer' target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='//instagram.com/mered' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                            </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    </>
  )
}

export default Footer
