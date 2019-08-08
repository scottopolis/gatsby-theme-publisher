import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Menu from './Menu';
import Logo from './Logo';

const Header = () => {

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
          <header
            id="masthead"
            className="mb-8 w-full clearfix bg-gray-900"
            role="banner"
          >
            <div className="flex inset-x-0 h-16 items-center max-w-6xl m-auto">
              <div className="w-full max-w-screen-xl relative mx-auto px-6">
                <div className="flex items-center justify-between text-white">
                  <div className="lg:w-1/4 xl:w-1/5 mr-4">
                    <Logo data={data} />
                  </div>

                    {/* <div>
                      <input className="rounded-lg bg-gray-200 p-4 h-8" type="text" />
                    </div> */}
                    <div>
                      <Menu />
                    </div>

                </div>
              </div>
            </div>
          </header>
      )}
    />
  );
};

export default Header;
