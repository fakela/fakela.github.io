import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Layout } from '@components';
import { IconGitHub, IconExternal } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Main } from '@styles';
const { colors, fonts, fontSizes } = theme;

const StyledMainContainer = styled(Main)``;
const StyledTableContainer = styled.div`
  margin: 100px -20px;
  ${media.tablet`
    margin: 100px -10px;
  `};
`;
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  .hide-on-mobile {
    ${media.tablet`
      display: none;
    `};
  }

  tbody tr {
    transition: ${theme.transition};

    &:hover,
    &:focus {
      background-color: ${colors.lightNavy};
    }
  }
  th,
  td {
    cursor: default;
    line-height: 1.5;
    padding: 10px 20px;
    ${media.tablet`
      padding: 10px;
    `};
  }
  th {
    text-align: left;
  }
  td {
    &.year {
      width: 10%;
      ${media.tablet`
        font-size: ${fontSizes.sm};
      `};
    }
    &.title {
      padding-top: 15px;
      color: ${colors.lightestSlate};
      font-size: ${fontSizes.xl};
      font-weight: 700;
    }
    &.company {
      width: 15%;
      padding-top: 15px;
      font-size: ${fontSizes.lg};
    }
    &.tech {
      font-size: ${fontSizes.xs};
      font-family: ${fonts.SFMono};
    }
    &.links {
      span {
        ${mixins.flexBetween};
        a + a {
          margin-left: 10px;
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

const ArchivePage = ({ location, data }) => {
  const projects = data.allMarkdownRemark.edges;

  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  return (
    <Layout location={location}>
      <Helmet>
        <title>Archive </title>
        <link rel="canonical" href="" />
      </Helmet>

      <StyledMainContainer>
        <header ref={revealTitle}>
          <h1 className="big-title">Archive</h1>
          <p className="subtitle">A list of all projects i have worked on </p>
        </header>

        <StyledTableContainer ref={revealTable}>
          <StyledTable>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Company</th>
                <th className="hide-on-mobile">Tech Stack</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 &&
                projects.map(({ node }, i) => {
                  const { date, github, external, title, tech, company } = node.frontmatter;
                  return (
                    <tr key={i} ref={el => (revealProjects.current[i] = el)}>
                      <td className="overline year">{`${new Date(date).getFullYear()}`}</td>

                      <td className="title">{title}</td>

                      <td className="company hide-on-mobile">
                        {company ? <span>{company}</span> : <span>—</span>}
                      </td>

                      <td className="tech hide-on-mobile">
                        {tech.length > 0 &&
                          tech.map((item, i) => (
                            <span key={i}>
                              <span key={i}>{item}</span>
                              {i !== tech.length - 1 && <span>&nbsp;&middot;&nbsp;</span>}
                            </span>
                          ))}
                      </td>

                      <td className="links">
                        <span>
                          {github ? (
                            <a
                              href={github}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label="GitHub Link">
                              <IconGitHub />
                            </a>
                          ) : (
                            <span aria-label="Empty">—</span>
                          )}
                          {external ? (
                            <a
                              href={external}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label="External Link">
                              <IconExternal />
                            </a>
                          ) : (
                            <span aria-label="Empty">—</span>
                          )}
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </StyledTable>
        </StyledTableContainer>
      </StyledMainContainer>
    </Layout>
  );
};
ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ArchivePage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { showInProjects: { ne: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            tech
            github
            external
            company
          }
          html
        }
      }
    }
  }
`;
