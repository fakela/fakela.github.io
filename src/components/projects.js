import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { IconGitHub, IconExternal } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Button } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledTitle = styled.h4`
  margin: 0 auto;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;
const StyledArchiveLink = styled(Link)`
  ${mixins.inlineLink};
  text-align: center;
  margin: 0 auto;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.sm};
  &:after {
    bottom: 0.1em;
  }
`;
const StyledGrid = styled.div`
  margin-top: 50px;

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const StyledProjectInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};

  text-decoration: none !important;
  display: grid;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.075), 0px 4px 30px 0px rgba(0, 0, 0, 0.025);
  grid-template-areas: 'image text';
  grid-gap: 80px;
  padding: 30px 30px 30px 0px;
  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
`;
const StyledProject = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-5px);
    }
  }
`;
const StyledProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;

const StyledProjectLinks = styled.div`
  margin-right: -10px;
  color: black;
`;
const StyledIconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxl};
  color: black;
`;
const StyledProjectDescription = styled.div`
  font-size: 17px;
  color: black;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xs};
    color: black;
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const StyledMoreButton = styled(Button)`
  margin: 100px auto 0;
  color: black;
`;

const Projects = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.filter(({ node }) => node);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  return (
    <StyledContainer>
      <StyledTitle ref={revealTitle}>Projects</StyledTitle>
      <StyledArchiveLink to="/archive" ref={revealArchiveLink}>
        View More
      </StyledArchiveLink>

      <StyledGrid>
        <TransitionGroup className="projects">
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { github, external, title, tech } = frontmatter;
              return (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledProject
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    tabIndex="0"
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    <StyledProjectInner>
                      <header>
                        <StyledProjectHeader>
                          <StyledProjectLinks>
                            {github && (
                              <StyledIconLink
                                href={github}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="GitHub Link">
                                <IconGitHub />
                              </StyledIconLink>
                            )}
                            {external && (
                              <StyledIconLink
                                href={external}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="External Link">
                                <IconExternal />
                              </StyledIconLink>
                            )}
                          </StyledProjectLinks>
                        </StyledProjectHeader>
                        <StyledProjectName>{title}</StyledProjectName>
                        <StyledProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                      </header>
                      <footer>
                        <StyledTechList>
                          {tech.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </StyledTechList>
                      </footer>
                    </StyledProjectInner>
                  </StyledProject>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </StyledGrid>

      <StyledMoreButton onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </StyledMoreButton>
    </StyledContainer>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Projects;
