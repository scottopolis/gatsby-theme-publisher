import React from 'react';
import { Link } from 'gatsby';
import wpgraphqlLogo from '../images/wpgraphql-logo.png';

const Logo = ({ data }) => (
  <Link to="/" className="h-10 overflow-hidden block" rel="home" itemProp="url">
    <img
      src={wpgraphqlLogo}
      alt="WPGraphQL Logo"
      width="150"
      height="150"
      className="h-full w-auto block"
      alt={data.site.siteMetadata.title}
      itemProp="logo"
    />
  </Link>
);

export default Logo;
