import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Head, Nav, Social, Footer } from '@components';
import { GlobalStyle } from '@styles';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading] = useState(isHome);

  useEffect(() => {
    
    if (isLoading || isHome) {
      return;
    }
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
        }
      }, 0);
    }
  }, [isLoading]);

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <div id="root">
          <Head metadata={site.siteMetadata} />

          <GlobalStyle />
          <Nav isHome={isHome} />
          <Social isHome={isHome} />
          {/* <Email isHome={isHome} /> */}

          <div id="content">
            {children}
            <Footer />
          </div>
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
