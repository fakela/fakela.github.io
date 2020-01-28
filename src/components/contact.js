import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { IconGitHub, IconLinkedin, IconTwitter } from '@components/icons';
import { theme, mixins, media, Section } from '@styles';
const { colors} = theme;

const StyledContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`;

const StyledTitle = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;


const StyledSocial = styled.div`
  color: ${colors.white};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: block;
  ${media.tablet`display: none;`};
`;
const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Contact = ({ data }) => {
  const { frontmatter } = data[0].node;
  const { title } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="contact" ref={revealContainer}>
      <StyledTitle>{title}</StyledTitle>
      <StyledSocial>
        <StyledSocialList>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <StyledSocialLink
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}>
                  {name === 'GitHub' ? (
                    <IconGitHub />
                  ) : name === 'Linkedin' ? (
                    <IconLinkedin />
                  ) : name === 'Twitter' ? (
                    <IconTwitter />
                  ) : (
                    <IconGitHub />
                  )}
                </StyledSocialLink>
              </li>
            ))}
        </StyledSocialList>
      </StyledSocial>
    </StyledContainer>
  );
};

Contact.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contact;
